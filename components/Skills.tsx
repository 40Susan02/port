'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🌐',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    path: '@frontend'
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js & Express basics', 'REST API concepts', 'MongoDB/MySQL basics'],
    path: '@backend'
  },
  {
    category: 'Data & Analysis',
    icon: '📊',
    skills: ['Python', 'Pandas', 'NumPy'],
    path: '@data'
  },
  {
    category: 'Tools & Languages',
    icon: '🛠️',
    skills: ['Git & GitHub', 'VS Code', 'C/C++'],
    path: '@tools'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.h2 
        className="text-3xl md:text-4xl font-mono font-bold mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-electric">##</span> Skills
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillGroups.map((group, groupIndex) => (
          <motion.div 
            key={groupIndex}
            className="bg-black/40 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm"
            variants={itemVariants}
          >
            {/* Panel Header */}
            <div className="bg-black/60 px-4 py-3 border-b border-white/10 flex items-center gap-2">
              <span aria-hidden="true">{group.icon}</span>
              <h3 className="font-mono text-sm text-gray-300">{group.category}.ts</h3>
            </div>
            
            {/* Panel Body */}
            <div className="p-4 md:p-6 font-mono text-sm md:text-base overflow-x-auto">
              <motion.div 
                className="flex flex-col gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    variants={skillVariants}
                    className="group flex whitespace-nowrap p-1 -mx-1 rounded transition-colors hover:bg-electric/5"
                  >
                    <span className="text-signal">import</span>
                    <span className="text-white mx-2">{'{'}</span>
                    <span className="text-terminal">{skill.replace(/\s+/g, '_')}</span>
                    <span className="text-white mx-2">{'}'}</span>
                    <span className="text-signal">from</span>
                    <span className="text-electric ml-2">'{group.path}'</span>
                    <span className="text-gray-500">;</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
