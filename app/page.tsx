"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "@/components/hero"
import Summary from "@/components/summary"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import Hobbies from "@/components/hobbies"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"
import CinematicBackground from "@/components/cinematic-background"

export default function Home() {
  const [showVignette, setShowVignette] = useState(true)

  useEffect(() => {
    setShowVignette(true)
  }, [])

  return (
    <div className="cinematic-vignette min-h-screen bg-black overflow-hidden">
      <CinematicBackground />

      <AnimatePresence>
        {showVignette && (
          <motion.div
            className="fixed inset-0 bg-black z-50 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            onAnimationComplete={() => setShowVignette(false)}
          />
        )}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Hero />
        <Summary />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Hobbies />
        <Contact />

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative border-t border-accent/20 bg-black/50 backdrop-blur-md py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-6" />
            <p className="text-center text-muted-foreground text-sm">© 2025 Arrsath Sheriff J. All Rights Reserved.</p>
          </div>
        </motion.footer>
      </motion.main>

      <ScrollToTop />
    </div>
  )
}
