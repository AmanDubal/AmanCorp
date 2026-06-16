import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight, Award, Crown, X, ExternalLink, Mail, Phone, Link2, GitFork } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

const SKILLS = [
  {
    title: 'Front-End',
    chips: ['HTML5', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    title: 'Back-End',
    chips: ['Python', 'Node.js', 'FastAPI', 'Streamlit'],
  },
  {
    title: 'Databases',
    chips: ['MongoDB', 'MySQL', 'SQLite', 'DBMS'],
  },
  {
    title: 'AI / ML / Data',
    chips: ['Machine Learning', 'Data Analysis', 'AI Agents', 'NLP', 'MFCC'],
  },
  {
    title: 'Frameworks / Libraries',
    chips: ['Bootstrap', 'Django', 'Hugging Face', 'PyTorch', 'TensorFlow'],
  },
  {
    title: 'APIs & Product Building',
    chips: ['REST APIs', 'OpenAI API', 'Google Maps API', 'TMDB API', 'Website Dev'],
  },
]

const PROJECTS = [
  {
    number: '01',
    title: 'ALM — Audio Language Model',
    description:
      'A fully local AI-based audio analysis system handling speech recognition, sound detection, emotion analysis, and LLM-based reasoning to generate structured scene reports with risk and activity detection.',
    metrics: ['Offline Processing', 'Privacy Focused', '~85% Improvement'],
    detail:
      'Improves audio scene understanding and emergency identification while keeping all processing offline for better privacy and security.',
    tech: ['Python', 'Streamlit', 'OpenAI Whisper', 'TensorFlow', 'YAMNet', 'Librosa', 'Ollama', 'MFCC', 'NLP'],
    repo: '#',
  },
  {
    number: '02',
    title: 'Smart Movie Discovery & Ticket Comparison AI Agent',
    description:
      'A multi-agent AI system that finds nearby theatres, checks running movies, compares ticket prices, and suggests the best option based on price, timing, and user preference.',
    metrics: ['Multi-Agent AI', '80–90% Faster Search', 'Personalized Suggestions'],
    detail:
      'Reduces manual search effort and makes movie booking faster, smarter, and more personalized through API-powered automation.',
    tech: ['Python', 'FastAPI', 'React.js', 'Tailwind CSS', 'OpenAI API', 'Google Maps API', 'TMDB API', 'SQLite', 'REST APIs'],
    repo: '#',
  },
]

const TIMELINE = [
  {
    date: '2023 – 2026',
    title: 'Bachelor of Science in Computer Science',
    desc: 'Sheth L.U.J. & Sir M.V. College of Science & Commerce, Mumbai, India.',
  },
  {
    date: 'AI/ML Focus',
    title: 'Machine Learning, Data Analysis & AI Agents',
    desc: 'Building applied projects around local AI, audio intelligence, LLM reasoning, multi-agent systems, data workflows, APIs, and practical automation.',
  },
  {
    date: 'Product Focus',
    title: 'Full-Stack AI Product Development',
    desc: 'Combining Python, FastAPI, Streamlit, React.js, databases, and external APIs to create complete user-facing AI applications.',
  },
]

const CERTS = [
  { title: 'Machine Learning Level 1 & Level 2', grade: 'Grade A' },
  { title: 'Data Visualization', grade: 'Grade A' },
  { title: 'Python Libraries for Data Science', grade: 'Grade A' },
  { title: 'Statistics for Data Science', grade: 'Grade B' },
]

// Reveal-on-scroll hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:dubalamancs232426@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050810] text-white">

      {/* ── Fixed Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-6 backdrop-blur-xl bg-black/30 border-b border-white/[0.06]">
        <a href="#home" className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">
          VANGUARD
        </a>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-inter text-sm text-white/70 tracking-widest uppercase hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/10 px-6 py-3 text-xs text-white tracking-widest uppercase transition-all duration-200"
        >
          HIRE ME <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-4 h-0.5 bg-white" />
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <div className={`fixed inset-0 z-50 bg-black/97 backdrop-blur-sm transition-all duration-500 md:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col h-full px-6 sm:px-10 py-5">
          <div className="flex items-center justify-between">
            <span className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">VANGUARD</span>
            <button onClick={() => setMenuOpen(false)} className="text-white hover:text-white/70 transition-colors">
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-5 sm:gap-6">
            {NAV_LINKS.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl sm:text-5xl text-white uppercase transition-all duration-500"
                style={{ transitionDelay: `${i * 80 + 100}ms`, opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)' }}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center gap-2 border border-white/30 px-6 py-3 text-xs text-white tracking-widest uppercase"
              style={{ transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`, opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
            >
              HIRE ME <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        <video src={VIDEO_URL} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/52" />

        <div className="relative z-10 flex flex-col h-full">
          {/* spacer for fixed nav */}
          <div className="h-[72px] lg:h-[84px]" />

          <div className="flex-1 flex items-center px-6 sm:px-10 lg:px-16 pb-10">
            <div className="w-full max-w-5xl">
              <div className="flex items-center gap-2 mb-6 lg:mb-8 animate-fade-up">
                <Crown className="w-4 h-4 text-white/70 flex-shrink-0" />
                <span className="font-inter text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
                  World-Class Digital Collective
                </span>
              </div>

              <div className="animate-fade-up-delay-1">
                <h1 className="font-podium text-white uppercase leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}>
                  Design.<br />Disrupt.<br />Conquer.
                </h1>
              </div>

              <div className="mt-6 lg:mt-8 animate-fade-up-delay-2">
                <p className="font-inter text-white/70 text-sm sm:text-base leading-relaxed max-w-md">
                  We build fierce brand identities<br />
                  that don't just turn heads —{' '}
                  <span className="text-white font-semibold">they lead.</span>
                </p>
              </div>

              <div className="mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-up-delay-3">
                <a href="#projects" className="group flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase transition-colors duration-200">
                  SEE OUR WORK
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
                <div className="hidden sm:flex items-center gap-3">
                  <Award className="w-8 h-8 text-white/50 flex-shrink-0" />
                  <div>
                    <p className="font-inter text-white/60 text-xs tracking-wider uppercase">Top-Rated</p>
                    <p className="font-inter text-white/60 text-xs tracking-wider uppercase">Brand Studio</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16 animate-fade-up-delay-4">
                {[
                  { value: '250+', label: 'Brands Transformed' },
                  { value: '95%', label: 'Client Retention' },
                  { value: '10+', label: 'Years in the Game' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{s.value}</p>
                    <p className="font-inter text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
      <section id="about" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-12">
          <p className="inline-flex items-center gap-3 text-white/50 text-xs tracking-[0.22em] uppercase mb-5 font-inter before:content-[''] before:w-8 before:h-px before:bg-white/40">
            About Me
          </p>
          <h2 className="font-podium text-white uppercase leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}>
            Developer focused on AI,<br />automation, and useful products.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5">
          <Reveal delay={100} className="border border-white/[0.09] bg-white/[0.04] backdrop-blur-xl rounded-3xl p-8 lg:p-10">
            <p className="font-inter text-white/70 leading-[1.8] text-[0.96rem]">
              I am <strong className="text-white">Aman Dubal</strong>, an AI/ML & DevOps-focused developer currently pursuing a{' '}
              <strong className="text-white">Bachelor of Science in Computer Science</strong>. My work focuses on turning machine learning concepts into practical, usable systems.
            </p>
            <p className="font-inter text-white/70 leading-[1.8] text-[0.96rem] mt-5">
              I enjoy building local AI tools, audio intelligence systems, multi-agent workflows, APIs, dashboards, and full-stack applications. My current strengths include{' '}
              <strong className="text-white">Machine Learning, Data Analysis, AI Agents, Website Development, and Database Management Systems</strong>.
            </p>
            <p className="font-inter text-white/70 leading-[1.8] text-[0.96rem] mt-5">
              I like projects that combine intelligence with real-world usability — for example, offline audio analysis for privacy-focused risk detection or AI agents that automate everyday decision-making.
            </p>
          </Reveal>

          <Reveal delay={200} className="border border-white/[0.09] bg-white/[0.04] backdrop-blur-xl rounded-3xl p-8 lg:p-10 flex flex-col gap-5">
            {[
              ['Name', 'Aman Dubal'],
              ['Role', 'AI/ML & DevOps'],
              ['Email', 'dubalamancs232426@gmail.com'],
              ['Phone', '+91 7304316477'],
              ['Location', 'Mumbai, India'],
              ['Education', 'B.Sc. Computer Science'],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-start gap-4 pb-5 border-b border-white/[0.08] last:border-0 last:pb-0">
                <span className="font-inter text-white/45 text-sm">{label}</span>
                <span className="font-inter text-white font-semibold text-sm text-right break-all">{value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SKILLS
      ══════════════════════════════════════ */}
      <section id="skills" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-12">
          <p className="inline-flex items-center gap-3 text-white/50 text-xs tracking-[0.22em] uppercase mb-5 font-inter before:content-[''] before:w-8 before:h-px before:bg-white/40">
            Skills
          </p>
          <h2 className="font-podium text-white uppercase leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}>
            Technical stack for AI/ML,<br />web, and data products.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.title} delay={i * 60}>
              <div className="group border border-white/[0.09] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-xl rounded-3xl p-7 transition-all duration-300 h-full">
                <h3 className="font-podium text-white text-lg uppercase tracking-wide mb-5">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.chips.map((chip) => (
                    <span key={chip} className="font-inter px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.10] text-white/75 text-[0.82rem]">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════ */}
      <section id="projects" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-12">
          <p className="inline-flex items-center gap-3 text-white/50 text-xs tracking-[0.22em] uppercase mb-5 font-inter before:content-[''] before:w-8 before:h-px before:bg-white/40">
            Projects
          </p>
          <h2 className="font-podium text-white uppercase leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}>
            Selected AI/ML and<br />full-stack projects.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {PROJECTS.map((proj, i) => (
            <Reveal key={proj.number} delay={i * 100}>
              <article className="group relative border border-white/[0.09] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-xl rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[420px] overflow-hidden transition-all duration-300">
                {/* Glow accent */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/[0.04] rounded-full blur-3xl group-hover:bg-white/[0.07] transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <p className="font-inter text-white/40 text-xs tracking-[0.18em] uppercase mb-4">Project {proj.number}</p>
                  <h3 className="font-podium text-white uppercase leading-tight tracking-tight mb-5" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
                    {proj.title}
                  </h3>
                  <p className="font-inter text-white/60 leading-[1.75] text-[0.93rem]">{proj.description}</p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {proj.metrics.map((m) => (
                      <span key={m} className="font-inter px-3 py-1.5 rounded-2xl bg-white/10 border border-white/[0.12] text-white text-[0.84rem] font-semibold">
                        {m}
                      </span>
                    ))}
                  </div>

                  <p className="font-inter text-white/50 leading-[1.75] text-[0.88rem] mt-4">{proj.detail}</p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tech.map((t) => (
                      <span key={t} className="font-inter px-2.5 py-1 rounded-full text-[0.76rem] text-white/60 bg-white/[0.06] border border-white/[0.07]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.repo}
                    onClick={(e) => { e.preventDefault(); alert('Add your GitHub repository link here.') }}
                    className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 hover:bg-white/10 px-5 py-2.5 text-xs text-white tracking-widest uppercase transition-all duration-200"
                  >
                    View Repo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          JOURNEY
      ══════════════════════════════════════ */}
      <section id="journey" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-12">
          <p className="inline-flex items-center gap-3 text-white/50 text-xs tracking-[0.22em] uppercase mb-5 font-inter before:content-[''] before:w-8 before:h-px before:bg-white/40">
            Experience / Learning Journey
          </p>
          <h2 className="font-podium text-white uppercase leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}>
            Education, certifications,<br />and continuous AI learning.
          </h2>
        </Reveal>

        <div className="max-w-4xl flex flex-col gap-4 mb-10">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="border border-white/[0.09] bg-white/[0.04] backdrop-blur-xl rounded-3xl p-7 lg:p-8 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-5 sm:gap-8">
                <span className="font-inter text-white font-bold tracking-wide text-sm">{item.date}</span>
                <div>
                  <h3 className="font-podium text-white uppercase tracking-tight text-lg mb-2">{item.title}</h3>
                  <p className="font-inter text-white/60 leading-[1.7] text-[0.92rem]">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 60}>
              <div className="border border-white/[0.09] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300">
                <p className="font-inter text-white text-[0.9rem] font-semibold leading-[1.4] mb-3">{cert.title}</p>
                <p className="font-inter text-white font-bold tracking-wider text-sm">{cert.grade}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT
      ══════════════════════════════════════ */}
      <section id="contact" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-12">
          <p className="inline-flex items-center gap-3 text-white/50 text-xs tracking-[0.22em] uppercase mb-5 font-inter before:content-[''] before:w-8 before:h-px before:bg-white/40">
            Contact / Hire Me
          </p>
          <h2 className="font-podium text-white uppercase leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}>
            Let's build an intelligent<br />product together.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5">
          {/* Left — contact info */}
          <Reveal delay={80} className="border border-white/[0.09] bg-white/[0.04] backdrop-blur-xl rounded-3xl p-8 lg:p-10 flex flex-col gap-8">
            <div>
              <h3 className="font-podium text-white uppercase tracking-tight text-xl mb-4">
                Available for AI/ML, data science, and full-stack work.
              </h3>
              <p className="font-inter text-white/60 leading-[1.75] text-[0.93rem]">
                Contact me for machine learning projects, AI agents, data analysis, dashboards, APIs, website development, and academic or freelance collaboration.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { icon: <Mail className="w-4 h-4 flex-shrink-0" />, label: 'Email', value: 'dubalamancs232426@gmail.com', href: 'mailto:dubalamancs232426@gmail.com' },
                { icon: <Phone className="w-4 h-4 flex-shrink-0" />, label: 'Phone', value: '+91 7304316477', href: 'tel:+917304316477' },
                { icon: <Link2 className="w-4 h-4 flex-shrink-0" />, label: 'LinkedIn', value: 'linkedin.com/in/amandubal', href: 'https://www.linkedin.com/in/amandubal/' },
                { icon: <GitFork className="w-4 h-4 flex-shrink-0" />, label: 'GitHub', value: 'Add your GitHub link', href: '#' },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-white/[0.10] bg-white/[0.04] hover:bg-white/[0.10] hover:border-white/25 rounded-xl px-4 py-3.5 transition-all duration-200"
                >
                  <span className="text-white/50">{icon}</span>
                  <div>
                    <p className="font-inter text-white/40 text-[0.7rem] uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="font-inter text-white/85 text-sm break-all">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={160} className="border border-white/[0.09] bg-white/[0.04] backdrop-blur-xl rounded-3xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full font-inter bg-white/[0.05] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none focus:border-white/40 focus:bg-white/[0.09] transition-all duration-200"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full font-inter bg-white/[0.05] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none focus:border-white/40 focus:bg-white/[0.09] transition-all duration-200"
                />
              </div>
              <input
                type="text"
                placeholder="Project Type / Subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full font-inter bg-white/[0.05] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none focus:border-white/40 focus:bg-white/[0.09] transition-all duration-200"
              />
              <textarea
                placeholder="Tell me about your project..."
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full font-inter bg-white/[0.05] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none focus:border-white/40 focus:bg-white/[0.09] transition-all duration-200 resize-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-white text-black font-inter font-bold tracking-widest uppercase text-xs px-8 py-4 rounded-full hover:bg-white/90 transition-colors duration-200"
              >
                Send Message <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.08] px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-inter text-white/40 text-sm">
          © {new Date().getFullYear()} Aman Dubal. AI/ML & DevOps Portfolio.
        </p>
        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/in/amandubal/" target="_blank" rel="noopener noreferrer" className="font-inter text-white/50 hover:text-white text-sm transition-colors">
            LinkedIn
          </a>
          <span className="text-white/20">·</span>
          <a href="mailto:dubalamancs232426@gmail.com" className="font-inter text-white/50 hover:text-white text-sm transition-colors">
            Email
          </a>
        </div>
      </footer>
    </div>
  )
}
