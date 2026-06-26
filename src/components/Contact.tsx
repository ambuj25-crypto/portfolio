"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CircleFadingPlus } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const socials = [
    { name: "GitHub", icon: <FaGithub className="w-6 h-6" />, href: "https://github.com/ambuj25-crypto" },
    { name: "LinkedIn", icon: <FaLinkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/ambuj-mishra-b308bb290/?skipRedirect=true" },
    { name: "Email", icon: <Mail className="w-6 h-6" />, href: "mailto:ambujmishra2507@gmail.com" },
    { name: "Instagram", icon: <FaInstagram className="w-6 h-6" />, href: "https://www.instagram.com/buildwithambuj?igsh=ZTAyenRmNjFod2xl" },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 max-w-4xl mx-auto w-full">

      {/* Social Links */}
      <div className="flex justify-center items-center gap-8 mb-20">
        {socials.map((social, idx) => (
          <Link
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 dark:bg-white/5 bg-slate-200/50 rounded-full border dark:border-white/10 border-slate-300/50 hover:border-[#00ff66]/50 hover:bg-[#00ff66]/10 transition-all duration-300"
          >
            <div className="dark:text-gray-400 text-slate-600 group-hover:text-[#00ff66] transition-colors">
              {social.icon}
            </div>
            {/* Tooltip */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono dark:text-gray-500 text-slate-500 tracking-widest uppercase pointer-events-none">
              {social.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Contact Form Container */}
      <div className="dark:bg-[#121214] bg-slate-100/80 border dark:border-white/10 border-slate-200/60 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
        {/* Background glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff66]/5 rounded-full blur-[100px] pointer-events-none" />

        <h3 className="text-xl md:text-2xl font-mono dark:text-white text-slate-900 mb-10 tracking-widest uppercase flex items-center gap-4">
          <span className="text-[#00ff66] animate-pulse">●</span>
          Drop a message if you vibe
        </h3>

        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          {/* Input Group */}
          <div className="relative group">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 dark:border-white/20 border-black/20 dark:text-white text-slate-900 px-0 py-3 focus:outline-none focus:ring-0 focus:border-[#00ff66] transition-colors peer placeholder-transparent"
            />
            <label className="absolute left-0 -top-3.5 dark:text-gray-500 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#00ff66] peer-focus:text-sm font-mono pointer-events-none">
              NAME_
            </label>
          </div>

          <div className="relative group">
            <input
              type="email"
              required
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 dark:border-white/20 border-black/20 dark:text-white text-slate-900 px-0 py-3 focus:outline-none focus:ring-0 focus:border-[#00ff66] transition-colors peer placeholder-transparent"
            />
            <label className="absolute left-0 -top-3.5 dark:text-gray-500 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#00ff66] peer-focus:text-sm font-mono pointer-events-none">
              EMAIL_
            </label>
          </div>

          <div className="relative group">
            <textarea
              required
              rows={1}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 dark:border-white/20 border-black/20 dark:text-white text-slate-900 px-0 py-3 focus:outline-none focus:ring-0 focus:border-[#00ff66] transition-colors peer placeholder-transparent resize-none overflow-hidden"
            />
            <label className="absolute left-0 -top-3.5 dark:text-gray-500 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#00ff66] peer-focus:text-sm font-mono pointer-events-none">
              MESSAGE_
            </label>
          </div>

          {/* Inline Submission Arrow */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center gap-3 dark:text-gray-400 text-slate-600 hover:text-[#00ff66] transition-colors font-mono tracking-widest text-sm uppercase disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Initialize Contact"}
              <div className="w-10 h-10 rounded-full border dark:border-white/20 border-black/20 flex items-center justify-center group-hover:border-[#00ff66] group-hover:bg-[#00ff66]/10 transition-all">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Success Notification */}
          {isSuccess && (
            <span className="text-[#00FF87] text-sm mt-4 text-right transition-opacity duration-300">
              Your message has been sent.
            </span>
          )}
        </form>
      </div>
    </section>
  );
}
