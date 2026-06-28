import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <h1 className="text-[clamp(40px,6vw,100px)] font-normal leading-none tracking-[-0.04em] mb-10">
        DESIGNER
			  <br />PORTFOLIO.
      </h1>
      <p className="text-[13px] leading-relaxed max-w-[500px] opacity-70 font-japanese-sans">
        次世代の体験を設計する、クリエイティブ・デザイナー。最小限の美学と直感的な体験を追求しています。
      </p>

      <div className="mt-16 flex flex-col gap-3">
        <Link to="/works" className="index-item flex items-center gap-5 text-sm font-mono group">
          <span>01</span>
          <div className="line"></div>
          <span>Works</span>
        </Link>
        <Link to="/blog" className="index-item flex items-center gap-5 text-sm font-mono group">
          <span>02</span>
          <div className="line"></div>
          <span>Blog</span>
        </Link>
        <Link to="/about" className="index-item flex items-center gap-5 text-sm font-mono group">
          <span>03</span>
          <div className="line"></div>
          <span>About</span>
        </Link>
      </div>
    </>
  );
}
