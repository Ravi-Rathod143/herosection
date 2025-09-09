import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <section id="services" className="max-w-6xl mx-auto px-6 py-20">
          <h3 className="text-2xl font-semibold mb-6">Services (Bonus)</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">Design</div>
            <div className="p-6 border rounded-lg">Branding</div>
            <div className="p-6 border rounded-lg">Development</div>
          </div>
        </section>
        <section id="work" className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h3 className="text-2xl font-semibold mb-6">Selected Work (Bonus)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="h-40 rounded-lg bg-white shadow-sm" />
              <div className="h-40 rounded-lg bg-white shadow-sm" />
              <div className="h-40 rounded-lg bg-white shadow-sm" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}