import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Database, Cloud, Bot, Wrench, Zap,
  ChevronRight
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('ai');

  const skillLogos = {
    'LangChain': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'LangGraph': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'LangSmith': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'OpenAI GPT': 'https://www.svgrepo.com/show/306500/openai.svg',
    'Anthropic Claude': 'https://www.svgrepo.com/show/508823/bot.svg',
    'RAG Systems': 'https://www.svgrepo.com/show/374016/search.svg',
    'Prompt Engineering': 'https://www.svgrepo.com/show/507433/command.svg',
    'Crew AI': 'https://www.svgrepo.com/show/508823/bot.svg',
    'AutoGen': 'https://www.svgrepo.com/show/373595/exe.svg',
    'FastAgents': 'https://www.svgrepo.com/show/508823/bot.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'Scikit-learn': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Pinecone': 'https://www.svgrepo.com/show/374016/search.svg',
    'ChromaDB': 'https://www.svgrepo.com/show/374016/search.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'Vector DB Architecture': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'API Deployment': 'https://www.svgrepo.com/show/374016/search.svg',
    'Azure AI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'Celery': 'https://www.svgrepo.com/show/373595/exe.svg',
    'APScheduler': 'https://www.svgrepo.com/show/374016/search.svg',
    'Twilio API': 'https://www.svgrepo.com/show/354468/twilio-icon.svg',
    'Meta APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
    'Postman': 'https://www.svgrepo.com/show/354202/postman-icon.svg',
    'Swagger': 'https://www.svgrepo.com/show/374111/swagger.svg',
    'MCP Protocol': 'https://www.svgrepo.com/show/374016/search.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Gemini': 'https://www.svgrepo.com/show/374016/search.svg',
    'Groq': 'https://www.svgrepo.com/show/507433/command.svg',
    'Google APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    'LinkedIn APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  };

  const skillCategories = {
    ai: {
      icon: Bot,
      title: 'AI & Machine Learning',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'LangChain', level: 95 },
        { name: 'LangGraph', level: 90 },
        { name: 'LangSmith', level: 85 },
        { name: 'OpenAI GPT', level: 95 },
        { name: 'Anthropic Claude', level: 90 },
        { name: 'RAG Systems', level: 92 },
        { name: 'Prompt Engineering', level: 95 },
        { name: 'Crew AI', level: 85 },
        { name: 'AutoGen', level: 80 },
        { name: 'FastAgents', level: 85 },
        { name: 'Gemini', level: 90 },
        { name: 'Groq', level: 85 },
      ]
    },
    programming: {
      icon: Code2,
      title: 'Programming & Frameworks',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'FastAPI', level: 92 },
        { name: 'Flask', level: 85 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 88 },
        { name: 'PyTorch', level: 80 },
        { name: 'TensorFlow', level: 78 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 85 },
      ]
    },
    databases: {
      icon: Database,
      title: 'Databases & Vector Stores',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'Pinecone', level: 92 },
        { name: 'ChromaDB', level: 88 },
        { name: 'Redis', level: 82 },
        { name: 'Vector DB Architecture', level: 90 },
        { name: 'PostgreSQL', level: 85 },
      ]
    },
    devops: {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'GitHub Actions', level: 82 },
        { name: 'API Deployment', level: 88 },
        { name: 'Azure AI', level: 80 },
      ]
    },
    tools: {
      icon: Wrench,
      title: 'Tools & Integrations',
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'Celery', level: 85 },
        { name: 'APScheduler', level: 80 },
        { name: 'Twilio API', level: 85 },
        { name: 'Meta APIs', level: 82 },
        { name: 'Postman', level: 90 },
        { name: 'Swagger', level: 88 },
        { name: 'MCP Protocol', level: 85 },
        { name: 'Google APIs', level: 80 },
        { name: 'LinkedIn APIs', level: 80 },
      ]
    },
  };

  const certifications = [
    { name: 'Microsoft Azure AI Fundamentals', score: '731 Grade', badge: '🏆' },
    { name: 'GATE 2023 Qualified', score: 'Computer Science', badge: '🎯' },
    { name: 'Global Hackathon Challenge', score: 'Participant', badge: '💡' },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-medium text-sm tracking-wider uppercase">My Arsenal</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems—from neural networks to production-ready APIs
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-slate-900/50 border-slate-800 p-8">
              <div className="flex items-center gap-3 mb-8">
                {React.createElement(skillCategories[activeCategory].icon, { 
                  className: "w-8 h-8 text-amber-400" 
                })}
                <h3 className="text-2xl font-bold text-white">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <img 
                          src={skillLogos[skill.name]} 
                          alt={skill.name}
                          className="w-5 h-5 object-contain"
                          onError={(e) => e.target.style.display = 'none'}
                        />
                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-amber-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:border-amber-400/30 transition-all duration-300">
                  <span className="text-4xl mb-4 block">{cert.badge}</span>
                  <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                  <Badge variant="outline" className="border-amber-400/30 text-amber-400">
                    {cert.score}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Skills Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h4 className="text-slate-400 mb-6">Technologies I work with daily</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'LangChain', 'FastAPI', 'Next.js', 'TypeScript', 'OpenAI', 'MongoDB', 'Pinecone', 'Docker', 'RAG', 'Agentic AI'].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-4 py-2 text-sm border-slate-700 text-slate-300 hover:border-amber-400/50 hover:text-amber-400 transition-all cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}