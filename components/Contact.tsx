import React from 'react';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24 mb-20">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <p className="font-mono text-prime-secondary mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Get In Touch</h2>
        <p className="text-prime-muted mb-12 text-lg">
          Whether you have a question about AI integration, need a full-stack e-commerce solution, 
          or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:contact@v7.exe" // Placeholder email logic
          className="inline-block px-10 py-5 border border-prime-secondary text-prime-secondary font-mono font-bold text-lg hover:bg-prime-secondary/10 transition-all mb-12"
        >
          Say Hello
        </a>

        <div className="flex gap-8">
          <a href="https://instagram.com/v7.exe" target="_blank" rel="noreferrer" className="text-prime-muted hover:text-prime-primary hover:-translate-y-1 transition-all">
            <Instagram size={24} />
          </a>
          <a href="https://linkedin.com/in/esio-nahuel-vitanoff-0b467623a" target="_blank" rel="noreferrer" className="text-prime-muted hover:text-prime-primary hover:-translate-y-1 transition-all">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-prime-muted hover:text-prime-primary hover:-translate-y-1 transition-all">
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};