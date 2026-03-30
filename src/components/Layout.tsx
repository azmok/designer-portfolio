import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export function Layout() {
  const [time, setTime] = useState('');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    };
    const interval = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-6 md:p-10 justify-between relative z-10">
      <header className="flex justify-between font-mono text-[11px] uppercase tracking-[0.1em]">
        <Link to="/" className="logo font-bold hover:opacity-50 transition-opacity">
          DESIGNER™
        </Link>
        <div className="flex gap-4 md:gap-10 items-center">
          <div className="hidden md:block"><span className="live-dot"></span>System.Active</div>
          <div className="hidden md:block">v.4.0.12</div>
          <div id="clock">{time}</div>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4 hover:opacity-50 transition-opacity"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center max-w-[800px] my-12">
        <Outlet />
      </main>

      <footer className="flex justify-between items-end">
        <a href="mailto:hello@example.com" className="text-xl md:text-2xl border-b border-[var(--fg)] pb-1">
          Get in touch.
        </a>
        <div className="font-mono text-[10px] text-[var(--ui)] text-right">
          ESTABLISHED 2024<br />
          ALL RIGHTS RESERVED<br />
          40.7128° N, 74.0060° W
        </div>
      </footer>

      <div className="pulse"></div>
    </div>
  );
}
