'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, Users, Brain, Code } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function SkillRadar() {
  const skills: Skill[] = [
    { name: 'Programming', level: 85, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Communication', level: 70, icon: Users, color: 'from-green-500 to-emerald-500' },
    { name: 'Leadership', level: 60, icon: Target, color: 'from-purple-500 to-pink-500' },
    { name: 'Problem Solving', level: 90, icon: Brain, color: 'from-orange-500 to-red-500' },
    { name: 'Analytics', level: 75, icon: TrendingUp, color: 'from-yellow-500 to-orange-500' },
    { name: 'Innovation', level: 80, icon: Zap, color: 'from-indigo-500 to-purple-500' }
  ];

  const maxLevel = 100;
  const centerX = 200;
  const centerY = 200;
  const maxRadius = 150;

  const getSkillPosition = (skill: Skill, index: number) => {
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
    const radius = (skill.level / maxLevel) * maxRadius;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y, angle };
  };

  const getLabelPosition = (skill: Skill, index: number) => {
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
    const radius = maxRadius + 30;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y, angle };
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-white mb-8 text-center"
      >
        Your Skill Gap Analysis
      </motion.h3>

      <div className="relative w-full max-w-md h-96 flex items-center justify-center">
        {/* Radar Chart SVG */}
        <svg width="400" height="400" className="absolute">
          {/* Background circles */}
          {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, index) => (
            <circle
              key={index}
              cx={centerX}
              cy={centerY}
              r={maxRadius * scale}
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          ))}

          {/* Grid lines */}
          {skills.map((_, index) => {
            const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
            const x1 = centerX + maxRadius * Math.cos(angle);
            const y1 = centerY + maxRadius * Math.sin(angle);
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={x1}
                y2={y1}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
              />
            );
          })}

          {/* Skill points and connections */}
          {skills.map((skill, index) => {
            const { x, y } = getSkillPosition(skill, index);
            const nextIndex = (index + 1) % skills.length;
            const nextSkill = skills[nextIndex];
            const nextPos = getSkillPosition(nextSkill, nextIndex);

            return (
              <g key={skill.name}>
                {/* Connection line */}
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  x1={x}
                  y1={y}
                  x2={nextPos.x}
                  y2={nextPos.y}
                  stroke="url(#skillGradient)"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Skill point */}
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  cx={x}
                  cy={y}
                  r="8"
                  fill={`url(#${skill.color.replace(/\s/g, '')})`}
                  className="drop-shadow-lg"
                />
                {/* Skill icon */}
                <motion.g
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                >
                  <foreignObject x={x - 6} y={y - 6} width="12" height="12">
                    <div className="w-3 h-3 text-white">
                      <skill.icon className="w-full h-full" />
                    </div>
                  </foreignObject>
                </motion.g>
              </g>
            );
          })}

          {/* Skill labels */}
          {skills.map((skill, index) => {
            const { x, y } = getLabelPosition(skill, index);
            return (
              <motion.text
                key={`label-${skill.name}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-white text-sm font-semibold fill-current"
              >
                {skill.name}
              </motion.text>
            );
          })}

          {/* Gradients */}
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            {skills.map((skill) => (
              <linearGradient
                key={skill.color.replace(/\s/g, '')}
                id={skill.color.replace(/\s/g, '')}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={skill.color.split(' ')[0]} />
                <stop offset="100%" stopColor={skill.color.split(' ')[2]} />
              </linearGradient>
            ))}
          </defs>
        </svg>

        {/* Center info */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <p className="text-white/80 text-sm">Overall Score</p>
            <p className="text-2xl font-bold text-white">76%</p>
          </div>
        </motion.div>
      </div>

      {/* Skill Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 w-full max-w-2xl"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className={`w-8 h-8 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                <skill.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-sm">{skill.name}</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 1.6 + index * 0.1 }}
                className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
              />
            </div>
            <p className="text-white/80 text-xs mt-1">{skill.level}%</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="mt-8 text-center"
      >
        <p className="text-white/80 text-sm mb-2">Focus areas for improvement:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {['Leadership', 'Communication'].map((skill) => (
            <span
              key={skill}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
