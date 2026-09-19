'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="font-mono text-2xl text-electric mb-10">
          <span className="opacity-50">## </span>Contact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Contact Info */}
          <motion.div variants={itemVariants} className="bg-ink border border-slate/20 rounded-lg overflow-hidden shadow-xl">
            <div className="bg-ink-dark px-4 py-2 border-b border-slate/20 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate/20"></div>
                <div className="w-3 h-3 rounded-full bg-slate/20"></div>
                <div className="w-3 h-3 rounded-full bg-slate/20"></div>
              </div>
              <span className="ml-2 font-mono text-xs text-slate opacity-70">bash</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <div className="text-slate mb-4">
                <span className="text-electric">❯</span> cat contact.json
              </div>
              <pre className="text-paper">
{`{
  "`}<span className="text-electric">email</span>{`": "`}<a href="mailto:susandahal69@gmail.com" className="text-[#a6e22e] hover:underline">susandahal69@gmail.com</a>{`",
  "`}<span className="text-electric">phone</span>{`": "`}<a href="tel:9861920729" className="text-[#a6e22e] hover:underline">9861920729</a>{`",
  "`}<span className="text-electric">github</span>{`": "`}<a href="https://github.com/40Susan02" target="_blank" rel="noopener noreferrer" className="text-[#a6e22e] hover:underline">github.com/40Susan02</a>{`",
  "`}<span className="text-electric">location</span>{`": "`}<span className="text-[#a6e22e]">Kathmandu, Nepal</span>{`"
}`}
              </pre>
            </div>
          </motion.div>

          {/* Right Column: Availability */}
          <motion.div variants={itemVariants} className="bg-ink border border-slate/20 rounded-lg overflow-hidden shadow-xl">
            <div className="bg-ink-dark px-4 py-2 border-b border-slate/20 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate/20"></div>
                <div className="w-3 h-3 rounded-full bg-slate/20"></div>
                <div className="w-3 h-3 rounded-full bg-slate/20"></div>
              </div>
              <span className="ml-2 font-mono text-xs text-slate opacity-70">availability.config</span>
            </div>
            <div className="p-6 font-body space-y-6">
              
              <div>
                <h3 className="font-mono text-electric text-sm mb-3"># Open to</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-electric/10 text-electric border border-electric/20">Internships</span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-electric/10 text-electric border border-electric/20">Entry-level roles</span>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-electric text-sm mb-3"># Work preference</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">Remote</span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">On-site in Kathmandu</span>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-electric text-sm mb-3"># Availability</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">Flexible hours</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
