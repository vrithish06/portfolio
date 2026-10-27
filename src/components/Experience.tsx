"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Experience</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Where I&apos;ve worked
        </h2>
      </div>

      <div className="space-y-6">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Ambient subtle glow for prominent role */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] pointer-events-none rounded-full" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.company}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {item.role}
                  </span>
                </div>
                {item.team && (
                  <p className="text-sm font-medium text-zinc-300">{item.team}</p>
                )}
              </div>

              <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  {item.location}
                </span>
              </div>
            </div>

            {item.summary && (
              <p className="text-sm text-zinc-300 mb-6 italic border-l-2 border-blue-500/40 pl-3">
                {item.summary}
              </p>
            )}

            {/* Impact Highlights */}
            <div className="space-y-3 mb-6">
              {item.highlights.map((bullet, bIndex) => (
                <div key={bIndex} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
              {item.technologies.map((tech, tIndex) => (
                <span
                  key={tIndex}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
