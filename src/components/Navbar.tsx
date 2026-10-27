"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "experience", "education", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 transition-all duration-300 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
          scrolled ? "glass-pill shadow-2xl shadow-black/80" : "bg-zinc-900/60 backdrop-blur-md border border-white/5"
        }`}
      >
        <Link
          href="#about"
          className="text-xs font-semibold px-3 py-1.5 rounded-full text-zinc-100 hover:text-white transition-colors tracking-tight flex items-center gap-2 mr-1 sm:mr-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-zinc-300">RR</span>
        </Link>

        <div className="h-4 w-[1px] bg-white/10 hidden sm:block mr-1" />

        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-xs font-medium px-2.5 sm:px-3 py-1.5 rounded-full transition-all duration-200 ${
              activeSection === item.id
                ? "bg-white/10 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
            }`}
          >
            {item.label}
          </a>
        ))}

        <div className="h-4 w-[1px] bg-white/10 hidden sm:block ml-1 mr-1" />

        <a
          href={portfolioData.personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-full bg-white/[0.08] text-zinc-200 hover:bg-white/[0.15] hover:text-white border border-white/[0.08] transition-all duration-200 flex items-center gap-1"
        >
          <span>Resume</span>
          <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
