import Image from "next/image";
import {Hero} from "./hero/page"
import { About } from "./about/page";
import { Projects } from "./projects/page";
import { Experience } from "./experience/page";
import { Footer } from "./footer/page";
import {Skills} from "./skills/page";
import { Navigation } from "./navigation/page";

export default function Home() {
  return (
    <div className="min-h-screen justify-center align-center">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}
