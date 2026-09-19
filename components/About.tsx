'use client'

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="about"
      className="section-container mx-auto py-24 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.h2 
        className="font-heading text-3xl md:text-4xl text-paper mb-8"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="font-mono text-electric">01 / </span>
        About me
      </motion.h2>

      <motion.div 
        className="bg-ink-dark rounded-xl border border-slate/20 overflow-hidden shadow-lg mb-8"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-ink border-b border-slate/20 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex-1 text-center font-mono text-xs text-slate">
            about.md
          </div>
        </div>
        
        <div className="p-6 font-mono text-sm leading-relaxed break-words whitespace-pre-wrap md:p-8 md:text-base">
          <span className="text-slate/60">/**</span><br />
          <span className="text-slate/60"> *</span><span className="text-paper/80"> About Susan</span><br />
          <span className="text-slate/60"> * </span><br />
          <span className="text-slate/60"> *</span><span className="text-paper/80"> A fresher with hands-on practice in full stack web development</span><br />
          <span className="text-slate/60"> *</span><span className="text-paper/80"> (HTML, CSS, JavaScript, backend basics) and data analysis</span><br />
          <span className="text-slate/60"> *</span><span className="text-paper/80"> (Python, Pandas, NumPy), gained through self-driven projects</span><br />
          <span className="text-slate/60"> *</span><span className="text-paper/80"> and coursework. Quick learner with a strong programming</span><br />
          <span className="text-slate/60"> *</span><span className="text-paper/80"> foundation (Python, C/C++, JavaScript) and a keen interest</span><br />
          <span className="text-slate/60"> *</span><span className="text-paper/80"> in building complete web applications and working with data.</span><br />
          <span className="text-slate/60"> *</span><span className="text-paper/80"> Looking for an entry-level opportunity / internship.</span><br />
          <span className="text-slate/60"> */</span>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col gap-4 text-paper/90"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
          <span className="tag-pill inline-block px-3 py-1 bg-slate/10 text-electric rounded-full text-sm font-mono border border-electric/20">
            Nepali — Native
          </span>
          <span className="tag-pill inline-block px-3 py-1 bg-slate/10 text-electric rounded-full text-sm font-mono border border-electric/20">
            English — Professional Working Proficiency
          </span>
        </motion.div>
        
        <motion.div className="flex items-center gap-2 mt-4" variants={itemVariants}>
          <span role="img" aria-label="location" className="text-xl">📍</span>
          <span>Kathmandu, Nepal</span>
        </motion.div>
        
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <svg className="w-5 h-5 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Kathmandu College of Technology, Tribhuvan University</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
