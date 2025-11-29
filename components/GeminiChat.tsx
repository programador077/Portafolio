import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MessageSquare, X, Send, Bot, Loader } from 'lucide-react';
import { ChatMessage, ChatSender } from '../types';

export const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      text: "Hello! I'm v7-bot. Ask me about Esio's skills, projects, or favorite AI models.",
      sender: ChatSender.AI,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Gemini Setup
  // IMPORTANT: In a real production app, this key should be proxied through a backend
  // or restricted by referer in Google Cloud Console.
  // For this static demo, we rely on the env variable injection.
  const apiKey = process.env.API_KEY;
  const aiRef = useRef<GoogleGenAI | null>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  useEffect(() => {
    if (apiKey) {
      aiRef.current = new GoogleGenAI({ apiKey });
      chatSessionRef.current = aiRef.current.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: `You are an AI assistant for the portfolio of Esio Nahuel Vitanoff (v7.exe). 
          He is a Full Stack Developer & AI Specialist in Los Angeles.
          Style: Technical, concise, slightly enthusiastic (like ThePrimeagen). 
          Key facts:
          - Specialist in LLMs (Ollama, Deepseek, Qwen)
          - Automates with n8n
          - E-commerce pro (Shopify/Dropshipping)
          - Also a barber.
          - Stacks: React, Astro, Next.js, Python.
          Keep answers short and punchy.
          `,
        },
      });
    }
  }, [apiKey]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: ChatSender.USER,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    if (!apiKey || !chatSessionRef.current) {
        // Fallback if no API key is present
        setTimeout(() => {
            const errorMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: "System Error: API Key not found. Please contact Esio to enable my brain.",
                sender: ChatSender.SYSTEM,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMsg]);
            setIsLoading(false);
        }, 1000);
        return;
    }

    try {
      const result = await chatSessionRef.current.sendMessageStream({ message: userMsg.text });
      
      let fullText = '';
      const aiMsgId = (Date.now() + 1).toString();
      
      // Initialize empty AI message
      setMessages(prev => [...prev, {
        id: aiMsgId,
        text: '',
        sender: ChatSender.AI,
        timestamp: new Date()
      }]);

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || '';
        fullText += textChunk;
        
        setMessages(prev => prev.map(msg => 
          msg.id === aiMsgId ? { ...msg, text: fullText } : msg
        ));
      }

    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: "Error communicating with the mainframe.",
        sender: ChatSender.SYSTEM,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-prime-primary hover:bg-prime-secondary text-white hover:text-black p-4 rounded-full shadow-lg shadow-prime-primary/20 transition-all duration-300 animate-bounce"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-prime-bg border border-prime-border w-80 md:w-96 rounded-lg shadow-2xl flex flex-col overflow-hidden max-h-[500px] animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-prime-surface p-3 border-b border-prime-border flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={18} className="text-prime-secondary" />
              <span className="font-mono font-bold text-sm">v7-bot (Gemini)</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-prime-muted hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a] h-80">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm font-mono ${
                    msg.sender === ChatSender.USER 
                      ? 'bg-prime-primary text-white rounded-br-none' 
                      : msg.sender === ChatSender.SYSTEM
                        ? 'bg-red-900/50 text-red-200 border border-red-800'
                        : 'bg-prime-surface text-prime-text border border-prime-border rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-prime-surface border-t border-prime-border flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about my stack..."
              className="flex-1 bg-prime-bg border border-prime-border text-sm px-3 py-2 text-white focus:outline-none focus:border-prime-secondary font-mono placeholder:text-gray-600"
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading}
              className="p-2 bg-prime-border hover:bg-prime-secondary hover:text-black text-white transition-colors disabled:opacity-50"
            >
              {isLoading ? <Loader className="animate-spin" size={18} /> : <Send size={18} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};