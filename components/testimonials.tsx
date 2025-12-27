'use client'

import { StarIcon, UsersIcon } from './icons'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Startup Founder, Bangalore',
      content: 'I had forgotten about shares from a company I worked at 15 years ago. WealthTrace helped me recover ₹18 lakhs! The process was seamless.',
      avatar: 'RK'
    },
    {
      name: 'Priya Sharma',
      role: 'IT Professional, Mumbai',
      content: 'Found 3 dormant mutual fund accounts I had completely forgotten about. The team guided me through every step of the recovery process.',
      avatar: 'PS'
    },
    {
      name: 'Amit Patel',
      role: 'Business Owner, Delhi',
      content: 'My father passed away and we had no idea about his investments. WealthTrace found ₹45 lakhs in unclaimed shares and FDs.',
      avatar: 'AP'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden grid-pattern">
      {/* Background Blobs */}
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation"></div>
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply blur-[120px] opacity-60 pulse-animation" style={{animationDelay: '2s'}}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full text-green-600 text-sm font-semibold mb-4">
            <UsersIcon className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-slate-500">
            Join thousands who&apos;ve recovered their forgotten wealth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

