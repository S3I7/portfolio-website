"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const educationData = [
  {
    school: "KCG College of Technology",
    degree: "B.E. Computer Science & Engineering",
    year: "2022 - 2026",
    gpa: "7.54 / 10",
  },
  {
    school: "KCS Higher Secondary School",
    degree: "12th Grade",
    year: "2022",
    gpa: "82%",
  },
]

export default function Education() {
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
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.h2
        className="font-playfair text-4xl font-bold gold-glow-text mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        EDUCATION
      </motion.h2>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glassmorphic rounded-lg p-8 border-l-4 border-accent"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">{edu.school}</h3>
                <p className="text-accent font-cinzel text-sm mb-1 tracking-widest">{edu.degree}</p>
                <p className="text-muted-foreground text-sm">{edu.year}</p>
              </div>
              <div className="text-right">
                <p className="text-accent font-playfair text-3xl font-bold">{edu.gpa}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
