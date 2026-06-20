"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Database, BrainCircuit, Network } from "lucide-react";

export default function WhatIDo() {
  const cards = [
    {
      title: "Full-Stack Web Dev",
      description: "Building responsive, robust, and scalable web applications.",
      skills: ["React", "Node.js", "Express", "REST APIs"],
      icon: <Code2 className="w-8 h-8 text-[#00ff66]" />,
    },
    {
      title: "GenAI Integration",
      description: "Infusing applications with cutting-edge AI capabilities.",
      skills: ["LangChain", "FAISS", "Gemini AI", "RAG Architectures"],
      icon: <BrainCircuit className="w-8 h-8 text-[#00ff66]" />,
    },
    {
      title: "Database & Architecture",
      description: "Designing reliable data models and secure backend systems.",
      skills: ["MongoDB", "MySQL", "MVC", "Secure JWT Auth"],
      icon: <Database className="w-8 h-8 text-[#00ff66]" />,
    },
    {
      title: "Machine Learning Pipelines",
      description: "Developing end-to-end data workflows and predictive models.",
      skills: ["Scikit-learn", "Pandas", "NumPy", "Kaggle Work"],
      icon: <Network className="w-8 h-8 text-[#00ff66]" />,
    },
  ];

  return (
    <section id="work" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      {/* Terminal Title */}
      <div className="flex items-center gap-4 mb-16">
        <Terminal className="w-8 h-8 dark:text-gray-500 text-slate-500" />
        <h2 className="text-3xl md:text-4xl font-mono dark:text-white text-slate-900 flex items-center">
          <span className="text-[#00ff66] mr-2">|</span> what i do
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="inline-block w-4 h-8 bg-[#00ff66] ml-2"
          />
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative dark:bg-[#121214] bg-slate-100/80 border dark:border-white/10 border-slate-200/60 rounded-2xl p-8 overflow-hidden transition-all duration-300 shadow-2xl shadow-slate-300/60 dark:shadow-none hover:border-[#00ff66]/50 hover:shadow-[0_0_30px_rgba(0,255,102,0.1)]"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/0 to-[#00ff66]/0 group-hover:from-[#00ff66]/5 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full gap-4">
              <div className="w-14 h-14 rounded-xl dark:bg-white/5 bg-slate-200/50 flex items-center justify-center border dark:border-white/10 border-slate-300/50 group-hover:border-[#00ff66]/30 transition-colors">
                {card.icon}
              </div>

              <h3 className="text-2xl font-semibold dark:text-white text-slate-900 tracking-tight mt-2">
                {card.title}
              </h3>
              
              <p className="dark:text-gray-400 text-slate-600 leading-relaxed flex-grow">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {card.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-medium dark:text-gray-300 text-slate-700 dark:bg-white/5 bg-slate-200/50 border dark:border-white/10 border-slate-300/50 rounded-full"
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
