import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <header className="pt-28 gradient-hero">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Beautifully crafted digital products
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-6 text-lg text-slate-600 max-w-xl"
            >
              We design and build web experiences that help brands grow. Design systems, UI/UX and frontend engineering.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-8 flex gap-4"
            >
              <a href="#" className="inline-block px-6 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:opacity-95">Get in touch</a>
              <a href="#work" className="inline-block px-6 py-3 rounded-md border">Our Work</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="relative"
          >
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-50 to-white shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="h-40 rounded-md bg-white/60 backdrop-blur flex items-center justify-center text-slate-700">Project Visual</div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="h-24 rounded bg-white/40" />
                  <div className="h-24 rounded bg-white/40" />
                </div>
              </div>
            </div>
            <div className="absolute -left-8 -bottom-8 w-44 h-44 rounded-full opacity-40 blur-3xl bg-gradient-to-br from-purple-400 to-pink-400" />
            <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full opacity-30 blur-2xl bg-gradient-to-br from-sky-300 to-blue-300" />
          </motion.div>
        </div>
      </div>
    </header>
  )
}