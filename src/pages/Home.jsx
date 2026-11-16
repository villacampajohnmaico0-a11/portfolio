import Contact from '../components/sections/Contact'
import FAQ from '../components/sections/FAQ'
import Hero from '../components/sections/Hero'
import Industries from '../components/sections/Industries'
import Pricing from '../components/sections/Pricing'
import Process from '../components/sections/Process'
import Projects from '../components/sections/Projects'
import Solutions from '../components/sections/Solutions'
import WhyMe from '../components/sections/WhyMe'

export default function Home() {
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
      <Contact />
    </main>
  )
}
