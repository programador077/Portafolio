import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '~/about', href: '#about' },
    { name: '~/skills', href: '#skills' },
    { name: '~/projects', href: '#projects' },
    { name: '~/contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-prime-bg/90 backdrop-blur-md border-b border-prime-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-6xl">
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="text-prime-secondary w-6 h-6 group-hover:animate-pulse" />
          <span className="font-mono font-bold text-xl tracking-tighter text-white">
            V7<span className="text-prime-primary">.EXE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-mono text-sm text-prime-muted hover:text-prime-secondary hover:underline decoration-prime-primary underline-offset-4 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-prime-text hover:text-prime-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-prime-surface border-b border-prime-border p-4 flex flex-col gap-4">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-mono text-sm text-prime-text hover:text-prime-secondary block"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};