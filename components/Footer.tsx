export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-dark border-t border-slate/20">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
        
        <div className="font-mono text-sm text-slate mb-2">
          <span className="text-electric">❯</span> echo "Built by Susan Dahal"
        </div>
        
        <div className="font-mono text-sm text-slate mb-8">
          <span className="text-electric">❯</span> echo "© {currentYear} — Kathmandu, Nepal"
        </div>

        <nav className="flex flex-wrap justify-center items-center gap-2 mb-6">
          <a href="#about" className="font-mono text-xs text-slate hover:text-electric transition-colors">About</a>
          <span className="text-slate/50">|</span>
          <a href="#skills" className="font-mono text-xs text-slate hover:text-electric transition-colors">Skills</a>
          <span className="text-slate/50">|</span>
          <a href="#projects" className="font-mono text-xs text-slate hover:text-electric transition-colors">Projects</a>
          <span className="text-slate/50">|</span>
          <a href="#education" className="font-mono text-xs text-slate hover:text-electric transition-colors">Education</a>
          <span className="text-slate/50">|</span>
          <a href="#contact" className="font-mono text-xs text-slate hover:text-electric transition-colors">Contact</a>
        </nav>

        <div>
          <a 
            href="https://github.com/40Susan02" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-xs text-slate hover:text-electric flex items-center gap-2 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub Profile
          </a>
        </div>

      </div>
    </footer>
  );
}
