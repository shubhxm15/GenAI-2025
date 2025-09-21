'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Briefcase, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Star,
  MapPin,
  DollarSign,
  Clock,
  CheckCircle
} from 'lucide-react';

interface Career {
  id: string;
  title: string;
  description: string;
  match: number;
  salary: string;
  growth: string;
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  demand: 'High' | 'Medium' | 'Low';
  experience: string;
}

export default function CareerRecommendations() {
  const careers: Career[] = [
    {
      id: '1',
      title: 'Software Engineer',
      description: 'Design, develop, and maintain software applications. High demand with excellent growth potential.',
      match: 92,
      salary: '$70k - $150k',
      growth: '+22%',
      skills: ['Programming', 'Problem Solving', 'Analytics'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      demand: 'High',
      experience: '0-2 years'
    },
    {
      id: '2',
      title: 'Product Manager',
      description: 'Lead product strategy and development. Combines technical knowledge with leadership skills.',
      match: 88,
      salary: '$80k - $200k',
      growth: '+18%',
      skills: ['Leadership', 'Communication', 'Analytics'],
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500',
      demand: 'High',
      experience: '2-5 years'
    },
    {
      id: '3',
      title: 'Data Scientist',
      description: 'Analyze complex data to help organizations make informed decisions. Growing field with excellent opportunities.',
      match: 85,
      salary: '$75k - $160k',
      growth: '+35%',
      skills: ['Analytics', 'Problem Solving', 'Programming'],
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      demand: 'High',
      experience: '1-3 years'
    },
    {
      id: '4',
      title: 'Tech Consultant',
      description: 'Help businesses implement technology solutions. Leverage your problem-solving skills in various industries.',
      match: 78,
      salary: '$65k - $140k',
      growth: '+15%',
      skills: ['Communication', 'Problem Solving', 'Innovation'],
      icon: Users,
      color: 'from-orange-500 to-red-500',
      demand: 'Medium',
      experience: '2-4 years'
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      description: 'Bridge development and operations. Focus on automation and infrastructure management.',
      match: 82,
      salary: '$80k - $170k',
      growth: '+25%',
      skills: ['Programming', 'Analytics', 'Innovation'],
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      demand: 'High',
      experience: '1-3 years'
    },
    {
      id: '6',
      title: 'UX/UI Designer',
      description: 'Create user-friendly digital experiences. Combine creativity with technical understanding.',
      match: 75,
      salary: '$60k - $130k',
      growth: '+20%',
      skills: ['Innovation', 'Communication', 'Analytics'],
      icon: Star,
      color: 'from-pink-500 to-rose-500',
      demand: 'Medium',
      experience: '0-2 years'
    }
  ];

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'High': return 'text-green-400 bg-green-500/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'Low': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="h-full p-6">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-white mb-8 text-center"
      >
        Recommended Career Paths
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careers.map((career, index) => (
          <motion.div
            key={career.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 bg-gradient-to-r ${career.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <career.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {career.title}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDemandColor(career.demand)}`}>
                      {career.demand} Demand
                    </span>
                    <span className="text-white/60 text-sm">{career.experience}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{career.match}%</div>
                <div className="text-xs text-white/60">Match</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/80 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
              {career.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-green-400" />
                <div>
                  <p className="text-white/60 text-xs">Salary</p>
                  <p className="text-white font-semibold text-sm">{career.salary}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <div>
                  <p className="text-white/60 text-xs">Growth</p>
                  <p className="text-white font-semibold text-sm">{career.growth}</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <p className="text-white/60 text-xs mb-2">Key Skills Required:</p>
              <div className="flex flex-wrap gap-1">
                {career.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Match Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/60 text-xs">Match Score</span>
                <span className="text-white text-xs font-semibold">{career.match}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${career.match}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className={`h-2 bg-gradient-to-r ${career.color} rounded-full`}
                />
              </div>
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full bg-gradient-to-r ${career.color} text-white py-3 px-4 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 group-hover:shadow-xl`}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
      >
        <h4 className="text-xl font-bold text-white mb-4 text-center">Career Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-white font-semibold mb-1">High Match Careers</h5>
            <p className="text-white/80 text-sm">4 careers match 80%+ of your skills</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-white font-semibold mb-1">Growing Fields</h5>
            <p className="text-white/80 text-sm">Tech roles growing 15-35% annually</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-white font-semibold mb-1">Top Recommendation</h5>
            <p className="text-white/80 text-sm">Software Engineer (92% match)</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
