import { useState } from 'react';
import { Menu, X, Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl/80 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight">MyPortfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-white/80" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white/80" />
              </a>
            </div>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/40">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
