"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { FolderGit2, Calendar, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            Software systems, algorithms, and full-stack platforms engineered with high standards.
          </p>
        </div>

        <div className="text-xs text-zinc-400 font-mono px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
          {projects.length} Engineering Projects
        </div>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group"
          >
            {/* Subtle glow highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[90px] pointer-events-none rounded-full" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm font-medium text-zinc-400 mt-1">
                    {project.subtitle}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  {project.period}
                </span>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-3 my-6">
              {project.bullets.map((bullet, bIndex) => (
                <div key={bIndex} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
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
