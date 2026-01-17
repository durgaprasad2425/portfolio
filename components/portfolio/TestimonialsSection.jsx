import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Tech Lead',
      company: 'Hallmark Global Technologies',
      avatar: 'RK',
      rating: 5,
      content: "Durgaprasad's expertise in AI and LLMs is exceptional. He delivered a multi-modal chatbot that exceeded our expectations—handling complex document types with remarkable accuracy. A true problem solver who brings innovation to every project.",
    },
    {
      name: 'Priya Sharma',
      role: 'Product Manager',
      company: 'Healthcare Tech Startup',
      avatar: 'PS',
      rating: 5,
      content: "Working with Durgaprasad on our AI interview system was a game-changer. His deep understanding of conversational AI and ability to implement adaptive questioning made our hiring process significantly more efficient.",
    },
    {
      name: 'Anil Reddy',
      role: 'CTO',
      company: 'Recruitment Platform',
      avatar: 'AR',
      rating: 5,
      content: "The AI Matcher solution Durgaprasad built for us transformed how we match candidates to jobs. His generic architecture approach means we can now expand to new use cases without rebuilding from scratch. Brilliant engineering!",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-medium text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            What People{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 p-8 md:p-12 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-amber-400/10">
                  <Quote className="w-24 h-24" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 relative z-10">
                  "{testimonials[current].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-lg">
                      {testimonials[current].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {testimonials[current].name}
                    </div>
                    <div className="text-slate-400">
                      {testimonials[current].role} at {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'bg-amber-400 w-8' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}