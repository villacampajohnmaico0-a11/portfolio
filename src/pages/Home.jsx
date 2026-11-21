import Contact from "../components/sections/Contact";
import { useSearchParams } from "react-router-dom";
import FAQ from "../components/sections/FAQ";
import Hero from "../components/sections/Hero";
import Industries from "../components/sections/Industries";
import Pricing from "../components/sections/Pricing";
import Process from "../components/sections/Process";
import Projects from "../components/sections/Projects";
import Solutions from "../components/sections/Solutions";
import WhyMe from "../components/sections/WhyMe";

export default function Home() {
  const [searchParams] = useSearchParams();

  return (
    <main>
      <Hero />
      <Solutions />
      <Industries />
      <Projects />
      <WhyMe />
      <Process />
      <Pricing />
      <FAQ />
      <Contact key={searchParams.get("projectType") || ""} />
    </main>
  );
}
