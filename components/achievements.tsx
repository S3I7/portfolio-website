"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const achievements = [
  {
    title: "150+ DSA Problems Solved",
    description: "Mastered data structures and algorithms through consistent practice in Java",
    icon: "💻",
  },
  {
    title: "Top 5 - INNOTHON'24 Hackfest",
    description: "AI-Powered Emotion Tracking System recognized for innovation and implementation",
    icon: "🏆",
  },
]

export default function Achievements() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
        ACHIEVEMENTS
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glassmorphic rounded-lg p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
