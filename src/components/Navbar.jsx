import { useState } from 'react';
import { Menu, X, Bot, Gauge } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#how', label: 'How It Works' },
    { href: '#tech', label: 'Technology' },
    { href: '#mapping', label: 'Mapping' },
    { href: '#features', label: 'Features' },
    { href: '#demo', label: 'Demo' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/10 bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-cyan-300">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-emerald-400 text-slate-900 shadow ring-1 ring-inset ring-white/20">
              <Bot className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-white">AFDR</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-slate-200 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-emerald-400 px-3 py-1.5 text-slate-900 font-semibold shadow ring-1 ring-inset ring-white/30">
              <Gauge className="h-4 w-4" />
              Live Demo
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a href="#demo" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 font-semibold text-slate-900 bg-gradient-to-r from-cyan-500 to-emerald-400">
              Live Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
