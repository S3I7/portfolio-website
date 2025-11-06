"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.h2
        className="font-playfair text-4xl font-bold gold-glow-text mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        GET IN TOUCH
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-8">Contact Information</h3>

          <div className="space-y-6">
            <motion.a href="tel:+919344665342" className="flex items-center gap-4 group" whileHover={{ x: 10 }}>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-accent font-cinzel">PHONE</p>
                <p className="text-foreground font-playfair">+91 9344665342</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:arrsathsheriffj@gmail.com"
              className="flex items-center gap-4 group"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-accent font-cinzel">EMAIL</p>
                <p className="text-foreground font-playfair">arrsathsheriffj@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/arrsath-sheriff-j"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Linkedin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-accent font-cinzel">LINKEDIN</p>
                <p className="text-foreground font-playfair">Arrsath Sheriff J</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/S3i7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Github className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-accent font-cinzel">GITHUB</p>
                <p className="text-foreground font-playfair">S3i7</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-cinzel text-accent mb-2 tracking-widest">NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-input border border-border rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-cinzel text-accent mb-2 tracking-widest">EMAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-input border border-border rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-cinzel text-accent mb-2 tracking-widest">MESSAGE</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-input border border-border rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Your message"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-primary hover:bg-primary/80 text-white font-cinzel tracking-widest transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            SEND MESSAGE
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  )
}
