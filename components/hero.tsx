"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("")
  const name = "Arrsath Sheriff J"
  const [nameComplete, setNameComplete] = useState(false)

  useEffect(() => {
    if (displayedName.length < name.length) {
      const timer = setTimeout(() => {
        setDisplayedName(name.slice(0, displayedName.length + 1))
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setNameComplete(true)
    }
  }, [displayedName])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Name */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">
            <span className="gold-glow-text">{displayedName}</span>
            {!nameComplete && <span className="animate-pulse">|</span>}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="font-cinzel text-lg sm:text-xl text-accent mb-6 tracking-widest">
          COMPUTER SCIENCE & ENGINEERING STUDENT
        </motion.p>

        {/* Subtitle 2 */}
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-accent mb-8 font-light tracking-wide">
          Software Developer | Problem Solver
        </motion.p>

        {/* Introduction Text */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          I'm passionate about crafting secure, efficient, and innovative software solutions. Specializing in full-stack
          development with expertise in React, Python, and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-cinzel tracking-widest text-sm"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-primary hover:bg-primary/80 text-white transition-all duration-300 font-cinzel tracking-widest text-sm border-2 border-primary"
          >
            CONTACT ME
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="w-6 h-6 text-accent" />
      </motion.div>
    </section>
  )
}
