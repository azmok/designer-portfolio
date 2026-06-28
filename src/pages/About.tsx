import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="animate-in fade-in duration-700">
      <h1 className="text-[clamp(30px,5vw,80px)] font-normal leading-none tracking-[-0.04em] mb-10 font-japanese-sans">
        About / 概要
      </h1>
      
      <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-[600px] opacity-80 font-japanese-sans">
        <p>
          東京を拠点に活動する独立系デザイナー兼デベロッパー。
          ブルータリズムの美学と、高度なエンジニアリングが交差する領域を探求しています。
        </p>
        <p>
          コンピュータサイエンスとグラフィックデザインのバックグラウンドを持ち、不要なものを削ぎ落としたデジタル体験を構築。
          パフォーマンス、タイポグラフィ、そして緻密なインタラクションに深く焦点を当てています。
        </p>
        
        <div className="pt-8 font-mono text-sm">
          <div className="grid grid-cols-2 gap-4 border-t border-[var(--ui)] pt-4">
            <span className="text-[var(--ui)] uppercase tracking-wider">Capabilities</span>
            <ul className="space-y-1 font-japanese-sans">
              <li>フロントエンド・エンジニアリング</li>
              <li>UI/UX デザイン</li>
              <li>クリエイティブ・コーディング</li>
              <li>システム設計</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest border-b border-transparent hover:border-[var(--fg)] transition-colors pb-1 font-japanese-sans">
          ← インデックスに戻る
        </Link>
      </div>
    </div>
  );
}
