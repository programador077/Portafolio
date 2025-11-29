import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTerminal } from './components/AboutTerminal';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { GeminiChat } from './components/GeminiChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-prime-bg font-sans selection:bg-prime-secondary selection:text-prime-bg relative overflow-x-hidden">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-8 max-w-6xl space-y-32 pb-32 pt-20">
        <Hero />
        <AboutTerminal />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Floating AI Assistant to show off skills */}
      <GeminiChat />

      <footer className="py-8 text-center border-t border-prime-border mt-20">
        <p className="font-mono text-prime-muted text-sm">
          © {new Date().getFullYear()} v7.exe | Built with React, Tailwind & Gemini 2.5 Flash
        </p>
        <p className="text-xs text-prime-muted mt-2 font-mono">
          "I use Arch btw" (just kidding, I use MacOS/Linux)
        </p>
      </footer>
    </div>
  );
};

export default App;