import React from 'react'

interface IconProps {
  className?: string
  children: React.ReactNode
}

const Icon = ({ children, className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    {children}
  </svg>
)

export const WalletIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
  </Icon>
)

export const MenuIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </Icon>
)

export const XIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </Icon>
)

export const SparklesIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </Icon>
)

export const SearchIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.3-4.3"/>
  </Icon>
)

export const ShieldIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
  </Icon>
)

export const ChevronDownIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="m6 9 6 6 6-6"/>
  </Icon>
)

export const ArrowRightIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </Icon>
)

export const TrendingUpIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </Icon>
)

export const Building2Icon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
    <path d="M10 6h4"/>
    <path d="M10 10h4"/>
    <path d="M10 14h4"/>
    <path d="M10 18h4"/>
  </Icon>
)

export const LandmarkIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <line x1="3" x2="21" y1="22" y2="22"/>
    <line x1="6" x2="6" y1="18" y2="11"/>
    <line x1="10" x2="10" y1="18" y2="11"/>
    <line x1="14" x2="14" y1="18" y2="11"/>
    <line x1="18" x2="18" y1="18" y2="11"/>
    <polygon points="12 2 20 7 4 7"/>
  </Icon>
)

export const FileTextIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" x2="8" y1="13" y2="13"/>
    <line x1="16" x2="8" y1="17" y2="17"/>
    <line x1="10" x2="8" y1="9" y2="9"/>
  </Icon>
)

export const Share2Icon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
  </Icon>
)

export const UsersIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </Icon>
)

export const CheckCircleIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </Icon>
)

export const ClockIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </Icon>
)

export const RupeeIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M6 3h12"/>
    <path d="M6 8h12"/>
    <path d="m6 13 8.5 8"/>
    <path d="M6 13h3"/>
    <path d="M9 13c6.667 0 6.667-10 0-10"/>
  </Icon>
)

export const CreditCardIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <rect width="20" height="14" x="2" y="5" rx="2"/>
    <line x1="2" x2="22" y1="10" y2="10"/>
  </Icon>
)

export const PieChartIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
    <path d="M22 12A10 10 0 0 0 12 2v10z"/>
  </Icon>
)

export const CoinsIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="8" cy="8" r="6"/>
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>
    <path d="M7 6h1v4"/>
    <path d="m16.71 13.88.7.71-2.82 2.82"/>
  </Icon>
)

export const BanknoteIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <rect width="20" height="12" x="2" y="6" rx="2"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="M6 12h.01M18 12h.01"/>
  </Icon>
)

export const StarIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </Icon>
)

export const ZapIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </Icon>
)

export const LockIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </Icon>
)

export const BarChart3Icon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M3 3v18h18"/>
    <path d="M18 17V9"/>
    <path d="M13 17V5"/>
    <path d="M8 17v-3"/>
  </Icon>
)

export const CircleDollarSignIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
    <path d="M12 18V6"/>
  </Icon>
)

export const FileSearchIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"/>
    <polyline points="14 2 14 8 20 8"/>
    <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    <path d="m9 18-1.5-1.5"/>
  </Icon>
)

export const VaultIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2"/>
    <circle cx="7.5" cy="7.5" r=".5"/>
    <path d="M7.5 7.5 12 12"/>
    <circle cx="16.5" cy="7.5" r=".5"/>
    <path d="m13.5 10.5 3-3"/>
    <circle cx="12" cy="12" r="2"/>
  </Icon>
)

export const ReceiptIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/>
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
    <path d="M12 17.5v-11"/>
  </Icon>
)

export const LayersIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </Icon>
)

export const HeartHandshakeIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>
    <path d="m18 15-2-2"/>
    <path d="m15 18-2-2"/>
  </Icon>
)

export const BriefcaseIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </Icon>
)

export const AlertCircleIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" x2="12" y1="8" y2="12"/>
    <line x1="12" x2="12.01" y1="16" y2="16"/>
  </Icon>
)

