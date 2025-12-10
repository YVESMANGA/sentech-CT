import About from "@/components/About";
import Chiffre from "@/components/Chiffre";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Chiffre />
      <Services />
      <Teams />
      <Contact />
    </div>
  );
}
