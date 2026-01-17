import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Calendar, MapPin, Award, ArrowUpRight } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      type: 'work',
      title: 'AI Developer',
      company: 'Hallmark Global Technologies Ltd',
      location: 'India, Visakhapatnam',
      period: 'September 2023 - September 2025',
      current: false,
      description: 'Building intelligent AI systems and autonomous agents for enterprise solutions.',
      achievements: [
        'Developed multi-modal AI chatbot handling PDFs, Word docs, images, and web content',
        'Created AI-led interview bot with adaptive multi-stage questioning',
        'Built AI-powered email systems with LLM-driven contextual responses',
        'Designed generic AI Matcher engine for resume-JD matching and beyond',
        'Implemented image generation and analysis pipeline with Vision AI'
      ],
      technologies: ['LangChain', 'OpenAI', 'FastAPI', 'MongoDB', 'Pinecone', 'Docker']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      institution: 'Rajiv Gandhi University of Knowledge Technologies, Nuzvid',
      period: '2020 - 2024',
      grade: '8.4 CGPA',
      highlights: [
        'Core focus on AI/ML and Software Engineering',
        'GATE 2023 Qualified',
        'Participated in Global Hackathon Challenge'
      ]
    },
    {
      degree: 'Pre-University Course',
      field: 'Science',
      institution: 'Rajiv Gandhi University of Knowledge Technologies, Nuzvid',
      period: '2018 - 2020',
      grade: '8.45 CGPA',
      highlights: [
        'Strong foundation in Mathematics and Science',
        'Merit-based admission'
      ]
    },
    {
      degree: 'CBSE (Class X)',
      field: 'Secondary Education',
      institution: 'APSWREIS (Gurukulams), Golugonda',
      period: 'July 2013 - March 2016',
      grade: '9.7 CGPA',
      highlights: [
        'Completed Class 10 under Andhra Pradesh State Board',
        'Studied at AP Social Welfare Residential Educational Institution'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-medium text-sm tracking-wider uppercase">Career Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Experience &{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-amber-400/10">
                <Building2 className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 to-amber-400/20" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-16 pb-12 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-0 w-5 h-5 rounded-full bg-slate-950 border-4 border-amber-400">
                    {exp.current && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    )}
                  </div>

                  <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-amber-400/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                        <p className="text-amber-400 font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                          Current
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-slate-300 mb-4">{exp.description}</p>

                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <ArrowUpRight className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-400">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="text-xs border-slate-600 text-slate-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-blue-400/10">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-400/20" />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-0 w-5 h-5 rounded-full bg-slate-950 border-4 border-blue-400" />

                  <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-blue-400/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                        <p className="text-blue-400">{edu.field}</p>
                      </div>
                      <Badge variant="outline" className="border-amber-400/30 text-amber-400">
                        <Award className="w-3 h-3 mr-1" />
                        {edu.grade}
                      </Badge>
                    </div>

                    <p className="text-slate-400 text-sm mb-2">{edu.institution}</p>
                    
                    <div className="flex items-center gap-1 text-sm text-slate-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>

                    <div className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                          <span className="text-slate-400">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}