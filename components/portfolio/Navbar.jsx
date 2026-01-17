import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-lg shadow-xl border-b border-slate-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">GD</span>
              </div>
              <span className="hidden sm:block text-white font-semibold text-lg">
                Durgaprasad
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-amber-400 bg-amber-400/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="https://github.com/durgaprasad2425" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold hover:from-amber-500 hover:to-orange-600"
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-slate-900/98 backdrop-blur-lg pt-20">
              <div className="flex flex-col items-center gap-2 p-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full py-4 text-lg font-medium rounded-xl transition-all ${
                      activeSection === item.id
                        ? 'text-amber-400 bg-amber-400/10'
                        : 'text-slate-300'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="flex gap-4 mt-6">
                  <a 
                    href="https://github.com/durgaprasad2425" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-xl text-white"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="mailto:durgaprasad7330640851@gmail.com"
                    className="p-3 bg-slate-800 rounded-xl text-white"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a 
                    href="tel:+917330640851"
                    className="p-3 bg-slate-800 rounded-xl text-white"
                  >
                    <Phone className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}