"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Copy, Check, ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, CodeforcesIcon } from "./SocialIcons";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center flex flex-col items-center"
      >
        {/* Ambient bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Connect</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Let&apos;s build something exceptional.
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
          Open to SWE & ML opportunities & cool ideas.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-200 shadow-sm"
          >
            <span>Send Email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 border border-white/[0.08] transition-all duration-200"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 border border-white/[0.08] transition-all duration-200"
          >
            <FileText className="w-4 h-4 text-zinc-400" />
            <span>View Resume</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-sm text-zinc-400">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          {personal.codeforces && (
            <>
              <span className="text-zinc-700">•</span>
              <a
                href={personal.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <CodeforcesIcon className="w-4 h-4" />
                <span>Codeforces</span>
              </a>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
