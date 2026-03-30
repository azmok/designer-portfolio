import { Link } from 'react-router-dom';

const posts = [
  { id: 1, date: 'MAR 24, 2024', title: 'The Architecture of Silence: Minimalist UI Design', readTime: '5 MIN READ' },
  { id: 2, date: 'FEB 12, 2024', title: 'Building Performant WebGL Experiences', readTime: '8 MIN READ' },
  { id: 3, date: 'JAN 05, 2024', title: 'Typography as the Interface', readTime: '4 MIN READ' },
];

export function Blog() {
  return (
    <div className="animate-in fade-in duration-700">
      <h1 className="text-[clamp(30px,5vw,80px)] font-normal leading-none tracking-[-0.04em] mb-12">
        Thoughts & Notes
      </h1>
      
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-crosshair">
            <div className="font-mono text-[10px] text-[var(--ui)] mb-2 flex gap-4">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-normal tracking-tight group-hover:opacity-50 transition-opacity">
              {post.title}
            </h2>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest border-b border-transparent hover:border-[var(--fg)] transition-colors pb-1">
          ← Back to Index
        </Link>
      </div>
    </div>
  );
}
