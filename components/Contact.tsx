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
        initial={false}
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 mx-auto w-full"
      >
        <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
          <p className="eyebrow">05 / Contact</p>
          <h2 className="section-title">Have a good idea?</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate md:text-xl">
            I&apos;m looking for a place to learn fast, contribute thoughtfully, and build useful things with good people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <motion.div variants={itemVariants} className="editorial-card p-6 md:p-10">
            <p className="eyebrow mb-8">Direct line</p>
            <div className="space-y-1">
              <a href="mailto:susandahal69@gmail.com" className="contact-link text-base md:text-lg">
                <span className="text-slate">Email</span>
                <span>susandahal69@gmail.com <span className="ml-3 text-electric">↗</span></span>
              </a>
              <a href="tel:9861920729" className="contact-link text-base md:text-lg">
                <span className="text-slate">Phone</span>
                <span>9861920729 <span className="ml-3 text-electric">↗</span></span>
              </a>
              <a href="https://github.com/40Susan02" target="_blank" rel="noopener noreferrer" className="contact-link text-base md:text-lg">
                <span className="text-slate">GitHub</span>
                <span>40Susan02 <span className="ml-3 text-electric">↗</span></span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col justify-between border-l border-electric/30 pl-6 md:pl-10">
            <div>
              <p className="eyebrow mb-6">Currently open to</p>
              <div className="flex flex-wrap gap-3">
                <span className="tag-pill">Internships</span>
                <span className="tag-pill">Entry-level roles</span>
                <span className="tag-pill">Remote / Kathmandu</span>
              </div>
            </div>
            <a href="mailto:susandahal69@gmail.com" className="lime-button mt-12 w-fit">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
