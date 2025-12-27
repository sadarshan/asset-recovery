'use client'

import { AlertCircleIcon, LandmarkIcon, LayersIcon, HeartHandshakeIcon, BriefcaseIcon } from './icons'

export default function KnowledgeBase() {
  const reasons = [
    'Bank account changed / closed (NEFT/ECS failures)',
    'Address mismatch or old KYC details',
    'Multiple folios across time / different spellings of the same name',
    'Joint holder issues (order of names, initials, signature mismatch)',
    'Demat mapping issues after broker/DP change',
    'Old physical shares / paper-era certificates not updated'
  ]

  return (
    <section id="resources" className="py-20 relative overflow-hidden grid-pattern">
      {/* Background Blobs */}
      <div className="absolute top-20 left-1/3 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation"></div>
      <div className="absolute bottom-20 right-1/3 w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 left-0 w-[250px] h-[250px] bg-indigo-100 rounded-full mix-blend-multiply blur-[100px] opacity-50"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            Unclaimed shares &amp; dividend not received — common reasons
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Most &ldquo;<strong className="text-slate-900">dividend not received</strong>&rdquo; and &ldquo;<strong className="text-slate-900">unclaimed shares</strong>&rdquo; cases happen due to outdated records—not because the money isn&apos;t there.
          </p>
        </div>

        {/* Reasons Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <AlertCircleIcon className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Common reasons (shares + dividends)</h3>
          </div>

          <ul className="space-y-4 mb-8">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-slate-700 leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>

          {/* Closing line */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <p className="text-slate-600 leading-relaxed">
              If dividends remain unpaid/unclaimed for years, holdings can become harder to track. That&apos;s why discovery should cover <strong className="text-slate-900">company/RTA + IEPF search</strong> angles together.
            </p>
          </div>
        </div>

        {/* Other Unclaimed Assets Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Where else unclaimed money is found
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Bank accounts & deposits */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <LandmarkIcon className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Bank accounts &amp; deposits</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Dormant or inactive accounts can happen when accounts aren&apos;t used for long periods or contact details change. Deposits and FDs are often forgotten after job changes, relocations, or older family investments.
              </p>
            </div>

            {/* Mutual funds */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <LayersIcon className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Mutual funds</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                People commonly lose track of older folios due to changed addresses, multiple distributors, or switching phones/emails over time. Searching by name + identifiers helps unify folios.
              </p>
            </div>

            {/* Insurance */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <HeartHandshakeIcon className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Insurance</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Unclaimed insurance is common when policies were purchased decades ago or nominees/heirs don&apos;t have the policy paperwork.
              </p>
            </div>

            {/* EPF / PF and PPF */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                  <BriefcaseIcon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">EPF / PF and PPF</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                EPF/PF and PPF can become &ldquo;forgotten&rdquo; when jobs change, details are mismatched, or documentation is missing. A discovery flow helps you identify what to verify next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
