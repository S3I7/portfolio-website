"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Project {
  id: number
  title: string
  role: string
  period: string
  description: string
  tech: string[]
  highlights: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="glassmorphic rounded-lg p-8 h-full cursor-pointer"
        animate={{
          borderColor: isHovered ? "rgba(212, 175, 55, 0.4)" : "rgba(212, 175, 55, 0.1)",
          boxShadow: isHovered
            ? "0 0 40px rgba(212, 175, 55, 0.3), inset 0 0 20px rgba(212, 175, 55, 0.05)"
            : "0 0 20px rgba(212, 175, 55, 0.1)",
        }}
        transition={{ duration: 0.3 }}
        style={{ border: "1px solid" }}
      >
        <motion.div initial={{ z: 0 }} animate={{ z: isHovered ? 10 : 0 }} transition={{ duration: 0.3 }}>
          <p className="text-accent text-xs font-cinzel tracking-widest mb-2">{project.period}</p>

          <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">{project.title}</h3>

          <p className="text-primary font-cinzel text-sm mb-4">{project.role}</p>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="text-xs px-3 py-1 border border-accent/30 text-accent/70 rounded">
                {tech}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-accent/20">
              <p className="text-xs font-cinzel text-accent mb-3 tracking-widest">KEY ACHIEVEMENTS</p>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-accent mr-2">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
