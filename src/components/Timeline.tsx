"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, GraduationCap, Code, Server, BrainCircuit, Activity } from "lucide-react";

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
      category: "Experience",
      title: "Full-Stack Web Development",
      description: "Building full-stack production-ready applications with modern architectures.",
      icon: <Server className="w-5 h-5 text-gray-900" />,
      date: "Ongoing",
    },
    {
      category: "Experience",
      title: "Machine Learning Solutions",
      description: "Deploying end-to-end ML models and integrating Generative AI pipelines.",
      icon: <BrainCircuit className="w-5 h-5 dark:text-gray-900 text-white" />,
      date: "Ongoing",
    },
    {
      category: "Experience",
      title: "Data Structures & Algorithms",
      description: "Solving 200+ structural algorithmic problems to optimize logic and efficiency.",
      icon: <Code className="w-5 h-5 dark:text-gray-900 text-white" />,
      date: "Ongoing",
    },
    {
      category: "Academic Journey",
      title: "B.E. Electronics & Telecommunication Engineering",
      description: "Bangalore Institute of Technology. Focus on core engineering and structural systems.",
      icon: <GraduationCap className="w-5 h-5 dark:text-gray-900 text-white" />,
      date: "2023 - 2027",
    },
    {
      category: "Academic Journey",
      title: "Tata GenAI Powered Data Analytics",
      description: "Job Simulation outlining foundational competencies in Generative AI and Data Analytics.",
      icon: <Activity className="w-5 h-5 dark:text-gray-900 text-white" />,
      date: "Completed",
    },
  ];

  return (
    <section id="timeline" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      {/* Title */}
      <div className="flex flex-col gap-2 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-slate-900 flex justify-center items-center gap-4">
          <Briefcase className="w-10 h-10 text-[#00ff66]" />
          Journey & Experience
        </h2>
        <p className="dark:text-gray-400 text-slate-600 mt-2 max-w-2xl mx-auto">
          A track record of continuous learning and hands-on engineering focus.
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
