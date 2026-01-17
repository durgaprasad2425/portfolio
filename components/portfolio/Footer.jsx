import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Mail, Phone, ArrowUp, Download, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">GD</span>
              </div>
              <span className="text-white font-semibold text-lg">Durgaprasad</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              AI Engineer specializing in Agentic AI, LLMs, and intelligent systems. 
              Building the future of human-AI collaboration.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/durgaprasad2425"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:durgaprasad7330640851@gmail.com"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+917330640851"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/917330640851"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-slate-400 hover:text-amber-400 text-sm text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Let's Connect</h4>
            <p className="text-slate-400 text-sm mb-4">
              Ready to discuss your next AI project? Let's make it happen.
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold hover:from-amber-500 hover:to-orange-600"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            © {currentYear} Gollu Durgaprasad
            {/* <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            using React & Tailwind */}
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}