'use client'

import { useState } from 'react'
import { ChevronDownIcon } from './icons'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const faqs = [
    {
      question: 'What is financial asset recovery / unclaimed money recovery?',
      answer: "Financial asset recovery helps you discover and claim money or investments that may exist in your name but aren't currently tracked—often due to old details, mandate issues, or legacy records."
    },
    {
      question: 'How can I search for unclaimed shares in India?',
      answer: (
        <>
          Start an <strong>unclaimed shares search</strong> with basic details. Match quality improves with identifiers like <strong>folio number</strong>, <strong>DP ID/Client ID</strong>, PAN, or old addresses.
        </>
      )
    },
    {
      question: 'How do I check unclaimed dividend / unpaid dividend (dividend not received)?',
      answer: 'Many "dividend not received" cases happen due to bank mandate or KYC mismatch. A discovery report helps identify probable unpaid/unclaimed dividends and what to fix.'
    },
    {
      question: 'What is IEPF search and why does it matter?',
      answer: (
        <>
          People do an <strong>IEPF search</strong> when they suspect old shares/dividends may be IEPF-linked over time. Envest includes IEPF discovery as part of the same unified search.
        </>
      )
    },
    {
      question: 'What is Form IEPF-5?',
      answer: (
        <>
          Form <strong>IEPF-5</strong> is commonly referenced in the IEPF claim process for recovering certain shares/dividends that appear IEPF-linked, along with documentation and verification.
        </>
      )
    },
    {
      question: 'How do I track IEPF claim status / SRN status?',
      answer: 'Claim progress is commonly tracked using the acknowledgement reference (often called SRN). Status stages typically relate to verification and processing.'
    },
    {
      question: 'Can I find dormant bank accounts or unclaimed deposits/FDs?',
      answer: "Yes—dormant accounts, old deposits and matured FDs are common. The key is to identify likely accounts and follow the bank's reactivation/claim checklist."
    },
    {
      question: 'How do I search for forgotten mutual fund investments?',
      answer: 'Older mutual fund investments may exist across multiple folios. Searching with name + identifiers improves accuracy and helps unify folios.'
    },
    {
      question: 'Can this include EPF/PF and PPF?',
      answer: 'Yes—EPF/PF and PPF can become difficult to track after job changes or detail mismatches. We guide what to verify next (like UAN/KYC alignment) and the typical next steps.'
    },
    {
      question: 'Can I search for unclaimed insurance policies or benefits?',
      answer: "Yes—insurance recoveries are common when paperwork is missing or nominees aren't aware. We highlight what to look for and the documentation checklist."
    },
    {
      question: 'Can you guarantee recovery?',
      answer: "No. Envest helps with discovery and guidance. Final outcomes depend on verification and the underlying institution's process."
    },
    {
      question: 'Is my information safe?',
      answer: 'We keep the experience privacy-first and use your details only to run the search and generate your report.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative overflow-hidden grid-pattern">
      {/* Background Blobs */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation"></div>
      <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-indigo-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 right-0 w-[250px] h-[250px] bg-purple-100 rounded-full mix-blend-multiply blur-[100px] opacity-50"></div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500">
            Common questions about financial asset recovery
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {(showAll ? faqs : faqs.slice(0, 5)).map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-slate-600 leading-relaxed [&_strong]:text-slate-900 [&_strong]:font-semibold">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {faqs.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setShowAll(!showAll)
                if (showAll) setOpenIndex(null)
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-semibold shadow-sm border border-slate-200 transition-all"
            >
              {showAll ? 'Show less' : `Show more`}
              <ChevronDownIcon 
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

