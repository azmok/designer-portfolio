import { Link } from 'react-router-dom';

const posts = [
  { id: 1, date: '2024.03.24', title: '静寂の設計：ミニマリズムUIデザインの構築', readTime: '5 MIN READ' },
  { id: 2, date: '2024.02.12', title: 'WebGLによる高パフォーマンスな視覚体験', readTime: '8 MIN READ' },
  { id: 3, date: '2024.01.05', title: 'インターフェースとしてのタイポグラフィ', readTime: '4 MIN READ' },
];

export function Blog() {
  return (
    <div className="animate-in fade-in duration-700">
      <h1 className="text-[clamp(30px,5vw,80px)] font-normal leading-none tracking-[-0.04em] mb-12 font-japanese-sans">
        Thoughts & Notes / 思考と記録
      </h1>
      
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-crosshair">
            <div className="font-mono text-[10px] text-[var(--ui)] mb-2 flex gap-4">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-normal tracking-tight group-hover:opacity-50 transition-opacity font-japanese-sans">
              {post.title}
            </h2>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest border-b border-transparent hover:border-[var(--fg)] transition-colors pb-1 font-japanese-sans">
          ← インデックスに戻る
        </Link>
      </div>
    </div>
  );
}
