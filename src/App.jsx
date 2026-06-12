import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Stack from './components/Stack'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'

// Sections are wired in step-by-step. Placeholders keep the dev server runnable
// until each real section component lands.
export default function App() {
  useEffect(() => {
    // reference: AOS.init({ disable: window.innerWidth < 768 })
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      disable: window.innerWidth < 768,
    })
  }, [])

  return (
    <>
      <CustomCursor enabled={true} />
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Stack />
        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
