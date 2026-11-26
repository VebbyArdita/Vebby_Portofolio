"use client";

import { useState } from "react";
import { Menu, X, Printer, ExternalLink } from "lucide-react";
import { profileData } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills & Awards", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-white/10 bg-[#184B64]/95 backdrop-blur-md text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FACC15] font-mono text-sm font-extrabold text-slate-900 transition-transform group-hover:scale-105">
            VA
          </span>
          <div className="leading-tight">
            <span className="block text-sm font-bold tracking-wide">
              Vebby Ardita
            </span>
            <span className="block font-mono text-[10px] text-sky-200/80">
              IS Portfolio • Manado
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-sky-100/90 transition-colors hover:text-[#FACC15]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/15"
            title="Buka Profil LinkedIn"
          >
            <ExternalLink className="h-3.5 w-3.5 text-sky-300" />
            LinkedIn
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/15 cursor-pointer"
            title="Cetak atau Simpan sebagai PDF"
          >
            <Printer className="h-3.5 w-3.5 text-sky-300" />
            Save PDF
          </button>
          <a
            href="#contact"
            className="rounded-lg bg-[#FACC15] px-3.5 py-1.5 text-xs font-extrabold text-slate-900 shadow-sm transition hover:bg-yellow-300"
          >
            Hire Me!
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-sky-100 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-[#143F54] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-sky-100 hover:text-[#FACC15]"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-wrap gap-2 border-t border-white/10 pt-3">
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-[#FACC15] px-3.5 py-1.5 text-xs font-extrabold text-slate-900"
              >
                Hire Me!
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
