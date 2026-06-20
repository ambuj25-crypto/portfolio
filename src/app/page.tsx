import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Timeline />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
