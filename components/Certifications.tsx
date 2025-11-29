import React from 'react';
import { Certification } from '../types';
import { Award } from 'lucide-react';

const certifications: Certification[] = [
  { name: "Bootcamp Agentes IA: Crea Chatbots Inteligentes", issuer: "Udemy" },
  { name: "IA Full-Stack con Ollama: Llama, Deepseek, Mistral", issuer: "Udemy" },
  { name: "Full Stack Developer", issuer: "Coderhouse" },
  { name: "Desarrollo de IA con Qwen 2.5 y Ollama", issuer: "Udemy" },
  { name: "Curso n8n. Crea Agentes de IA Sin Programar", issuer: "Udemy" },
  { name: "Maestría en JavaScript 2026", issuer: "Udemy" },
  { name: "Web Scraping moderno con Python", issuer: "Udemy" },
  { name: "The Complete JavaScript Course 2024", issuer: "Udemy" },
  { name: "ChatGPT EMPRESAS 2025: Aprende IA NEGOCIOS", issuer: "Udemy" },
  { name: "Bootcamp de IA Práctica y Certificación en 7 Días", issuer: "Udemy" },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-prime-secondary">04.</span> KNOWLEDGE BASE
        </h2>
        <div className="h-[1px] bg-prime-border flex-grow"></div>
      </div>

      <div className="bg-prime-surface border border-prime-border p-6 md:p-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-start gap-3 text-prime-muted hover:text-white transition-colors">
              <Award className="text-prime-primary shrink-0 mt-1" size={16} />
              <div>
                <span className="block font-bold text-sm md:text-base">{cert.name}</span>
                <span className="font-mono text-xs text-prime-secondary opacity-70">{cert.issuer}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};