import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="animate-in fade-in duration-700">
      <h1 className="text-[clamp(30px,5vw,80px)] font-normal leading-none tracking-[-0.04em] mb-10">
        System.Info
      </h1>
      
      <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-[600px] opacity-80">
        <p>
          I am an independent developer and designer based in Tokyo, Japan. 
          My work explores the intersection of brutalist aesthetics and highly functional engineering.
        </p>
        <p>
          With a background in computer science and graphic design, I build digital experiences that are stripped of the unnecessary, focusing entirely on performance, typography, and precise interaction.
        </p>
        
        <div className="pt-8 font-mono text-sm">
          <div className="grid grid-cols-2 gap-4 border-t border-[var(--ui)] pt-4">
            <span className="text-[var(--ui)]">Capabilities</span>
            <ul className="space-y-1">
              <li>Frontend Engineering</li>
              <li>UI/UX Design</li>
              <li>Creative Coding</li>
              <li>Systems Architecture</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest border-b border-transparent hover:border-[var(--fg)] transition-colors pb-1">
          ← Back to Index
        </Link>
      </div>
    </div>
  );
}
