"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import SpaShowcase from "@/components/SpaShowcase";
import Quiz from "@/components/Quiz";
import WhyChoose from "@/components/WhyChoose";
import Authority from "@/components/Authority";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Sobre from "@/components/Sobre";
import FAQ from "@/components/FAQ";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomeClient() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Stats />
        <Benefits />
        <Process />
        <SectionDivider />
        <Cases />
        <SpaShowcase />
        <Services />
        <Quiz />
        <SectionDivider />
        <Sobre />
        <FAQ />
        <WhyChoose />
        <Authority />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
