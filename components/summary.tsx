"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Summary() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        className="glassmorphic rounded-lg p-8 sm:p-12 glow-box"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="font-playfair text-3xl sm:text-4xl font-bold gold-glow-text mb-6">
          About
        </motion.h2>

        <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed mb-6">
          Motivated Computer Science and Engineering student at KCG College of Technology with a strong interest in
          software development. Skilled in C, Java, and Python with a good understanding of data structures, algorithms,
          and problem-solving. Looking forward to using my skills to build practical and innovative software solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-accent/20"
        >
          <div>
            <p className="text-accent font-cinzel text-sm">CGPA</p>
            <p className="text-2xl font-playfair font-bold text-foreground">7.54/10</p>
          </div>
          <div>
            <p className="text-accent font-cinzel text-sm">PROJECTS</p>
            <p className="text-2xl font-playfair font-bold text-foreground">5+</p>
          </div>
          <div>
            <p className="text-accent font-cinzel text-sm">DSA</p>
            <p className="text-2xl font-playfair font-bold text-foreground">150+</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
