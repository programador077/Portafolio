export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  type: 'E-Commerce' | 'AI' | 'Full Stack' | 'Automation';
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export enum ChatSender {
  USER = 'user',
  AI = 'ai',
  SYSTEM = 'system'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}