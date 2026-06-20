"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0, y: -20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 dark:bg-[#0c0c0e]/80 bg-white/80 backdrop-blur-md border dark:border-white/10 border-black/10 rounded-full shadow-2xl"
    >
      <div className="flex items-center gap-6 text-sm font-medium dark:text-gray-300 text-slate-700">
        <Link href="#work" className="dark:hover:text-white hover:text-slate-3000 transition-colors">
          See my work
        </Link>
        <div className="w-1 h-1 rounded-full dark:bg-white/20 bg-black/20" />
        <Link href="#projects" className="dark:hover:text-white hover:text-slate-3000 transition-colors">
          Projects
        </Link>
        <div className="w-1 h-1 rounded-full dark:bg-white/20 bg-black/20" />
        <Link href="#contact" className="dark:hover:text-white hover:text-slate-3000 transition-colors">
          Contact me
        </Link>
      </div>

      <div className="w-px h-6 dark:bg-white/10 bg-black/10" />

      <ThemeToggle />
    </motion.nav>
  );
}
