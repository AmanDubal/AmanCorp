import { useState } from 'react'
import { ArrowUpRight, Award, Crown, X } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4'

const NAV_LINKS = ['Projects', 'Studio', 'Offerings', 'Inquire']

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ── Background Video ── */}
      <video
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── Dark Overlay ── */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-col h-full">

        {/* ── Navbar ── */}
        <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
          {/* Brand */}
          <span className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">
            AmanCorp
          </span>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <a
            href="#"
            className="hidden md:flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/10 px-6 py-3 text-xs text-white tracking-widest uppercase transition-all duration-200"
          >
            GET IN TOUCH
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-4 h-0.5 bg-white" />
          </button>
        </nav>

        {/* ── Hero Content ── */}
        <div className="flex-1 flex items-center px-6 sm:px-10 lg:px-16 pb-10">
          <div className="w-full max-w-5xl">

            {/* Tagline */}
            <div className="flex items-center gap-2 mb-6 lg:mb-8 animate-fade-up">
              <Crown className="w-4 h-4 text-white/70 flex-shrink-0" />
              <span className="font-inter text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
                AI/ML • Data Science • DevOps
              </span>
            </div>

            {/* Main Heading */}
            <div className="animate-fade-up-delay-1">
              <h1
                className="font-podium text-white uppercase leading-[0.92] tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
              >
                Design.<br />
                Build<br />
                Deploy.
              </h1>
            </div>

            {/* Subtext */}
            <div className="mt-6 lg:mt-8 animate-fade-up-delay-2">
              <p className="font-inter text-white/70 text-sm sm:text-base leading-relaxed max-w-md">
                AI/ML & DevOps-focused Computer Science student from Mumbai, building local AI systems, multi-agent applications, data-driven dashboards, and full-stack products using Python, FastAPI, React.js, Streamlit, TensorFlow, PyTorch, and modern APIs. —{' '}
                <span className="text-white font-semibold">they lead.</span>
              </p>
            </div>

            {/* CTA Row */}
            <div className="mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-up-delay-3">
              {/* Primary CTA */}
              <a
                href="#"
                className="group flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase transition-colors duration-200"
              >
                SEE My Work
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>

              {/* Award Badge — hidden on mobile */}
              <div className="hidden sm:flex items-center gap-3">
                <Award className="w-8 h-8 text-white/50 flex-shrink-0" />
                <div>
                  <p className="font-inter text-white/60 text-xs tracking-wider uppercase"></p>
                  <p className="font-inter text-white/60 text-xs tracking-wider uppercase"></p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16 animate-fade-up-delay-4">
              {[
                { value: '250+', label: 'Brands Transformed' },
                { value: '95%', label: 'Client Retention' },
                { value: '10+', label: 'Years in the Game' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="font-inter text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full px-6 sm:px-10 py-5">
          {/* Overlay Header */}
          <div className="flex items-center justify-between">
            <span className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">
              VANGUARD
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-white/70 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Centered Nav Links */}
          <div className="flex-1 flex flex-col items-start justify-center gap-4 sm:gap-6">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl sm:text-5xl text-white uppercase transition-all duration-500"
                style={{
                  transitionDelay: `${i * 80 + 100}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {link}
              </a>
            ))}

            {/* GET IN TOUCH in mobile menu */}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/10 px-6 py-3 text-xs text-white tracking-widest uppercase transition-all duration-300"
              style={{
                transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              GET IN TOUCH
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
