"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import Authority from "@/components/Authority";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Preloader from "@/components/Preloader";
import PageSpeed from "@/components/PageSpeed";

export default function HomeClient() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />

      <Header />

      <main>
        <Hero animate={preloaderDone} />
        <Stats />
        <PageSpeed />
        <Benefits />
        <Process />
        <Services />
        <FAQ />
        <WhyChoose />
        <Authority />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
