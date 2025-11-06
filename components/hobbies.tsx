"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const hobbies = [
  {
    title: "Motion Graphics & Video Editing",
    description: "Creating cinematic visuals and animations with After Effects",
    icon: "🎬",
  },
  {
    title: "Strategy & Story-Based Games",
    description: "Exploring complex narratives and strategic gameplay mechanics",
    icon: "🎮",
  },
]

export default function Hobbies() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
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
        INTERESTS & HOBBIES
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {hobbies.map((hobby, idx) => (
          <motion.div
            key={idx}
            ref={ref}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glassmorphic rounded-lg p-8 hover:border-accent/30 transition-all duration-300 group cursor-pointer"
            style={{ border: "1px solid rgba(212, 175, 55, 0.1)" }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="text-5xl mb-4 inline-block"
            >
              {hobby.icon}
            </motion.div>

            <h3 className="font-playfair text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
              {hobby.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{hobby.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
