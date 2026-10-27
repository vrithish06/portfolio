"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Mail, MapPin, Sparkles, User, FileText, ArrowDownToLine } from "lucide-react";
import { GithubIcon, LinkedinIcon, CodeforcesIcon } from "./SocialIcons";

export default function Hero() {
  const { personal } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 max-w-5xl mx-auto"
    >
      {/* Subtle Apple-style ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-indigo-500/10 to-teal-400/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Column: Text & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col items-start gap-6 text-left"
        >
          {/* Status & Credential Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-zinc-300 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {personal.codeforcesBadge && (
              <a
                href={personal.codeforces || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/25 text-blue-300 backdrop-blur-md shadow-sm hover:bg-blue-500/15 hover:border-blue-400/40 transition-all duration-200"
              >
                <CodeforcesIcon className="w-3.5 h-3.5" />
                <span>{personal.codeforcesBadge}</span>
              </a>
            )}
          </div>

          {/* Main Title & Role */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
              {personal.name}
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-400 font-medium tracking-tight">
              Student at <span className="text-zinc-100 font-semibold">{personal.institution}</span>
            </p>
          </div>

          {/* Headline & Summary */}
          <div className="space-y-2.5 max-w-xl">
            {personal.headline.split("\n\n").map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="text-sm sm:text-base text-zinc-300/90 leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Info badges
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              {personal.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Distributed Systems & Backend
            </span>
          </div> */}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-200 shadow-sm"
            >
              <span>View Experience</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 border border-white/[0.08] transition-all duration-200"
            >
              Get in touch
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 border border-white/[0.08] transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>Resume</span>
              <ArrowDownToLine className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <div className="flex items-center gap-1 pl-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              {personal.codeforces && (
                <a
                  href={personal.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codeforces"
                  className="p-2.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <CodeforcesIcon className="w-4 h-4" />
                </a>
              )}
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="p-2.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Apple-style Glass Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative shrink-0 flex justify-center items-center"
        >
          {/* Ambient Glow behind Portrait */}
          <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/20 via-indigo-500/15 to-transparent blur-2xl rounded-3xl -z-10" />

          {/* Portrait Container */}
          <div className="relative p-2 rounded-3xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-2xl shadow-2xl group transition-all duration-300 hover:border-white/[0.2]">
            <div className="relative w-64 sm:w-72 lg:w-80 h-80 sm:h-96 lg:h-[400px] rounded-2xl overflow-hidden bg-zinc-900 flex items-center justify-center">
              {personal.avatarUrl && !imageError ? (
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-zinc-500 gap-3 p-6 text-center">
                  <div className="p-4 rounded-full bg-white/[0.05] border border-white/10">
                    <User className="w-8 h-8 text-zinc-400" />
                  </div>
                  <p className="text-xs text-zinc-400 font-mono">
                    Save photo as <br />
                    <span className="text-zinc-200">public/profile.png</span>
                  </p>
                </div>
              )}

              {/* Subtle inner shadow overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
