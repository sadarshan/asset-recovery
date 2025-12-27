'use client'

import { ArrowRightIcon, ShieldIcon, CheckCircleIcon, LayersIcon } from './icons'

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden grid-pattern">
      {/* Background Blobs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation"></div>
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-indigo-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-purple-100 rounded-full mix-blend-multiply blur-[100px] opacity-50"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Start your financial asset<br />
          <span className="gradient-text">recovery search.</span>
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Run one search across <strong className="text-slate-900">unclaimed shares</strong>, <strong className="text-slate-900">unpaid/unclaimed dividends</strong>, <strong className="text-slate-900">IEPF</strong>, <strong className="text-slate-900">bank accounts</strong>, <strong className="text-slate-900">deposits/FDs</strong>, <strong className="text-slate-900">mutual funds</strong>, <strong className="text-slate-900">EPF/PPF</strong>, and <strong className="text-slate-900">insurance</strong>—then follow a clear checklist for the next step.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#search" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group">
            Start Free Search
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-lg transition-all shadow-lg border border-slate-200">
            Talk to an Expert
          </button>
        </div>
        
        {/* Trust chips */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
            <ShieldIcon className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Secure search</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
            <CheckCircleIcon className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-slate-700">Clear next steps</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
            <LayersIcon className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-slate-700">Search across asset types</span>
          </div>
        </div>
      </div>
    </section>
  )
}

