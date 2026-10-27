"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Education
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.institution}
                </h3>
                <p className="text-base text-zinc-300 font-medium mt-1">
                  {item.degree}
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-zinc-400">
                {item.period && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {item.period}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  {item.location}
                </span>
              </div>
            </div>

            {item.highlights && item.highlights.length > 0 && (
              <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                {item.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                    <BookOpen className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
