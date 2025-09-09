import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed w-full z-40 bg-transparent top-0 left-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-400 flex items-center justify-center text-white font-bold">L9</div>
            <div className="font-semibold">Leo9 Studio</div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-indigo-600">Home</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#work" className="hover:text-indigo-600">Work</a>
            <button className="px-4 py-2 border rounded-md">Contact</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(v => !v)} className="p-2 border rounded-md">
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white w-full border-t"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#" className="block">Home</a>
              <a href="#services" className="block">Services</a>
              <a href="#work" className="block">Work</a>
              <a href="#contact" className="block">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}