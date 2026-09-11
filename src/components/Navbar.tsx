import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Mobile: hamburger on the left */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Brand logo + name */}
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-sm font-bold text-white">
            DS
          </span>
          <span className="text-lg font-bold text-slate-900">
            Dev <span className="text-gradient-brand">Stack</span>
          </span>
        </a>

        {/* Desktop center nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={
                i === 0
                  ? "text-sm font-medium text-pink-600"
                  : "text-sm font-medium text-slate-600 hover:text-slate-900"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: auth buttons (shown on all sizes) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="text-xs font-medium text-slate-700 hover:text-slate-900 sm:text-sm">
            Sign In
          </button>
          <button className="bg-gradient-brand rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 sm:px-4 sm:py-2 sm:text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
      <div className="bg-gradient-brand h-[2px] w-full" />
    </header>
  );
}
