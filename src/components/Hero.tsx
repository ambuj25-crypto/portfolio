"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const stack = [
    "React.js",
    "Node.js",
    "Express.js",
    "Python",
    "LangChain",
    "Gemini AI",
    "MongoDB",
    "FAISS",
    "C++",
    "Data Structures & Algorithms",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0c0c0e] text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff66]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center z-10">
        
        {/* Left Column: Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 text-left"
        >
          <span className="text-[#00ff66] font-mono text-sm tracking-wider">
            // INTRO
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-gray-300 leading-snug">
            Aspiring Software Developer & <br />
            <span className="font-semibold text-white">AI Architect</span>
          </h2>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            AMBUJ <br /> MISHRA
          </h1>
        </motion.div>

        {/* Center Column: Avatar & Spinning Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Spinning Text SVG */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text>
                <textPath
                  href="#circlePath"
                  startOffset="0%"
                  className="text-[6px] fill-gray-400 font-mono tracking-[0.2em] uppercase"
                >
                  • FULL STACK DEVELOPER • GENAI INTEGRATOR • PROBLEM SOLVER
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Profile Avatar */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-tr from-[#00ff66]/40 to-transparent">
            <div className="w-full h-full rounded-full bg-[#121214] border border-[#00ff66]/30 shadow-[0_0_30px_rgba(0,255,102,0.15)] overflow-hidden flex items-center justify-center">
              {/* Fallback avatar since no image provided */}
              <span className="text-6xl text-gray-700 font-light">AM</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: About & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-6 text-left lg:text-right lg:items-end"
        >
          <span className="text-[#00ff66] font-mono text-sm tracking-wider">
            // ABOUT
          </span>
          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            Experienced in building AI-driven applications, full-stack systems, and end-to-end ML pipelines with strong problem-solving ability.
          </p>

          <div className="flex flex-col gap-4 mt-4 w-full lg:items-end">
            <StatCounter label="DSA Solved" value="200+" />
            <StatCounter label="Codeathon" value="8th Place" />
          </div>
        </motion.div>

      </div>

      {/* Marquee Element */}
      <div className="absolute bottom-24 w-full overflow-hidden flex whitespace-nowrap opacity-60">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex gap-8 items-center"
        >
          {/* Render twice for seamless looping */}
          {[...stack, ...stack, ...stack].map((tech, idx) => (
            <span
              key={idx}
              className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-800 uppercase tracking-widest px-4"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gray-800 overflow-hidden relative">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-[#00ff66] shadow-[0_0_8px_#00ff66]"
          />
        </div>
      </motion.div>
    </section>
  );
}

function StatCounter({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-4 w-full max-w-[200px] backdrop-blur-sm"
    >
      <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
      <span className="text-sm text-gray-500 mt-1">{label}</span>
    </motion.div>
  );
}
