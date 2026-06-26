"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, GraduationCap, Code, Server, BrainCircuit, Activity, Plane, Bot, TriangleAlert, Database, School, Route } from "lucide-react";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // useScroll tracks the scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Transform the scroll progress into a scaleY value for the timeline line
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const timelineData = [
    {
      category: "Academic Journey",
      title: "Higher Secondary Education (PCM)",
      description: "Completed Higher Secondary with Physics, Chemistry, and Mathematics at D.L. English School, achieving 80%. Built a strong analytical and mathematical foundation that sparked my interest in engineering and software development.",
      icon: <School className="w-5 h-5 text-gray-900" />,
      date: "2019 – 2021",
    },
    {
      category: "Engineering Begins",
      title: "B.E. Electronics & Telecommunication Engineering",
      description: "Started my engineering journey at Bangalore Institute of Technology (BIT) after qualifying through COMEDK. While pursuing Electronics & Telecommunication, I gradually discovered my passion for software engineering and modern web technologies.",
      icon: <BrainCircuit className="w-5 h-5 dark:text-gray-900 text-white" />,
      date: "2023 – 2027",
    },
    {
      category: "Problem Solving Journey",
      title: "Data Structures & Algorithms",
      description: "Dedicated a significant part of my engineering journey to mastering Data Structures & Algorithms. Solved 300+ coding problems across multiple platforms, strengthening my understanding of problem-solving, algorithms, and coding interviews.",
      icon: <Database className="w-5 h-5 dark:text-gray-900 text-white" />,
      date: "2023 – Present",
    },
    {
      category: "Full Stack Development",
      title: "Modern Web Development",
      description: "Expanded into Full Stack Development by building scalable applications using React, Next.js, Node.js, Express.js, MongoDB, and TypeScript. Focused on writing clean, maintainable, and production-ready applications.",
      icon: <TriangleAlert className="w-5 h-5 dark:text-gray-900 text-white" />,
      date: "2024 – Present",
    },
     {
      category: "AI & Real-World Projects",
      title: "AI & Software Engineering Projects",
      description: "Applied my knowledge by developing AI-powered and full-stack applications, including resume analysis platforms, machine learning solutions, and production-ready web applications, combining modern development practices with practical problem solving.",
      icon: <Bot className="w-5 h-5 dark:text-gray-900 text-white" />,
      date: "2025 – Present",
    },
    {
      category: "Freelance Experience",
      title: "Freelance Web Developer",
      description: "Successfully delivered my first freelance web development project by building a responsive landing page with EmailJS-powered appointment booking, enabling automatic client inquiry emails. Currently exploring and working toward larger freelance opportunities.",
      icon: < Briefcase className="w-5 h-5 dark:text-gray-900 text-white" />,
      date: "2026 – Present",
    },
    {
      category: "What's Next",
      title: "Growing as a Software Engineer",
      description: "Actively preparing for Software Development Engineer (SDE) roles while expanding expertise in Full Stack Development, AI applications, and building impactful real-world products.",
      icon: <Plane className="w-5 h-5 dark:text-gray-900 text-white" />,
      date: "Present",
    }
  ];

  return (
    <section id="timeline" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      {/* Title */}
      <div className="flex flex-col gap-2 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-slate-900 flex justify-center items-center gap-4">
          <Route className="w-10 h-10 text-[#00ff66]" />
          Career Journey
        </h2>
        <p className="dark:text-gray-400 text-slate-600 mt-2 max-w-2xl mx-auto">
          A timeline of my learning, engineering growth, and professional milestones.
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        {/* The Track (Background Line) */}
        <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] dark:bg-white/10 bg-black/10" />

        {/* The Animated Tracking Line */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px] -ml-[1px] bg-[#00ff66] shadow-[0_0_15px_#00ff66] z-0 rounded-full"
        />

        {/* Nodes */}
        <div className="relative z-10 flex flex-col gap-12 md:gap-24">
          {timelineData.map((node, idx) => {
            // Determine if the node should appear on the left or right on desktop
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-start ${
                  isLeft ? "md:flex-row-reverse" : ""
                } gap-6 md:gap-16 w-full relative pl-24 md:pl-0`}
              >
                {/* Node Dot / Icon */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#00ff66] shadow-[0_0_20px_#00ff66]/50 border-4 dark:border-[#0c0c0e] border-slate-50"
                >
                  {node.icon}
                </motion.div>

                {/* Content Panel */}
                <motion.div
                  initial={{ opacity: 0, x: isDesktop ? (isLeft ? 50 : -50) : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex-1 w-full md:w-1/2"
                >
                  <div
                    className={`dark:bg-[#121214] bg-slate-100/80 border dark:border-white/10 border-slate-200/60 rounded-2xl p-6 md:p-8 hover:border-[#00ff66]/30 transition-colors shadow-xl ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#00ff66] bg-[#00ff66]/10 rounded-full mb-4">
                      {node.category}
                    </span>
                    <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-2">
                      {node.title}
                    </h3>
                    <div className="text-sm font-mono dark:text-gray-500 text-slate-500 mb-4">
                      {node.date}
                    </div>
                    <p className="dark:text-gray-400 text-slate-600 leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                </motion.div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
