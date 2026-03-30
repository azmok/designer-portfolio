import { Link } from 'react-router-dom';

const projects = [
  { id: '01', title: 'Aether Protocol', type: 'Web3 Infrastructure', year: '2024' },
  { id: '02', title: 'Nexus Dashboard', type: 'Data Visualization', year: '2023' },
  { id: '03', title: 'Void Engine', type: 'Creative Coding', year: '2023' },
  { id: '04', title: 'Lumina Identity', type: 'Brand Design', year: '2022' },
];

export function Works() {
  return (
    <div className="animate-in fade-in duration-700">
      <h1 className="text-[clamp(30px,5vw,80px)] font-normal leading-none tracking-[-0.04em] mb-12">
        Selected Works
      </h1>
      
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-5 text-sm font-mono border-b border-[var(--ui)] pb-4 hover:border-[var(--fg)] transition-colors cursor-crosshair">
            <span className="text-[var(--ui)] group-hover:text-[var(--fg)] transition-colors">{project.id}</span>
            <span className="text-lg md:text-xl font-sans tracking-tight flex-1">{project.title}</span>
            <span className="text-[var(--ui)]">{project.type}</span>
            <span className="text-[var(--ui)]">{project.year}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest border-b border-transparent hover:border-[var(--fg)] transition-colors pb-1">
          ← Back to Index
        </Link>
      </div>
    </div>
  );
}
