import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats"
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import Authority from "@/components/Authority";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Stats />
        <Benefits />
        <Process />
        <WhyChoose />
        <Authority />
        <Contact />
      </main>

      <Footer />
    </>
  );
}