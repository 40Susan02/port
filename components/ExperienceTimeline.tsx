'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Experience {
  id: number;
  role: string;
  company: string;
  type: string;
  period: string;
  details: string[];
}

export default function ExperienceTimeline() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchExperience = async () => {
    setLoading(true);
    setError(false);
    
    try {
      const response = await fetch('/api/experience', {
        credentials: 'same-origin',
      });
      
      if (!response.ok) {
        setError(true);
        setLoading(false);
        return;
      }
      
      const data = await response.json();
      setExperiences(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const detailContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const detailItemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  if (loading) {
    return (
      <div className="panel bg-ink/30 border border-slate/20 rounded-xl p-8" aria-busy="true" aria-label="Loading experience data">
        <div className="animate-pulse flex flex-col gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4">
              <div className="w-0.5 bg-slate/20 flex-shrink-0 relative">
                <div className="absolute -left-[5px] top-1 w-3 h-3 bg-slate/20 rounded-full" />
              </div>
              <div className="flex-1 pb-8">
                <div className="h-6 bg-slate/20 rounded w-1/3 mb-2" />
                <div className="h-4 bg-slate/20 rounded w-1/4 mb-4" />
                <div className="flex flex-col gap-2">
                  <div className="h-4 bg-slate/20 rounded w-full" />
                  <div className="h-4 bg-slate/20 rounded w-5/6" />
                  <div className="h-4 bg-slate/20 rounded w-4/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="panel bg-red-900/10 border border-red-500/30 rounded-xl p-8 text-center">
        <div aria-live="assertive">
          <p className="text-red-400 mb-6">Unable to load experience data. Your session may have expired.</p>
        </div>
        <button 
          onClick={fetchExperience}
          className="px-6 py-2 bg-slate/10 hover:bg-slate/20 border border-slate/30 rounded text-paper font-mono transition-colors"
        >
          Refresh Data
        </button>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative pl-2 sm:pl-0"
    >
      {experiences.map((exp, index) => (
        <motion.div key={exp.id} variants={itemVariants} className="relative flex gap-6 sm:gap-8 group">
          {/* Timeline Line & Dot */}
          <div className="relative flex flex-col items-center ml-2 sm:ml-4">
            <div className="w-3 h-3 bg-electric rounded-full relative z-10 mt-1.5 shadow-[0_0_10px_rgba(var(--color-electric),0.5)]" />
            {index !== experiences.length - 1 && (
              <div className="w-0.5 bg-electric/30 h-full absolute top-3" />
            )}
          </div>
          
          {/* Content Panel */}
          <div className="flex-1 pb-12">
            <div className="panel bg-ink/40 border border-slate/20 hover:border-slate/40 transition-colors rounded-xl p-6 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-2">
                <div>
                  <h3 className="font-heading text-lg text-paper">
                    {exp.role} <span className="text-electric">@ {exp.company}</span>
                  </h3>
                </div>
                <div className="font-mono text-sm text-slate">
                  {exp.type} • {exp.period}
                </div>
              </div>
              
              <motion.ul 
                variants={detailContainerVariants}
                className="flex flex-col gap-3"
                aria-label={`Details for ${exp.role} at ${exp.company}`}
              >
                {exp.details.map((detail, idx) => (
                  <motion.li 
                    key={idx} 
                    variants={detailItemVariants}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-terminal font-mono text-xs mt-1 flex-shrink-0" aria-hidden="true">
                      ❯
                    </span>
                    <span className="text-paper/80 leading-relaxed text-sm">
                      {detail}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
