"use client";

import { motion } from "framer-motion";

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
    "MySQL",
    "JavaScript",
    "typescript",
    "html",
    "css",
    "TailwindCSS",
    "git",
    "github",

  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden dark:bg-[#0c0c0e] bg-[#FDFBF7] dark:text-white text-slate-900 pt-28 pb-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Dark mode grid override */}
      <div
        className="absolute inset-0 hidden dark:block pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Left-edge radial green glow */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] dark:bg-[#00ff66]/8 bg-[#00ff66]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* ─── 3-Column Top Grid ─── */}
      <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

        {/* LEFT COLUMN – Intro & Title */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-1 md:col-span-4 lg:col-span-3 flex flex-col gap-5 text-left"
        >
          <span className="text-[#00c853] dark:text-[#00ff66] font-mono text-sm tracking-[0.2em] uppercase">
            // INTRO
          </span>
          <h2 className="text-2xl md:text-3xl font-light dark:text-gray-300 text-slate-600 leading-snug">
            Aspiring Software Developer &{" "}
            <span className="font-semibold text-[#00c853] dark:text-[#00ff66] text-slate-900">
              AI Architect
            </span>
          </h2>

          {/* Thin decorative line */}
          <div className="w-12 h-[2px] bg-[#00c853] dark:bg-[#00ff66] rounded-full opacity-60" />

          {/* Subtle tag pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            {["Full-Stack", "GenAI", "ML Pipelines"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-mono tracking-wider uppercase dark:text-gray-400 text-slate-500 border dark:border-white/10 border-slate-300/60 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CENTER COLUMN – Avatar & Spinning Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col items-center justify-center gap-4"
        >
          {/* Circle + Spinning Text wrapper */}
          <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[340px] md:h-[340px]">
            {/* Spinning SVG orbit text */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] md:w-[340px] md:h-[340px] z-10 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <defs>
                  <path
                    id="orbitPath"
                    d="M 50,50 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                    fill="none"
                  />
                </defs>
                <text>
                  <textPath
                    href="#orbitPath"
                    startOffset="0%"
                    className="text-[5.7px] font-mono text-shadow-lg shadow-cyan-500/80 tracking-[0.25em] uppercase"
                    fill="currentColor"
                    style={{ color: "#00c853" }}
                  >
                    ✦ FULL STACK DEVELOPER ✦ GENAI INTEGRATOR ✦ PROBLEM SOLVER
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Profile image */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-[3px] bg-gradient-to-tr from-[#00c853]/60 via-[#00ff66]/30 to-transparent z-20">
              <div className="w-full h-full rounded-full dark:bg-[#121214] bg-[#f0ede8] border dark:border-[#00ff66]/20 border-[#00c853]/40 overflow-hidden shadow-[0_0_40px_rgba(0,200,83,0.18)]">
                <img
                  src="/profile2.png"
                  alt="Ambuj Mishra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Subtitle below avatar */}
          <div className="flex flex-col items-center gap-1 mt-1">
            <span className="font-mono text-xs tracking-[0.35em] uppercase dark:text-gray-500 text-slate-600">
              BIT @ BENGALURU
            </span>
            <div className="flex gap-1.5 items-center">
              <span className="w-1 h-1 rounded-full bg-[#00c853] dark:bg-[#00ff66] inline-block" />
              <span className="font-mono text-[15px] tracking-widest uppercase dark:text-gray-500 text-slate-600">
                Available for Freelance
              </span>
              <span className="w-1 h-1 rounded-full bg-[#00c853] dark:bg-[#00ff66] inline-block" />
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN – About & Raw Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="col-span-1 md:col-span-4 lg:col-span-3 flex flex-col gap-5 text-left md:text-right md:items-end"
        >
          <span className="text-[#00c853] dark:text-[#00ff66] font-mono text-sm tracking-[0.2em] uppercase">
            // ABOUT
          </span>
          <p className="dark:text-gray-400 text-slate-600 text-base leading-relaxed max-w-xs">
            Experienced in building AI-driven applications, full-stack systems,
            and end-to-end ML pipelines with strong problem-solving ability.
          </p>

          {/* Thin decorative line */}
          <div className="w-12 h-[2px] bg-[#00c853] dark:bg-[#00ff66] rounded-full opacity-60" />

          {/* Raw Typography Stats */}
          <div className="flex flex-col gap-4 mt-1 md:items-end">
            <div className="flex flex-col md:items-end">
              <span className="text-4xl font-black text-[#00c853] dark:text-[#00ff66] leading-none tracking-tight">
                300+
              </span>
              <span className="text-xs font-mono tracking-[0.2em] uppercase dark:text-gray-500 text-slate-500 mt-1">
                DSA Solved
              </span>
            </div>
            <div className="flex flex-col md:items-end">
              <span className="text-4xl font-black text-[#00c853] dark:text-[#00ff66] leading-none tracking-tight">
                8th
              </span>
              <span className="text-xs font-mono tracking-[0.2em] uppercase dark:text-gray-500 text-slate-500 mt-1">
                Place • Codeathon
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── Massive Bottom Centered Name Block ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full flex flex-col items-center mt-10 md:mt-14 px-4 overflow-hidden"
      >
        {/* Top small surname */}
        <span className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-[#004d31] dark:text-[#00ff66] mb-1 select-none">
          MISHRA
        </span>

        {/* Massive first name with vertical gradient */}
        <h1
          className="font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#1c2321] via-[#0b3327] to-[#0f543e] dark:from-white dark:via-gray-300 dark:to-gray-500 leading-[0.88] select-none w-full text-center"
          style={{ fontSize: "clamp(5rem, 16vw, 13rem)" }}
        >
          AMBUJ
        </h1>
      </motion.div>

      {/* ─── Skills Marquee (safe in document flow, below all content) ─── */}
      <div className="relative z-10 w-full mt-10 mb-2 overflow-hidden flex whitespace-nowrap opacity-80">
        <motion.div
          animate={{ x: [0, -1800] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 18,
          }}
          className="flex gap-8 items-center flex-shrink-0"
        >
          {[...stack, ...stack, ...stack].map((tech, idx) => (
            <span
              key={idx}
              className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-b dark:from-gray-600 dark:to-gray-700 from-slate-400 to-slate-500 uppercase tracking-widest px-4 flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 w-full mt-5 mb-2 overflow-hidden flex whitespace-nowrap opacity-80">
        <motion.div
          animate={{ x: [-1800, 0] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 18,
          }}
          className="flex gap-8 items-center flex-shrink-0"
        >
          {[...stack, ...stack, ...stack].map((tech, idx) => (
            <span
              key={idx}
              className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-b dark:from-gray-600 dark:to-gray-700 from-slate-400 to-slate-500 uppercase tracking-widest px-4 flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
