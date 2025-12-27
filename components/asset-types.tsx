'use client'

import { BarChart3Icon, CircleDollarSignIcon, FileSearchIcon, LandmarkIcon, LayersIcon, HeartHandshakeIcon, BriefcaseIcon } from './icons'

interface AssetCardProps {
  title: string
  description: string
  Icon: React.ComponentType<{ className?: string }>
  color: string
  priority?: boolean
}

const colorStyles: Record<string, { bg: string; iconBg: string; iconText: string; border: string; accent: string }> = {
  blue: {
    bg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    iconBg: 'bg-blue-600',
    iconText: 'text-white',
    border: 'border-blue-100',
    accent: 'text-blue-600'
  },
  amber: {
    bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
    iconBg: 'bg-amber-500',
    iconText: 'text-white',
    border: 'border-amber-100',
    accent: 'text-amber-600'
  },
  emerald: {
    bg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    iconBg: 'bg-emerald-600',
    iconText: 'text-white',
    border: 'border-emerald-100',
    accent: 'text-emerald-600'
  },
  purple: {
    bg: 'bg-gradient-to-br from-purple-50 to-fuchsia-50',
    iconBg: 'bg-purple-600',
    iconText: 'text-white',
    border: 'border-purple-100',
    accent: 'text-purple-600'
  },
  rose: {
    bg: 'bg-gradient-to-br from-rose-50 to-pink-50',
    iconBg: 'bg-rose-500',
    iconText: 'text-white',
    border: 'border-rose-100',
    accent: 'text-rose-600'
  },
  cyan: {
    bg: 'bg-gradient-to-br from-cyan-50 to-sky-50',
    iconBg: 'bg-cyan-600',
    iconText: 'text-white',
    border: 'border-cyan-100',
    accent: 'text-cyan-600'
  },
  indigo: {
    bg: 'bg-gradient-to-br from-indigo-50 to-violet-50',
    iconBg: 'bg-indigo-600',
    iconText: 'text-white',
    border: 'border-indigo-100',
    accent: 'text-indigo-600'
  },
  teal: {
    bg: 'bg-gradient-to-br from-teal-50 to-emerald-50',
    iconBg: 'bg-teal-600',
    iconText: 'text-white',
    border: 'border-teal-100',
    accent: 'text-teal-600'
  }
}

const AssetCard = ({ title, description, Icon, color, priority = false }: AssetCardProps) => {
  const styles = colorStyles[color] || colorStyles.blue

  return (
    <div 
      className={`group relative ${styles.bg} ${priority ? 'rounded-3xl p-6 sm:p-8' : 'rounded-2xl p-5 sm:p-6'} border ${styles.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden`}
    >
      {/* Decorative corner accent for priority cards */}
      {priority && (
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <div className={`absolute top-4 right-4 w-16 h-16 ${styles.iconBg} rounded-full blur-2xl`}></div>
        </div>
      )}

      <div className="relative z-10">
        <div className={`${priority ? 'w-14 h-14' : 'w-12 h-12'} ${styles.iconBg} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
          <Icon className={`${priority ? 'w-7 h-7' : 'w-6 h-6'} ${styles.iconText}`} />
        </div>

        <h3 className={`${priority ? 'text-xl sm:text-2xl' : 'text-lg'} font-bold text-slate-900 mb-2 group-hover:${styles.accent} transition-colors`}>
          {title}
        </h3>

        <p className={`${priority ? 'text-base' : 'text-sm'} text-slate-600 leading-relaxed`}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default function AssetTypesSection() {
  const priorityAssets = [
    {
      title: 'Unclaimed Shares',
      subtitle: 'Folio, demat & legacy holdings',
      description: 'Search for forgotten shareholdings across old folios, demat transitions, and legacy records. Perfect for people who held shares years ago or inherited investments.',
      Icon: BarChart3Icon,
      color: 'blue'
    },
    {
      title: 'Unclaimed Dividend',
      subtitle: 'Dividend not received',
      description: 'Identify likely unpaid or unclaimed dividends and common reasons (bank mandate issues, KYC mismatch, address mismatch, ECS/NEFT failures).',
      Icon: CircleDollarSignIcon,
      color: 'amber'
    },
    {
      title: 'IEPF Search',
      subtitle: 'IEPF-5',
      description: 'If a holding appears IEPF-linked, we highlight the likely recovery path: IEPF discovery, Form IEPF-5, and guidance for IEPF claim status / SRN status tracking.',
      Icon: FileSearchIcon,
      color: 'emerald'
    }
  ]

  const otherAssets = [
    {
      title: 'Bank Accounts & FDs',
      description: 'Discover dormant accounts, old deposits, matured FDs, and forgotten term deposits. Get guidance on reactivation and claims.',
      Icon: LandmarkIcon,
      color: 'purple'
    },
    {
      title: 'Forgotten Mutual Funds',
      description: 'Locate older mutual fund folios and lost SIP/lumpsum investments from the CAMS/KFintech era.',
      Icon: LayersIcon,
      color: 'cyan'
    },
    {
      title: 'Unclaimed Insurance',
      description: 'Identify possible unclaimed insurance benefits including maturity and death benefits with a checklist to proceed.',
      Icon: HeartHandshakeIcon,
      color: 'indigo'
    },
    {
      title: 'EPF/PF and PPF',
      description: 'Surface signals for older EPF/PF or PPF accounts and get step-by-step next actions for claiming unclaimed balances.',
      Icon: BriefcaseIcon,
      color: 'teal'
    }
  ]

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden grid-pattern">
      {/* Background Blobs */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-indigo-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation"></div>
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-purple-100 rounded-full mix-blend-multiply blur-[100px] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            What you can recover with <span className="gradient-text">Envest</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Unclaimed wealth isn&apos;t &ldquo;gone&rdquo; — it&apos;s often stuck due to outdated details or scattered records.
            Envest helps with <strong className="text-slate-900">financial asset recovery</strong> across shares, dividends, bank accounts, deposits/FDs, mutual funds, EPF/PPF and insurance.
          </p>
        </div>

        {/* Priority Cards - Top Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {priorityAssets.map((asset, index) => (
            <AssetCard
              key={index}
              title={asset.title}
              description={asset.description}
              Icon={asset.Icon}
              color={asset.color}
              priority={true}
            />
          ))}
        </div>

        {/* Other Assets - Second Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherAssets.map((asset, index) => (
            <AssetCard
              key={index}
              title={asset.title}
              description={asset.description}
              Icon={asset.Icon}
              color={asset.color}
              priority={false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

