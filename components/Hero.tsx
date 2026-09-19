'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene'), { ssr: false, loading: () => <div className="w-full h-full" /> });

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set([sectionRef.current, terminalRef.current, nameRef.current, roleRef.current, codeRef.current, ctaRef.current, sceneRef.current], { opacity: 1, visibility: 'visible' });
      gsap.set(terminalRef.current, { y: 0 });
      gsap.set(nameRef.current, { clipPath: 'inset(0% 0% 0% 0%)' });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial states
    gsap.set(sectionRef.current, { opacity: 0 });
    gsap.set(terminalRef.current, { opacity: 0, y: 30 });
    gsap.set(nameRef.current, { clipPath: 'inset(0% 100% 0% 0%)' });
    gsap.set(roleRef.current, { opacity: 0, y: 20 });
    gsap.set(codeRef.current, { opacity: 0 });
    gsap.set(ctaRef.current, { opacity: 0 });
    gsap.set(sceneRef.current, { opacity: 0 });

    // 1. Background/grid fades in
    tl.to(sectionRef.current, { opacity: 1, duration: 1 })
      // 2. Terminal panel slides up
      .to(terminalRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      // 3. Name reveals
      .to(nameRef.current, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'power2.inOut' }, '-=0.4')
      // 4. Role appears
      .to(roleRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.6')
      // 5. Code snippet appears
      .to(codeRef.current, { opacity: 1, duration: 0.5 })
      // 6. CTA buttons appear
      .to(ctaRef.current, { opacity: 1, duration: 0.5 }, '-=0.2')
      // 7. 3D scene fades in
      .to(sceneRef.current, { opacity: 1, duration: 1 }, '-=0.5');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] text-[#f4f4f5] relative overflow-hidden px-4 md:px-8 lg:px-16">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10 pt-20 pb-12">
        {/* Left Side: Terminal / Content */}
        <div className="flex flex-col justify-center max-w-xl">
          <div ref={terminalRef} className="bg-[#18181b] rounded-lg border border-[#27272a] shadow-2xl overflow-hidden backdrop-blur-sm bg-opacity-80">
            {/* Terminal Header */}
            <div className="bg-[#27272a] px-4 py-3 flex items-center border-b border-[#3f3f46]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="ml-4 text-xs font-mono text-[#a1a1aa]">susan.config.ts</div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 md:p-8">
              <h1 ref={nameRef} className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-2">
                Susan Dahal
              </h1>
              <p ref={roleRef} className="font-mono text-xl md:text-2xl text-[#4fc3f7] mb-8 font-medium">
                BSc CSIT Student
              </p>
              
              <div ref={codeRef} className="font-mono text-sm sm:text-base mb-8 overflow-x-auto bg-black/30 p-4 rounded-md border border-white/5">
                <pre className="text-[#f4f4f5] leading-relaxed">
                  <span className="text-[#ab47bc]">const</span> <span className="text-[#4fc3f7]">susan</span> <span className="text-[#ab47bc]">=</span> {'{\n'}
                  {'  '}role: <span className="text-[#27c93f]">"BSc CSIT Student"</span>,
                  {'\n  '}location: <span className="text-[#27c93f]">"Kathmandu, Nepal"</span>,
                  {'\n  '}interests: [<span className="text-[#27c93f]">"Web Dev"</span>, <span className="text-[#27c93f]">"Data Analysis"</span>, <span className="text-[#27c93f]">"AI/ML"</span>],
                  {'\n  '}status: <span className="text-[#27c93f]">"Learning &amp; Building 🚀"</span>
                  {'\n}'};
                </pre>
              </div>
              
              <div ref={ctaRef} className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/40Susan02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#4fc3f7] text-[#0a0a0a] font-medium hover:bg-[#4fc3f7]/90 transition-colors duration-200"
                  aria-label="View Susan's GitHub Profile"
                >
                  View GitHub
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[#4fc3f7] text-[#4fc3f7] font-medium hover:bg-[#4fc3f7]/10 transition-colors duration-200"
                  aria-label="Scroll to contact section"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: 3D Scene */}
        <div ref={sceneRef} className="hidden md:block h-[500px] lg:h-[600px] relative pointer-events-auto">
          <Scene />
        </div>
      </div>
    </section>
  );
}
