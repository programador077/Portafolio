import React from 'react';

export const AboutTerminal: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-prime-secondary">01.</span> ABOUT ME
        </h2>
        <div className="h-[1px] bg-prime-border flex-grow"></div>
      </div>

      <div className="w-full bg-prime-surface border border-prime-border rounded-sm shadow-2xl overflow-hidden font-mono text-sm md:text-base">
        {/* Terminal Header */}
        <div className="bg-[#111] px-4 py-2 border-b border-prime-border flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-prime-muted text-xs">esio@v7-exe:~</div>
          <div className="w-10"></div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 md:p-8 space-y-4">
          <div className="text-prime-muted">
            <span className="text-prime-secondary">➜</span> <span className="text-prime-accent">~</span> neofetch
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mt-4">
            <div className="hidden md:block text-prime-primary font-bold whitespace-pre leading-tight select-none">
{`
       .---.
      /     \\
      | O_O |
      \\  ^  /
     / '---' \\
    / /     \\ \\
   /_/       \\_\\
`}
            </div>
            
            <div className="space-y-1">
              <p><span className="text-prime-secondary font-bold">esio@v7-exe</span></p>
              <p>------------------</p>
              <p><span className="text-prime-accent font-bold">OS</span>: AI/WebOS Arch64</p>
              <p><span className="text-prime-accent font-bold">Host</span>: Los Angeles, California</p>
              <p><span className="text-prime-accent font-bold">Kernel</span>: Full Stack Developer</p>
              <p><span className="text-prime-accent font-bold">Uptime</span>: 24/7 (Coffee powered)</p>
              <p><span className="text-prime-accent font-bold">Shell</span>: Zsh 5.9</p>
              <p><span className="text-prime-accent font-bold">Resolution</span>: 4K Vision</p>
              <p><span className="text-prime-accent font-bold">Packages</span>: 10 (Udemy/Coderhouse)</p>
              <p><span className="text-prime-accent font-bold">Memory</span>: Infinite Learning Capacity</p>
              <br />
              <div className="flex gap-2 mt-4">
                <div className="w-4 h-4 bg-black"></div>
                <div className="w-4 h-4 bg-red-500"></div>
                <div className="w-4 h-4 bg-green-500"></div>
                <div className="w-4 h-4 bg-yellow-500"></div>
                <div className="w-4 h-4 bg-blue-500"></div>
                <div className="w-4 h-4 bg-magenta-500"></div>
                <div className="w-4 h-4 bg-cyan-500"></div>
                <div className="w-4 h-4 bg-white"></div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-prime-text">
            <span className="text-prime-secondary">➜</span> <span className="text-prime-accent">~</span> cat bio.txt
            <p className="mt-2 text-prime-muted leading-relaxed">
              I am a Full Stack Developer and AI Specialist based in LA. I bridge the gap between complex LLM technologies and practical business applications. 
              Whether it's automating workflows with n8n, scraping data for insights, or building e-commerce empires on Shopify, I code with precision and speed.
            </p>
            <p className="mt-2 text-prime-muted">
              Also, I can give you a fresh fade while explaining how Transformers work. 💈🤖
            </p>
          </div>
           <div className="mt-2">
            <span className="text-prime-secondary">➜</span> <span className="text-prime-accent">~</span> <span className="animate-cursor-blink inline-block w-2 h-5 bg-prime-secondary align-middle ml-1"></span>
          </div>
        </div>
      </div>
    </section>
  );
};