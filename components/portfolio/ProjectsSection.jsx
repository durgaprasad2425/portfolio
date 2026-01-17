import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Mail, Users, Image, MessageSquare, FileText,
  ExternalLink, Github, ArrowRight, Sparkles, Layers
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Multi-Modal AI Chatbot',
      category: 'chatbot',
      icon: Bot,
      gradient: 'from-purple-500 to-pink-500',
      description: 'A sophisticated chatbot that understands and responds based on knowledge bases from PDFs, Word docs, images, and web-scraped content.',
      impact: [
        'Processes multiple document formats seamlessly',
        'Semantic search with 95%+ accuracy',
        'Real-time contextual responses'
      ],
      tech: ['LangChain', 'OpenAI', 'Pinecone', 'MongoDB', 'FastAPI'],
      metrics: {
        label: 'Document Types',
        value: '4+',
      },
      featured: true,
    },
    {
      id: 2,
      title: 'AI-Led Interview Bot',
      category: 'chatbot',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'An intelligent interview chatbot conducting structured, multi-stage interviews with adaptive questioning based on candidate responses.',
      impact: [
        'Multi-stage flow: Intro → Technical → Reasoning → Summary',
        'Level-based adaptive questioning',
        'Automated candidate evaluation'
      ],
      tech: ['OpenAI GPT', 'Anthropic Claude', 'FastAPI'],
      metrics: {
        label: 'Interview Stages',
        value: '4',
      },
      featured: true,
    },
    {
      id: 3,
      title: 'AI-Powered Email Generator',
      category: 'automation',
      icon: Mail,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Dynamic email template generator that creates context-aware emails from user inputs like tone, purpose, and content type.',
      impact: [
        'Supports multiple tones and styles',
        'CRM workflow integration ready',
        'Customizable templates'
      ],
      tech: ['OpenAI', 'Gemini', 'FastAPI'],
      metrics: {
        label: 'Template Types',
        value: '10+',
      },
    },
    {
      id: 4,
      title: 'Auto Email Reply System',
      category: 'automation',
      icon: MessageSquare,
      gradient: 'from-orange-500 to-amber-500',
      description: 'Automatically analyzes incoming emails and generates smart, context-aware replies with professional tone.',
      impact: [
        'Intelligent subject/body analysis',
        'Embedding-based context understanding',
        'Professional tone maintenance'
      ],
      tech: ['LangChain', 'NLP', 'MongoDB'],
      metrics: {
        label: 'Response Time',
        value: '<2s',
      },
    },
    {
      id: 5,
      title: 'AI Matcher',
      category: 'matching',
      icon: Layers,
      gradient: 'from-red-500 to-pink-500',
      description: 'A scoring and ranking engine that matches candidate resumes to job descriptions, with generic architecture for multiple use cases.',
      impact: [
        'Resume-to-JD matching',
        'Extensible for Matrimonial, Sales, etc.',
        'Intelligent scoring algorithm'
      ],
      tech: ['LLMs', 'FastAPI', 'MongoDB'],
      metrics: {
        label: 'Use Cases',
        value: '3+',
      },
    },
    {
      id: 6,
      title: 'Image Generation & Analysis',
      category: 'vision',
      icon: Image,
      gradient: 'from-violet-500 to-purple-500',
      description: 'Generates images and logos from text, performs summarization, sentiment analysis, keyword extraction, and captioning.',
      impact: [
        'Text-to-image generation',
        'Vision AI analysis',
        'Multi-task NLP processing'
      ],
      tech: ['OpenAI DALL·E', 'Vision AI', 'NLP'],
      metrics: {
        label: 'AI Tasks',
        value: '5+',
      },
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'chatbot', label: 'Chatbots' },
    { id: 'automation', label: 'Automation' },
    { id: 'matching', label: 'Matching' },
    { id: 'vision', label: 'Vision AI' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-medium text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Projects That{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Make Impact
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Real-world AI solutions I've built—from intelligent chatbots to automated systems
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-amber-400 text-slate-900'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className={`group bg-slate-800/30 border-slate-700 overflow-hidden hover:border-amber-400/30 transition-all duration-500 h-full flex flex-col ${
                  project.featured ? 'ring-1 ring-amber-400/20' : ''
                }`}>
                  {/* Card Header */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Icon & Featured Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      {project.featured && (
                        <Badge className="bg-amber-400/10 text-amber-400 border-amber-400/20">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Impact Points */}
                    <div className="space-y-2 mb-4">
                      {project.impact.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metric */}
                    <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-slate-800/50">
                      <span className="text-2xl font-bold text-amber-400">{project.metrics.value}</span>
                      <span className="text-slate-400 text-sm">{project.metrics.label}</span>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline" 
                          className="text-xs border-slate-600 text-slate-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/durgaprasad2425"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}