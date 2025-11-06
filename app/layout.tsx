import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Cinzel, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Arrsath Sheriff J - Portfolio",
  description: "Cinematic portfolio of Software Developer Arrsath Sheriff J",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${cinzel.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
