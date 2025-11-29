import React from 'react';
import { Skill } from '../types';
import { Code, Server, Bot, Box, Terminal, Database, Cpu, Globe } from 'lucide-react';

const skillData: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML/CSS"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Astro", "Angular", "SvelteKit", "Tailwind CSS"]
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "REST APIs", "Web Scraping", "Selenium", "Scrapy"]
  },
  {
    category: "AI & LLMs",
    items: ["ChatGPT API", "Ollama (Local)", "Qwen 2.5", "Deepseek", "Mistral", "Agentes IA"]
  },
  {
    category: "Automation & Tools",
    items: ["n8n Workflows", "Git/GitHub", "Docker", "Shopify", "Dropshipping"]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-prime-secondary">02.</span> TECHNICAL ARSENAL
        </h2>
        <div className="h-[1px] bg-prime-border flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillData.map((skill, index) => (
          <div key={index} className="group border border-prime-border bg-prime-surface/50 p-6 hover:border-prime-secondary transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              {index === 0 && <Code className="text-prime-accent" />}
              {index === 1 && <Globe className="text-prime-accent" />}
              {index === 2 && <Server className="text-prime-accent" />}
              {index === 3 && <Cpu className="text-prime-accent" />}
              {index === 4 && <Box className="text-prime-accent" />}
              
              <h3 className="font-mono font-bold text-xl text-white group-hover:text-prime-secondary transition-colors">
                {skill.category}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span 
                  key={item} 
                  className="font-mono text-xs px-2 py-1 bg-prime-bg border border-prime-border text-prime-muted rounded-sm hover:text-white hover:border-prime-primary cursor-default transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {/* Decorative Card */}
        <div className="border border-prime-border border-dashed p-6 flex flex-col justify-center items-center text-center opacity-50">
           <Terminal size={48} className="text-prime-muted mb-4" />
           <p className="font-mono text-xs text-prime-muted">ALWAYS LEARNING</p>
           <p className="font-mono text-xs text-prime-muted">INSTALLING UPDATES...</p>
        </div>
      </div>
    </section>
  );
};