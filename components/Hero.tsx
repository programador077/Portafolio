import React from 'react';
import { ArrowDown, Cpu, Globe, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-start pt-16">
      <div className="inline-block px-3 py-1 border border-prime-primary/50 rounded-full bg-prime-primary/10 mb-6">
        <span className="font-mono text-xs text-prime-primary font-bold tracking-widest uppercase">
          System Online • Los Angeles, CA
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6 text-white">
        ESIO NAHUEL <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-prime-secondary to-prime-accent">
          VITANOFF
        </span>
      </h1>

      <div className="font-mono text-lg md:text-xl text-prime-muted max-w-2xl mb-10 border-l-2 border-prime-secondary pl-6">
        <p className="mb-2">
          <span className="text-prime-secondary">const</span> role = <span className="text-prime-accent">'Full Stack AI Engineer'</span>;
        </p>
        <p>
          Specializing in LLMs, Automation (n8n), and E-commerce. 
          Building the future with <span className="text-white font-bold">ChatGPT, Deepseek & Ollama</span>.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-16">
        <a 
          href="#projects" 
          className="px-8 py-4 bg-prime-secondary text-black font-bold font-mono hover:bg-white transition-colors flex items-center gap-2"
        >
          <Cpu size={18} /> VIEW PROJECTS
        </a>
        <a 
          href="#contact" 
          className="px-8 py-4 border border-prime-border text-white font-mono hover:border-prime-secondary hover:text-prime-secondary transition-colors flex items-center gap-2"
        >
          <Zap size={18} /> CONTACT ME
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-prime-border pt-8">
        <div>
          <h3 className="font-mono text-prime-muted text-xs uppercase mb-1">Current Stack</h3>
          <p className="font-bold">Next.js + Astro</p>
        </div>
        <div>
          <h3 className="font-mono text-prime-muted text-xs uppercase mb-1">Focus</h3>
          <p className="font-bold">AI Agents & LLMs</p>
        </div>
        <div>
          <h3 className="font-mono text-prime-muted text-xs uppercase mb-1">Automation</h3>
          <p className="font-bold">n8n Workflows</p>
        </div>
         <div>
          <h3 className="font-mono text-prime-muted text-xs uppercase mb-1">Side Quest</h3>
          <p className="font-bold">Pro Barber</p>
        </div>
      </div>
    </section>
  );
};