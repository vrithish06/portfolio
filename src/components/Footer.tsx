import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-white/[0.06] py-10 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-zinc-300">{personal.name}</span>
        <span>•</span>
        <span>{personal.institution}</span>
      </div>

      <div className="flex items-center gap-4">
        <span>Designed & Built with Next.js & Tailwind</span>
        <span>•</span>
        <a href="#about" className="hover:text-zinc-300 transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
