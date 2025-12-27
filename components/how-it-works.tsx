'use client'

import { UsersIcon, SearchIcon, FileTextIcon, CheckCircleIcon } from './icons'

export default function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: 'Enter basic details',
      description: 'Start with your name and contact details. Add PAN/UAN/folio/policy identifiers later if you have them.',
      icon: UsersIcon,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      step: 2,
      title: 'We run a consolidated search',
      description: (
        <>
          Unified scan across <strong>unclaimed shares</strong>, <strong>dividends</strong>, <strong>IEPF</strong>, <strong>bank accounts</strong>, <strong>FDs</strong>, <strong>mutual funds</strong>, <strong>EPF/PPF</strong>, and <strong>insurance</strong>.
        </>
      ),
      icon: SearchIcon,
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      step: 3,
      title: 'Get one consolidated report',
      description: 'Single report showing matches, confidence level, and likely category (shares/IEPF vs bank vs MF vs EPF vs insurance).',
      icon: FileTextIcon,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      step: 4,
      title: 'Recover with the right checklist',
      description: (
        <>
          Practical checklist: what to verify, documents needed, and claim steps—especially for <strong>IEPF-5 claims</strong>.
        </>
      ),
      icon: CheckCircleIcon,
      gradient: 'from-emerald-500 to-teal-600'
    }
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-20 relative overflow-hidden grid-pattern">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation"></div>
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation" style={{animationDelay: '1s'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3">
            How it works
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            Four simple steps to recover your forgotten wealth
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0"></div>
              )}

              <div className="relative bg-white rounded-2xl p-5 h-full shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Step number badge */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="text-white font-bold">{item.step}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed [&_strong]:text-slate-900 [&_strong]:font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
