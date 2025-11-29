import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects: Project[] = [
  {
    title: "AlienExpress",
    description: "A high-conversion e-commerce platform on Shopify specialized in dropshipping. Implemented custom liquid themes and automated order fulfillment pipelines.",
    tech: ["Shopify", "Liquid", "JavaScript", "Automation"],
    type: "E-Commerce",
    link: "#"
  },
  {
    title: "Enterprise AI Workflows",
    description: "Complex business process automation using n8n and LLMs. Auto-replies, lead scoring, and content generation pipelines integrated with Slack and Email.",
    tech: ["n8n", "OpenAI API", "Webhooks", "JSON"],
    type: "Automation",
    link: "#"
  },
  {
    title: "Local LLM Assistant",
    description: "A secure, offline AI chat interface running Qwen 2.5 and Deepseek via Ollama. Built for sensitive data processing with zero latency.",
    tech: ["Python", "Ollama", "Streamlit", "LangChain"],
    type: "AI",
    link: "https://github.com/v7-exe"
  },
  {
    title: "ScrapeMaster Bot",
    description: "Advanced web scraping bots using Scrapy and Selenium to gather market intelligence and competitor pricing data.",
    tech: ["Python", "Selenium", "Scrapy", "Pandas"],
    type: "Full Stack",
    link: "https://github.com/v7-exe"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-prime-secondary">03.</span> DEPLOYMENTS
        </h2>
        <div className="h-[1px] bg-prime-border flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="relative group bg-prime-surface p-8 border border-prime-border hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-0 right-0 p-8 flex gap-4 text-prime-text">
              <a href={project.link} className="hover:text-prime-secondary"><Github size={20} /></a>
              <a href={project.link} className="hover:text-prime-primary"><ExternalLink size={20} /></a>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
                <Folder className="text-prime-secondary" size={32} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-prime-secondary transition-colors">
              {project.title}
            </h3>
            
            <div className="bg-prime-bg p-4 mb-6 border-l-2 border-prime-border font-mono text-sm text-prime-muted">
              {project.description}
            </div>

            <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-prime-muted">
              {project.tech.map(t => (
                <li key={t}>#{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};