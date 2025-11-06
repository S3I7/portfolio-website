"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ProjectCard from "./project-card"

const projects = [
  {
    id: 1,
    title: "RepuNEXT - Health Bridge Project",
    role: "Frontend Developer Intern",
    period: "June - July 2025",
    description: "Built responsive React.js interfaces with role-based routing and API integration",
    tech: ["React.js", "Redux Toolkit", "Axios", "CSS", "GitHub"],
    highlights: ["Responsive UI", "API Integration", "Lazy Loading", "Role-based Routing"],
  },
  {
    id: 2,
    title: "AI-Powered Emotion Tracking System",
    role: "Backend Developer",
    period: "INNOTHON'24 - Top 5",
    description: "Developed Flask APIs integrated with React+Redux for real-time emotion detection",
    tech: ["React.js", "Redux", "Tailwind", "Flask", "MongoDB", "Gemini AI"],
    highlights: ["AI Integration", "Real-time Detection", "Full Stack", "Hackathon Winner"],
  },
]

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.h2
        className="font-playfair text-4xl font-bold gold-glow-text mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        EXPERIENCE & PROJECTS
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
