'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Radar, 
  Route, 
  Trophy, 
  Microchip, 
  GraduationCap,
  Send,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import ChatBot from '../components/ChatBot';
import SkillRadar from '../components/SkillRadar';
import CareerRecommendations from '../components/CareerRecommendations';

export default function Home() {
  const [activeTab, setActiveTab] = useState('chatbot');

  const features = [
    {
      icon: Bot,
      title: 'AI Career Chatbot',
      description: 'Real-time AI-powered career guidance and personalized advice for your professional journey',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Radar,
      title: 'Skill Gap Analysis',
      description: 'Interactive radar chart visualization to identify and track your skill development areas',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Route,
      title: 'Career Recommendations',
      description: 'Personalized career path suggestions based on your skills, interests, and market demand',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Trophy,
      title: 'Gamification',
      description: 'Earn badges, maintain streaks, and track progress to make learning engaging and motivating',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Microchip,
      title: 'Hardware Prototype',
      description: 'Career Kiosk and Voice Assistant for accessible career guidance in public spaces',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: GraduationCap,
      title: 'Learning Roadmap',
      description: 'Customized learning paths with courses, resources, and milestones tailored to your goals',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const techStack = [
    { name: 'Frontend', tech: 'Next.js, Tailwind, React Native', icon: '⚛️' },
    { name: 'Backend', tech: 'Node.js, Express', icon: '🟢' },
    { name: 'Database', tech: 'PostgreSQL, Firebase', icon: '🗄️' },
    { name: 'AI Layer', tech: 'Google Gemini API', icon: '🤖' },
    { name: 'Hardware', tech: 'Raspberry Pi, ESP32', icon: '🔌' }
  ];

  const flowSteps = [
    'Profile Input',
    'AI Analysis',
    'Career Suggestions',
    'Skill Gap Report',
    'Learning Roadmap',
    'Progress Tracking'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">VisionAI</span>
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              {['Features', 'Demo', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Personalized Career &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Skills Advisor
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            AI-powered guidance for students and professionals to discover their ideal career paths and bridge skill gaps
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-cyan-500/25 animate-pulse-glow"
            >
              Try Demo Now
              <ChevronRight className="inline-block ml-2 w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/80 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Interactive Demo
          </motion.h2>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl shadow-cyan-500/5">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'chatbot', label: 'AI Chatbot', icon: Bot },
                { id: 'skills', label: 'Skill Analysis', icon: Radar },
                { id: 'careers', label: 'Career Paths', icon: Route }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-8 py-4 rounded-full transition-all duration-500 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-semibold">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[500px]">
              {activeTab === 'chatbot' && <ChatBot />}
              {activeTab === 'skills' && <SkillRadar />}
              {activeTab === 'careers' && <CareerRecommendations />}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            How It Works
          </motion.h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {step}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Technology Stack
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
                  {tech.tech}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">VisionAI</span>
          </div>
          <p className="text-white/80 mb-2">© 2024 Team VisionAI - Shubham Sharma. All rights reserved.</p>
          <p className="text-white/60">Personalized Career & Skills Advisor - Hackathon MVP</p>
        </div>
      </footer>
    </div>
  );
}