"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      category: "GenAI",
      title: "Production-Ready GenAI Job Preparation Platform",
      description:
        "A comprehensive platform designed to streamline job preparation. It handles advanced resume parsing, calculates dynamic ATS scoring, and generates tailored interview scenarios using generative AI to simulate real-world technical screening.",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Gemini AI", "Puppeteer"],
      githubLink: "#", // Add real link later
    },
    {
      category: "Interactive Dev",
      title: "Responsive Snake Game",
      description:
        "A highly responsive, grid-based implementation of the classic Snake Game. Features robust collision detection, smooth pointer events for touch devices, and local storage persistence for high scores across sessions.",
      tags: ["Vanilla JavaScript", "HTML5 Canvas", "CSS3", "localStorage"],
      githubLink: "#", // Add real link later
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      {/* Title */}
      <div className="flex flex-col gap-2 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-slate-900 flex items-center gap-4">
          <FolderGit2 className="w-10 h-10 text-[#00ff66]" />
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#00ff66] to-transparent mt-4" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="group relative dark:bg-[#121214] bg-slate-100/80 border dark:border-white/10 border-slate-200/60 rounded-3xl p-8 overflow-hidden transition-all duration-300 shadow-2xl shadow-slate-300/60 dark:shadow-none hover:border-[#00ff66]/50 hover:shadow-[0_0_40px_rgba(0,255,102,0.15)] flex flex-col"
          >
            {/* Ambient Hover Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff66]/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Category Pill */}
            <div className="flex items-center mb-6">
              <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase text-[#0c0c0e] bg-[#00ff66] rounded-full shadow-[0_0_10px_#00ff66]">
                {project.category}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 leading-tight">
              {project.title}
            </h3>
            
            <p className="dark:text-gray-400 text-slate-600 text-base leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 text-sm dark:text-gray-300 text-slate-700 dark:bg-white/5 bg-slate-200/50 border dark:border-white/10 border-slate-300/50 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Link */}
            <div className="mt-auto pt-6 border-t dark:border-white/10 border-slate-300/50">
              <Link
                href={project.githubLink}
                className="inline-flex items-center gap-2 dark:text-white text-slate-900 hover:text-[#00ff66] dark:hover:text-[#00ff66] transition-colors font-medium"
              >
                <FaGithub className="w-5 h-5" />
                View on GitHub
                <motion.span
                  className="inline-block ml-1"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
