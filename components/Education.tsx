'use client';

import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-mono text-2xl text-electric mb-8">
          <span className="opacity-50">## </span>Education
        </h2>

        <div className="bg-ink border border-slate/20 rounded-lg overflow-hidden shadow-xl max-w-3xl mx-auto">
          {/* Panel Header */}
          <div className="bg-ink-dark px-4 py-2 border-b border-slate/20 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="ml-2 font-mono text-xs text-slate opacity-70">education.md</span>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-6">
              <h1 className="font-heading text-3xl md:text-4xl text-paper mb-2"># BSc CSIT</h1>
            </div>

            <div className="font-body space-y-4 text-lg">
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-slate font-bold min-w-[120px]">**Institution:**</span>
                <span className="text-paper">Kathmandu College of Technology</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-slate font-bold min-w-[120px]">**University:**</span>
                <span className="text-paper">Tribhuvan University</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-slate font-bold min-w-[120px]">**Status:**</span>
                <span className="text-paper flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Ongoing
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
