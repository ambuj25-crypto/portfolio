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
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 bg-[#0c0c0e]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl"
    >
      <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
        <Link href="#work" className="hover:text-white transition-colors">
          See my work
        </Link>
        <div className="w-1 h-1 rounded-full bg-white/20" />
        <Link href="#projects" className="hover:text-white transition-colors">
          Projects
        </Link>
        <div className="w-1 h-1 rounded-full bg-white/20" />
        <Link href="#contact" className="hover:text-white transition-colors">
          Contact me
        </Link>
      </div>

      <div className="w-px h-6 bg-white/10" />

      <ThemeToggle />
    </motion.nav>
  );
}
