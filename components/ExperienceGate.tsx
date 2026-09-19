'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExperienceTimeline from './ExperienceTimeline';

export default function ExperienceGate() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'rate-limited'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      if (response.status === 429) {
        setStatus('rate-limited');
        setCode('');
        return;
      }

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setTimeout(() => {
          setUnlocked(true);
        }, 500); // Short delay before revealing
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Invalid access code.');
        setCode('');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      setCode('');
    }
  };

  return (
    <motion.section 
      id="experience" 
      className="py-24"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-heading text-paper mb-10">
          <span className="text-electric">##</span> Experience
        </h2>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="panel bg-ink/50 border border-slate/20 rounded-xl p-8 max-w-md mx-auto text-center shadow-lg"
            >
              <div className="flex justify-center mb-6 text-slate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-12"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              
              <h3 className="font-heading text-xl text-paper mb-2">Private Section</h3>
              <p className="text-slate mb-8">This section is private — enter the access code.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="password"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter access code"
                  className="w-full px-4 py-3 bg-ink border border-slate/30 text-paper font-mono rounded focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
                  aria-label="Access code"
                  maxLength={256}
                  disabled={status === 'loading' || status === 'success'}
                />

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success' || !code}
                  className="w-full py-3 px-4 bg-electric text-ink font-mono font-semibold rounded hover:bg-electric/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-h-[48px]"
                  aria-label="Unlock experience section"
                >
                  {status === 'loading' ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full"
                    />
                  ) : status === 'success' ? (
                    'Unlocked!'
                  ) : (
                    'Unlock Experience'
                  )}
                </button>
              </form>

              <div aria-live="polite" className="mt-4 min-h-[24px]">
                {status === 'rate-limited' && (
                  <p className="text-amber-400 text-sm">Too many attempts. Please try again later.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm">{errorMessage}</p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <ExperienceTimeline />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
