'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Pandit Sewa',
    description: 'Full-stack priest-booking platform.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
  },
  {
    title: 'PROJECT_SAD',
    description: 'Personal frontend project hosted on GitHub.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Sales Data Analysis',
    description: 'Cleaned and analyzed a sales dataset.',
    technologies: ['Python', 'Pandas', 'NumPy'],
  },
  {
    title: 'This Portfolio',
    description: 'Interactive personal portfolio built with modern frontend technologies and advanced animation.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'GSAP'],
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

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        className="mb-12"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">03 / Selected work</p>
        <h2 className="section-title">Things I&apos;ve built</h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        variants={containerVariants}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="editorial-card flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:border-electric/60"
          >
            {/* Terminal Window Header */}
            <div className="bg-black/60 px-4 py-3 flex items-center border-b border-white/10 relative">
              <div className="flex gap-2 absolute left-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex-1 text-center font-mono text-sm text-gray-300">
                {project.title.toLowerCase().replace(/\s+/g, '-')}.sh
              </div>
            </div>

            {/* Terminal Window Body */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold font-mono text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 font-body mb-6 flex-grow">
                {project.description}
              </p>
              
              {/* Footer Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="tag-pill bg-white/5 border border-white/10 text-xs text-gray-300 px-3 py-1 rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
