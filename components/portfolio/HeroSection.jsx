import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Bot, Brain, Cpu, FileText, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection({ onNavigate }) {
  const floatingIcons = [
    { icon: Bot, delay: 0, x: '10%', y: '20%' },
    { icon: Brain, delay: 0.5, x: '85%', y: '15%' },
    { icon: Cpu, delay: 1, x: '75%', y: '70%' },
    { icon: Sparkles, delay: 1.5, x: '15%', y: '75%' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-amber-400/20"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <item.icon className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-amber-400/50 shadow-xl shadow-amber-500/20">
              <img 
                src="/profile-picture.png"
                alt="Durgaprasad"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-slate-950 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white text-xs font-bold">AI</span>
            </motion.div>
          </div>
        </motion.div>
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-amber-400 text-sm font-medium">Available for opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi, I'm{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Durgaprasad
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-slate-400 font-light mt-6 mb-8"
        >
          <span className="text-white font-medium">AI Engineer</span> crafting intelligent systems with{' '}
          <span className="text-amber-400">Agentic AI</span> & <span className="text-orange-400">LLMs</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          2+ years of experience building production-ready AI solutions. 
          Specializing in LangChain, RAG systems, and conversational AI 
          that transforms how businesses operate.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Button
            size="lg"
            onClick={() => onNavigate('projects')}
            className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold px-8 py-6 text-lg hover:from-amber-500 hover:to-orange-600 shadow-lg shadow-amber-500/25"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate('contact')}
            className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-6 text-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </Button>
        </motion.div>

        {/* CV Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <a
            href="/DurgaPrasad_AI Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="default"
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-slate-800/50"
            >
              <FileText className="w-4 h-4 mr-2" />
              View CV
            </Button>
          </a>
          <a
            href="/DurgaPrasad_AI Engineer.pdf"
            download
          >
            <Button
              size="default"
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-slate-800/50"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/durgaprasad2425"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:durgaprasad7330640851@gmail.com"
            className="p-3 rounded-xl bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 rounded-full border border-slate-700 text-slate-500"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}