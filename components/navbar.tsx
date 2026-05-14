"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-purple-500/10 transition-all duration-300 ${
        isScrolled ? "bg-[#06020d]/90 shadow-[0_0_25px_rgba(168,85,247,.12)] backdrop-blur-md" : "bg-[#06020d]/40 backdrop-blur"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="#home" className="text-xl font-black tracking-tight text-white">
            NORAH<span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">.DEV</span>
          </Link>

          <div className="hidden items-center space-x-3 md:flex">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="px-2 py-2 text-sm font-medium text-gray-200 hover:text-purple-200">
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-500">
              <Link href="/documents/norah-aljandol-cv.pdf" target="_blank" download>Download CV</Link>
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="md:hidden bg-[#06020d] border-t border-purple-500/20" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="block rounded-md px-3 py-2 text-white hover:bg-purple-500/20" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
