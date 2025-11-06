"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillCategories = [
  {
    category: "Languages",
    skills: ["C", "Java", "Python"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Redux"],
  },
  {
    category: "Backend",
    skills: ["Flask", "Firebase", "MySQL"],
  },
  {
    category: "Tools & Concepts",
    skills: ["Git", "GitHub", "DSA", "OOP", "OS", "CN", "DBMS"],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
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
        TECHNICAL SKILLS
      </motion.h2>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glassmorphic rounded-lg p-6 hover:border-accent/30 transition-all duration-300"
            style={{ border: "1px solid rgba(212, 175, 55, 0.1)" }}
          >
            <h3 className="font-playfair text-xl font-bold text-accent mb-4">{cat.category}</h3>
            <div className="space-y-2">
              {cat.skills.map((skill, sidx) => (
                <motion.p
                  key={sidx}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  • {skill}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
