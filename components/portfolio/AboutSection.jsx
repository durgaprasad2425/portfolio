import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Briefcase, GraduationCap, Rocket } from 'lucide-react';
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  const stats = [
    { label: 'Years Experience', value: '2+', icon: Calendar },
    { label: 'Projects Delivered', value: '6+', icon: Briefcase },
    { label: 'Certifications', value: '3', icon: Award },
  ];

  const highlights = [
    {
      icon: Rocket,
      title: 'AI Innovation',
      description: 'Pioneering intelligent systems using cutting-edge Agentic AI and LLM technologies'
    },
    {
      icon: Briefcase,
      title: 'Industry Impact',
      description: 'Delivered AI solutions in healthcare, recruitment, and enterprise automation'
    },
    {
      icon: GraduationCap,
      title: 'Strong Foundation',
      description: 'B.Tech in Computer Science from RGUKT with 8.4 CGPA'
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-medium text-sm tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Turning Vision into{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Intelligent Reality
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Bio Card */}
            <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>Anakapalli, Andhra Pradesh, India</span>
              </div>
              
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm <span className="text-white font-semibold">Gollu Durgaprasad</span>, an AI Engineer passionate about 
                  building systems that think, learn, and adapt. With <span className="text-amber-400 font-medium">2+ years 
                  of hands-on experience</span>, I specialize in creating intelligent solutions that bridge the gap 
                  between human needs and machine capabilities.
                </p>
                <p>
                  My expertise spans <span className="text-amber-400">Agentic AI</span>, Large Language Models, and 
                  scalable backend architectures. I've built production-grade chatbots, automated interview systems, 
                  and intelligent matching engines that serve real businesses today.
                </p>
                <p>
                  Currently, I’m working as an AI Engineer at <span className="text-white font-semibold">Eminence Technology</span>, where I focus on developing context-aware AI applications and crafting autonomous agents that don’t just respond, but truly understand user intent.
                </p>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700"
                >
                  <stat.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <Card className="bg-slate-800/30 border-slate-700 p-6 hover:bg-slate-800/50 hover:border-amber-400/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 group-hover:from-amber-400/30 group-hover:to-orange-500/30 transition-all">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="border-l-4 border-amber-400 pl-6 py-4 mt-8"
            >
              <p className="text-slate-300 italic text-lg">
                "I believe AI should amplify human potential, not replace it. Every system I build 
                is designed to make people more capable, more efficient, and more creative."
              </p>
              <footer className="mt-3 text-amber-400 font-medium">— My Philosophy</footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}