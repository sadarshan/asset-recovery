'use client'

import { TrendingUpIcon, LandmarkIcon, PieChartIcon, ShieldIcon } from './icons'

export default function StatsSection() {
  const stats = [
    { value: '₹1.5L Cr+', label: 'Unclaimed Shares', Icon: TrendingUpIcon },
    { value: '₹50,000 Cr+', label: 'Dormant Bank Deposits', Icon: LandmarkIcon },
    { value: '₹25,000 Cr+', label: 'Forgotten Mutual Funds', Icon: PieChartIcon },
    { value: '₹20,000 Cr+', label: 'Unclaimed Insurance', Icon: ShieldIcon }
  ]

  return (
    <section className="py-20 relative overflow-hidden grid-pattern">
      {/* Background Blobs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-100 rounded-full mix-blend-multiply blur-[100px] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            The Forgotten Wealth of India
          </h2>
          <p className="text-lg text-slate-500">
            Billions lying unclaimed across financial institutions — is some of it yours?
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                <stat.Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

