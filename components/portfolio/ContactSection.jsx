import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Github, Linkedin, 
  MessageSquare, Clock, CheckCircle, Loader2
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'durgaprasad7330640851@gmail.com',
      href: 'mailto:durgaprasad7330640851@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7330640851',
      href: 'tel:+917330640851',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '+91 7330640851',
      href: 'https://wa.me/917330640851',
      color: 'from-green-600 to-teal-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Anakapalli, Andhra Pradesh, India',
      href: null,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'durgaprasad2425',
      href: 'https://github.com/durgaprasad2425',
      color: 'from-gray-500 to-gray-700'
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_igle4w4",
      "template_e0lgd4f",
      {
        user_name: formData.name,   // 👈 match template
        user_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "jbjTcC9691PlRv1tw"
    );

    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

  } catch (error) {
    alert("Failed to send message. Try again.");
    console.error(error);
  }

  setIsSubmitting(false);
};


  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-medium text-sm tracking-wider uppercase">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Looking for an AI expert? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="bg-slate-800/30 border-slate-700 p-5 hover:border-amber-400/30 hover:bg-slate-800/50 transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">{item.label}</p>
                          <p className="text-white font-medium group-hover:text-amber-400 transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ) : (
                  <Card className="bg-slate-800/30 border-slate-700 p-5">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}

            {/* Availability */}
            <Card className="bg-gradient-to-br from-amber-400/10 to-orange-500/10 border-amber-400/20 p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-amber-400/20">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Currently Available</h4>
                  <p className="text-slate-400 text-sm">
                    Open to full-time opportunities, freelance projects, and exciting collaborations 
                    in AI/ML space.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="text-slate-300 mb-2 block">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-300 mb-2 block">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-slate-300 mb-2 block">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-400"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-300 mb-2 block">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-green-500 hover:bg-green-500' 
                      : 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600'
                  } text-slate-900`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}