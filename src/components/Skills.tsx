"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, Code, Layers, Database, Terminal } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code className="w-4 h-4 text-blue-400" />,
    "Frameworks & Backend": <Layers className="w-4 h-4 text-indigo-400" />,
    "Databases & Storage": <Database className="w-4 h-4 text-emerald-400" />,
    "Systems & Infrastructure": <Terminal className="w-4 h-4 text-teal-400" />,
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Skills & Technologies
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Core programming languages, backend systems, databases, and infrastructure tools I work with daily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                  {categoryIcons[category.title] || <Cpu className="w-4 h-4 text-zinc-400" />}
                </div>
                <h3 className="text-base font-semibold text-zinc-100 tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/[0.03] text-zinc-300 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.12] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
