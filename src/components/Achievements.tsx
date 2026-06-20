"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Code2 } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Active Kaggle Contributor",
      icon: <Award className="w-8 h-8 text-[#00ff66]" />,
      description: "Participating in ML challenges and contributing open-source datasets and notebooks.",
    },
    {
      title: "8th Place Codeathon Winner",
      icon: <Trophy className="w-8 h-8 text-[#00ff66]" />,
      description: "Secured a top-10 finish in a competitive nationwide algorithmic programming contest.",
    },
    {
      title: "300+ LeetCode/GFG Solutions Completed",
      icon: <Code2 className="w-8 h-8 text-[#00ff66]" />,
      description: "Consistent problem solver focusing on optimal data structures and efficient algorithms.",
    },
  ];

  return (
    <section id="achievements" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      {/* Title */}
      <div className="flex flex-col gap-2 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-slate-900 flex justify-center items-center gap-4">
          <Award className="w-10 h-10 text-[#00ff66]" />
          Certifications & Achievements
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff66] to-transparent mx-auto mt-4" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -5 }}
            className="group relative dark:bg-[#121214] bg-slate-100/80 border dark:border-white/10 border-slate-200/60 rounded-2xl p-8 flex flex-col items-center text-center transition-all shadow-2xl shadow-slate-300/60 dark:shadow-none hover:border-[#00ff66]/30 hover:shadow-[0_10px_40px_rgba(0,255,102,0.1)]"
          >
            <div className="w-16 h-16 rounded-full dark:bg-white/5 bg-slate-200/50 border dark:border-white/10 border-slate-300/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#00ff66]/10 transition-all duration-300">
              {achievement.icon}
            </div>
            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4 leading-tight">
              {achievement.title}
            </h3>
            <p className="dark:text-gray-400 text-slate-600 text-sm leading-relaxed">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
