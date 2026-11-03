import { useEffect, useState, type CSSProperties, type ReactNode } from "react"

type IconName = "arrow" | "brain" | "code" | "database" | "github" | "linkedin" | "mail" | "rocket" | "shield" | "sparkles" | "web"
const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </>
  ),
  brain: (
    <>
      <path d="M12 5v14M8.5 4A3.5 3.5 0 0 0 5 7.5c0 .5.1 1 .3 1.4A4 4 0 0 0 7 16.5 3.5 3.5 0 0 0 12 19M15.5 4A3.5 3.5 0 0 1 19 7.5c0 .5-.1 1-.3 1.4a4 4 0 0 1-1.7 7.6 3.5 3.5 0 0 1-5 2.5" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  github: (
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5A5.4 5.4 0 0 0 19 5.5c.3-1.2.3-2.3 0-3.5 0 0-1 0-3 1.5a13 13 0 0 0-8 0C6 2 5 2 5 2a7 7 0 0 0 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.7.9-1.1 2.2-1 3.5v4M9 18c-4.5 2-5-2-7-2" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.9 5.7a2 2 0 0 1-2.2 0L2 7" />
    </>
  ),
  rocket: (
    <>
      <path d="M9 12a13 13 0 0 1 13-10 13 13 0 0 1-10 13l-3-3Z" />
      <path d="M9 12H4s.5-3 2-4c1.5-1 5 0 5 0M12 15v5s3-.5 4-2c1-1.5 0-5 0-5" />
      <circle cx="16" cy="8" r="1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.2 4.2A5 5 0 0 0 16.8 11L21 12l-4.2 1.2a5 5 0 0 0-3.6 3.6L12 21l-1.2-4.2a5 5 0 0 0-3.6-3.6L3 12l4.2-1.2a5 5 0 0 0 3.6-3.6L12 3Z" />
      <path d="M19 3v4M21 5h-4" />
    </>
  ),
  web: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
}
function Icon({ name, className = "" }: { name: IconName className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const capabilities = [
  {
    title: "Programming",
    icon: "code" as const,
    type: "technical",
    items: [
      ["Python", "Intelligent systems"],
      ["Java", "Object-oriented"],
      ["JavaScript", "Interactive logic"],
    ],
  },
  {
    title: "Web Development",
    icon: "web" as const,
    type: "technical",
    items: [
      ["React", "Component thinking"],
      ["Node.js", "Server-side runtime"],
      ["Express.js", "API foundations"],
      ["HTML & CSS", "Structure & style"],
    ],
  },
  {
    title: "AI & Emerging Tech",
    icon: "brain" as const,
    type: "technical",
    items: [
      ["Machine Learning", "Models & intuition"],
      ["Generative AI", "Creative intelligence"],
      ["Agentic AI", "Autonomous systems"],
    ],
  },
  {
    title: "Data & Tools",
    icon: "database" as const,
    type: "technical",
    items: [
      ["DBMS", "Data foundations"],
      ["Git", "Version control"],
      ["GitHub", "Build in public"],
    ],
  },
  {
    title: "How I Work",
    icon: "sparkles" as const,
    type: "professional",
    items: [
      ["Curiosity", "Ask better questions"],
      ["Organisation", "Calm systems"],
      ["Iteration", "Learn by building"],
      ["Ownership", "Finish what matters"],
    ],
  },
]
const projects = [
  {
    no: "01",
    title: "Focus Air",
    label: "Productivity · Web App",
    desc: "A productivity-focused web application designed to help users stay focused and manage tasks effectively.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    art: "focus",
  },
  {
    no: "02",
    title: "Cosmic Library",
    label: "Reading · Digital Library",
    desc: "A responsive digital library platform with a clean interface for exploring and reading books.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    art: "library",
  },
  {
    no: "03",
    title: "Echodesk",
    label: "Organisation · Full Stack",
    desc: "A web platform for managing and organising notes, ideas, and resources efficiently.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    art: "echo",
  },
  {
    no: "04",
    title: "Lab Companion",
    label: "Systems · Database",
    desc: "A database-driven system for managing laboratory resources, records, and user operations.",
    tech: ["JavaScript", "Node.js", "Express.js", "DBMS"],
    art: "lab",
  },
]
function Chapter({
  number,
  name,
  eyebrow,
  title,
  dark = false,
}: {
  number: string
  name: string
  eyebrow: string
  title: ReactNode
  dark?: boolean
}) {
  return (
    <div className="chapter reveal">
      <div className="chapter-kicker">
        <span />
        Chapter {number} — {name}
      </div>
      <p className={`section-label ${dark ? "muted-light" : ""}`}>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

const heroPhrases = [
  { quality: "intelligent", catalyst: "curiosity" },
  { quality: "thoughtful", catalyst: "intention" },
  { quality: "adaptive", catalyst: "ingenuity" },
  { quality: "meaningful", catalyst: "empathy" },
  { quality: "resilient", catalyst: "clarity" },
]

const aboutPhrases = [
  "listen to ideas",
  "understand the problem",
  "question assumptions",
  "find the real need",
  "follow the why",
]

const experiencePhrases = [
  "small steps",
  "hands-on learning",
  "real-world practice",
  "focused growth",
  "meaningful milestones",
]

const timelineItems = [
  {
    date: "2022",
    title: "Class 10 · 95.4%",
    copy: "Completed secondary education at St Xavier’s Institution with a strong academic foundation.",
  },
  {
    date: "2024",
    title: "Class 12 Science · 81.8%",
    copy: "Graduated from Kalyani Public School and turned a curiosity for technology into a clear direction.",
  },
  {
    date: "2025",
    title: "B.Tech CSE (AI & ML)",
    copy: "Joined D. Y. Patil University, Ambi, Pune to study intelligent systems and software engineering.",
  },
  {
    date: "09 Jun — 30 Aug 2026",
    eyebrow: "Professional Experience",
    title: "Web Development Intern · NIT Sikkim",
    copy: "Completed a supervised summer internship in web development using Python with the Department of Electronics and Communication Engineering, gaining practical exposure through applied development work.",
    tags: ["Python", "Web Development", "Practical Training"],
    link: "/Samata-Das-NIT-Sikkim-Internship-Certificate.pdf",
    featured: true,
  },
  {
    date: "Now",
    title: "Building & Exploring",
    copy: "Creating full-stack projects while studying machine learning, GenAI, agentic AI, and databases.",
  },
  {
    date: "2029",
    title: "The Horizon",
    copy: "Working toward graduation and a career building useful, thoughtful, intelligent software.",
  },
]

function DisintegratingWord({
  word,
  phase,
  kind,
}: {
  word: string
  phase: "in" | "out"
  kind: "quality" | "catalyst" | "idea" | "experience"
}) {
  return (
    <span className={`dynamic-word ${kind} ${phase}`} aria-label={word}>
      <span className="sr-only">{word}</span>
      <span className="word-particles" aria-hidden="true">
        {[...word].map((letter, index) => {
          const direction = index % 2 === 0 ? 1 : -1
          const dx = direction * (12 + (index % 4) * 7)
          const dy = -18 + (index % 5) * 11
          const style = {
            "--i": index,
            "--dx": `${dx}px`,
            "--dy": `${dy}px`,
            "--dx-far": `${dx * 1.7}px`,
            "--dy-far": `${dy * 1.5}px`,
            "--dx-back": `${dx * -0.8}px`,
            "--dy-back": `${dy * -1.3}px`,
            "--dx-wisp": `${dx * 0.5}px`,
            "--dy-wisp": `${dy * -2}px`,
            "--rot": `${direction * (8 + index * 3)}deg`,
            "--delay": `${index * 28}ms`,
          } as CSSProperties
          return (
            <span
              className="particle-letter"
              style={style}
              key={`${word}-${index}`}
            >
              <span>{letter === " " ? "\u00a0" : letter}</span>
              <i />
              <i />
              <i />
            </span>
          )
        })}
      </span>
    </span>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<"all" | "technical" | "professional">(
    "all",
  )
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [wordPhase, setWordPhase] = useState<"in" | "out">("in")
  const [aboutPhraseIndex, setAboutPhraseIndex] = useState(0)
  const [aboutWordPhase, setAboutWordPhase] = useState<"in" | "out">("in")
  const [experiencePhraseIndex, setExperiencePhraseIndex] = useState(0)
  const [experienceWordPhase, setExperienceWordPhase] = useState<"in" | "out">(
    "in",
  )
  useEffect(() => {
    let swapTimer: ReturnType<typeof setTimeout>
    const cycleTimer = setInterval(() => {
      setWordPhase("out")
      swapTimer = setTimeout(() => {
        setPhraseIndex((index) => (index + 1) % heroPhrases.length)
        setWordPhase("in")
      }, 680)
    }, 3800)
    return () => {
      clearInterval(cycleTimer)
      clearTimeout(swapTimer)
    }
  }, [])
  useEffect(() => {
    let swapTimer: ReturnType<typeof setTimeout>
    const cycleTimer = setInterval(() => {
      setExperienceWordPhase("out")
      swapTimer = setTimeout(() => {
        setExperiencePhraseIndex(
          (index) => (index + 1) % experiencePhrases.length,
        )
        setExperienceWordPhase("in")
      }, 680)
    }, 4000)
    return () => {
      clearInterval(cycleTimer)
      clearTimeout(swapTimer)
    }
  }, [])
  useEffect(() => {
    let swapTimer: ReturnType<typeof setTimeout>
    const cycleTimer = setInterval(() => {
      setAboutWordPhase("out")
      swapTimer = setTimeout(() => {
        setAboutPhraseIndex((index) => (index + 1) % aboutPhrases.length)
        setAboutWordPhase("in")
      }, 680)
    }, 4200)
    return () => {
      clearInterval(cycleTimer)
      clearTimeout(swapTimer)
    }
  }, [])
  useEffect(() => {
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const max = document.documentElement.scrollHeight - innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
      const sections = [
        ...document.querySelectorAll<HTMLElement>("main > section"),
      ]
      const current = sections
        .filter(
          (section) =>
            section.getBoundingClientRect().top <= innerHeight * 0.42,
        )
        .at(-1)
      if (current) setActiveSection(current.id)

      const heroImage = document.querySelector<HTMLElement>(
        ".hero-scene > img:first-child",
      )
      const foreground = document.querySelector<HTMLElement>(
        ".hero-scene .foreground",
      )
      const heroContent = document.querySelector<HTMLElement>(".hero-content")
      if (
        !reduceMotion &&
        heroImage &&
        foreground &&
        heroContent &&
        window.scrollY < innerHeight
      ) {
        heroImage.style.transform = `scale(1.08) translateY(${window.scrollY * 0.09}px)`
        foreground.style.transform = `translateY(${window.scrollY * 0.16}px)`
        heroContent.style.transform = `translateY(${window.scrollY * 0.07}px)`
        heroContent.style.opacity = `${Math.max(0.2, 1 - window.scrollY / innerHeight)}`
      }
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    )
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))

    const ring = document.querySelector<HTMLElement>(".cursor-ring")
    const dot = document.querySelector<HTMLElement>(".cursor-dot")
    let tilted: HTMLElement | null = null
    let magnetic: HTMLElement | null = null
    const resetTilt = () => {
      if (tilted) tilted.style.transform = ""
      tilted = null
    }
    const resetMagnetic = () => {
      if (magnetic) magnetic.style.transform = ""
      magnetic = null
    }
    const onPointerMove = (event: PointerEvent) => {
      if (!ring || !dot || event.pointerType === "touch") return
      ring.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      ring.classList.add("visible")
      dot.classList.add("visible")

      const target = event.target as HTMLElement
      const interactive = target.closest(
        "a, button, .cap-card, .project, .experience-entry",
      )
      ring.classList.toggle("active", Boolean(interactive))

      if (reduceMotion) return
      const nextTilt = target.closest<HTMLElement>(".cap-card, .project")
      if (nextTilt !== tilted) resetTilt()
      if (nextTilt) {
        tilted = nextTilt
        const box = tilted.getBoundingClientRect()
        const x = (event.clientX - box.left) / box.width
        const y = (event.clientY - box.top) / box.height
        tilted.style.setProperty("--mx", `${x * 100}%`)
        tilted.style.setProperty("--my", `${y * 100}%`)
        tilted.style.transform = `perspective(1100px) rotateX(${(0.5 - y) * 4}deg) rotateY(${(x - 0.5) * 5}deg) translateY(-4px)`
      }

      const nextMagnetic = target.closest<HTMLElement>(
        ".btn, .contact-grid > a, .filters button",
      )
      if (nextMagnetic !== magnetic) resetMagnetic()
      if (nextMagnetic) {
        magnetic = nextMagnetic
        const box = magnetic.getBoundingClientRect()
        magnetic.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * 0.1}px, ${(event.clientY - box.top - box.height / 2) * 0.1}px)`
      }
    }
    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        ring?.classList.remove("visible", "active")
        dot?.classList.remove("visible")
        resetTilt()
        resetMagnetic()
      }
    }
    addEventListener("scroll", onScroll, { passive: true })
    addEventListener("pointermove", onPointerMove, { passive: true })
    addEventListener("pointerout", onPointerOut)
    onScroll()
    return () => {
      removeEventListener("scroll", onScroll)
      removeEventListener("pointermove", onPointerMove)
      removeEventListener("pointerout", onPointerOut)
      observer.disconnect()
    }
  }, [])
  return (
    <main>
      <div className="cursor-ring" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
      />
      <header className={scrolled ? "scrolled" : ""}>
        <div className="nav-wrap">
          <a className="brand" href="#home">
            <img src="/assets/skybound-logo.png" alt="" />
            <span>
              <b>Samata Das</b>
              <small>Skybound Syntax</small>
            </span>
          </a>
          <nav className={menuOpen ? "open" : ""}>
            {[
              "Home",
              "About",
              "Capabilities",
              "Projects",
              "Experience",
              "Exploration",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                onClick={() => setMenuOpen(false)}
                className={
                  activeSection ===
                  (item === "Capabilities" ? "skills" : item.toLowerCase())
                    ? "active"
                    : ""
                }
                href={`#${
                  item === "Capabilities" ? "skills" : item.toLowerCase()
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            className="hello"
            href="mailto:samata.das236@gmail.com?subject=Hello%20Samata%20%E2%80%94%20Portfolio%20Inquiry"
          >
            Say Hello <span>→</span>
          </a>
          <button
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-scene">
          <img
            src="/assets/hero-scene.jpg"
            alt="A cinematic floating city above a misty horizon"
          />
          <img
            className="foreground"
            src="/assets/hero-foreground.png"
            alt=""
          />
          <div className="stars" />
        </div>
        <div className="frame-corner top" />
        <div className="frame-corner bottom" />
        <div className="scene-note">
          Scene 01 / Horizon <i /> <span>Reel I · 2026</span>
        </div>
        <div className="container hero-content">
          <div className="hero-kicker">
            <span />
            Chapter 01 — Introduction
          </div>
          <div className="identity">
            <div className="avatar">
              <img src="/assets/samata-avatar.png" alt="Samata Das" />
            </div>
            <div>
              <strong>Samata Das</strong>
              <small>B.Tech CSE · AI & ML</small>
              <em>Builder · Explorer · Problem Solver</em>
            </div>
          </div>
          <h1>
            Building{" "}
            <DisintegratingWord
              word={heroPhrases[phraseIndex].quality}
              phase={wordPhase}
              kind="quality"
            />
            <br />
            systems with{" "}
            <DisintegratingWord
              word={heroPhrases[phraseIndex].catalyst}
              phase={wordPhase}
              kind="catalyst"
            />
            <br />
            and quiet purpose.
          </h1>
          <p className="hero-copy">
            A student engineer exploring the intersection of technology,
            creativity, and intelligence — one project, one idea, one challenge
            at a time.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              Enter The Work <Icon name="arrow" />
            </a>
            <a className="btn ghost" href="#contact">
              Get In Touch
            </a>
          </div>
          <p className="location">
            D. Y. Patil University · Ambi, Pune · Year II
          </p>
        </div>
        <a href="#about" className="scroll-cue">
          Scroll
          <span />
        </a>
      </section>

      <section id="about" className="ivory section">
        <div className="container">
          <Chapter
            number="02"
            name="The Beginning"
            eyebrow="About the Journey"
            title={
              <>
                A student engineer learning to{" "}
                <DisintegratingWord
                  word={aboutPhrases[aboutPhraseIndex]}
                  phase={aboutWordPhase}
                  kind="idea"
                />{" "}
                before writing the first line of code.
              </>
            }
          />
          <div className="about-grid">
            <div className="prose reveal">
              <p>
                I’m <strong>Samata Das</strong> — a second-year B.Tech student
                studying Computer Science with a specialisation in Artificial
                Intelligence and Machine Learning at{" "}
                <strong>D. Y. Patil University, Pune.</strong>
              </p>
              <p>
                My story with technology started the way most good stories
                begin: with a single, stubborn question. Somewhere between a
                blinking cursor and the first program that actually worked, I
                realised software could be a quiet medium for thought.
              </p>
              <p>
                Today, I’m building across the web and exploring the frontiers
                where <strong>artificial intelligence</strong> meets useful
                product design. Every project is a chapter and every bug is a
                lesson in patience.
              </p>
            </div>
            <aside className="facts reveal">
              {[
                ["Currently", "Year II · CSE (AI & ML)"],
                ["Based in", "Pune, Maharashtra"],
                ["Focus", "AI · Full Stack · DBMS"],
                ["Mindset", "Curious · Calm · Iterative"],
              ].map(([a, b]) => (
                <div key={a}>
                  <small>{a}</small>
                  <p>{b}</p>
                </div>
              ))}
            </aside>
          </div>
          <blockquote className="reveal">
            “Here to build <em>sustainable, purposeful technology</em> that
            serves humanity and creates lasting good.”
          </blockquote>
        </div>
      </section>

      <section id="skills" className="workshop section dark">
        <div className="stars" />
        <div className="container">
          <Chapter
            dark
            number="03"
            name="The Workshop"
            eyebrow="Capabilities"
            title={
              <>
                A growing toolkit of <em>languages, ideas</em> and quiet habits.
              </>
            }
          />
          <div className="filters reveal" role="tablist">
            {[
              ["all", "All Capabilities", "The full toolkit"],
              ["technical", "Technical", "Code · Systems · AI"],
              ["professional", "Professional", "Human · Craft · Voice"],
            ].map(([value, label, sub]) => (
              <button
                key={value}
                role="tab"
                aria-selected={filter === value}
                onClick={() => setFilter(value as typeof filter)}
              >
                <b>{label}</b>
                <small>{sub}</small>
              </button>
            ))}
            <span>
              {capabilities
                .filter((c) => filter === "all" || c.type === filter)
                .length.toString()
                .padStart(2, "0")}{" "}
              / 05 groups
            </span>
          </div>
          <div className="cap-grid">
            {capabilities
              .filter((c) => filter === "all" || c.type === filter)
              .map((cap) => (
                <article className="cap-card reveal visible" key={cap.title}>
                  <div className="cap-top">
                    <Icon name={cap.icon} />
                    <small>{cap.type}</small>
                  </div>
                  <h3>{cap.title}</h3>
                  <ul>
                    {cap.items.map(([n, note]) => (
                      <li key={n}>
                        <span>{n}</span>
                        <small>{note}</small>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section id="projects" className="ocean section dark">
        <div className="container">
          <Chapter
            dark
            number="04"
            name="Selected Work"
            eyebrow="Projects"
            title={
              <>
                Small studies in <em>code, craft</em> and curiosity.
              </>
            }
          />
          <div className="projects">
            {projects.map((project, index) => (
              <article className="project reveal" key={project.title}>
                <div className={`poster ${project.art}`}>
                  <div className="poster-orbit" />
                  <span>{project.no}</span>
                  <strong>{project.title}</strong>
                </div>
                <div className="project-copy">
                  <div className="project-meta">
                    Project / {project.no}
                    <span>{project.label}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tech">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/skyboundsyntax"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub <Icon name="arrow" />
                  </a>
                </div>
                <div className="project-index">0{index + 1}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="fog section experience">
        <div className="container">
          <Chapter
            number="05"
            name="The Roadmap"
            eyebrow="Experience Timeline"
            title={
              <>
                A journey shaped through{" "}
                <DisintegratingWord
                  word={experiencePhrases[experiencePhraseIndex]}
                  phase={experienceWordPhase}
                  kind="experience"
                />{" "}
                and practical growth.
              </>
            }
          />
          <ol className="experience-timeline">
            {timelineItems.map((item, index) => (
              <li
                className={`experience-entry reveal visible ${
                  item.featured ? "featured" : ""
                }`}
                key={`${item.date}-${item.title}`}
              >
                <div className="timeline-date">
                  <span>{item.date}</span>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </div>
                <div className="timeline-track">
                  <span>{item.featured ? <Icon name="web" /> : null}</span>
                </div>
                <article>
                  {item.eyebrow ? (
                    <div className="entry-eyebrow">
                      {item.eyebrow}
                      <span>
                        <i /> Completed
                      </span>
                    </div>
                  ) : null}
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  {item.tags ? (
                    <div className="experience-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  ) : null}
                  {item.link ? (
                    <a
                      className="credential-link"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View supporting document <Icon name="arrow" />
                    </a>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
          <div className="roadmap">
            <Icon name="rocket" /> Learning, building, and moving forward
          </div>
        </div>
      </section>

      <section id="exploration" className="explore section dark">
        <div className="stars" />
        <div className="container">
          <Chapter
            dark
            number="06"
            name="Wandering"
            eyebrow="Exploration Wall"
            title={
              <>
                Ideas I keep <em>circling back</em> to.
              </>
            }
          />
          <div className="explore-grid">
            {[
              [
                "Space Systems Engineering",
                "Technology beyond Earth",
                "rocket",
              ],
              ["Cybersecurity", "Secure by design", "shield"],
              ["Machine Learning", "Patterns into insight", "database"],
              ["Generative AI", "Ideas made visible", "sparkles"],
              ["Agentic AI", "Systems that reason", "brain"],
              ["Full-Stack Systems", "From interface to data", "code"],
              ["Productivity Tools", "Calm, useful software", "web"],
              ["Open Source", "Build in public", "github"],
            ].map(([title, sub, icon]) => (
              <article className="cap-card reveal visible" key={title}>
                <Icon name={icon as IconName} />
                <div>
                  <h3>{title}</h3>
                  <p>{sub}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact section dark">
        <div className="stars" />
        <div className="container contact-inner reveal">
          <div className="chapter-kicker centered">
            <span />
            Chapter 07 — Let’s Talk
            <span />
          </div>
          <h2>
            Let’s build something
            <br />
            <em>meaningful</em> together.
          </h2>
          <p>
            Always happy to talk about ideas, collaborations, internships, or
            the quiet edges of artificial intelligence. The inbox is open.
          </p>
          <div className="contact-grid">
            <a href="mailto:samata.das236@gmail.com">
              <Icon name="mail" />
              <span>
                <small>Email</small>samata.das236@gmail.com
              </span>
              <Icon name="arrow" />
            </a>
            <a
              href="https://linkedin.com/in/samataaaa"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" />
              <span>
                <small>LinkedIn</small>/in/samataaaa
              </span>
              <Icon name="arrow" />
            </a>
            <a
              href="https://github.com/skyboundsyntax"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" />
              <span>
                <small>GitHub</small>@skyboundsyntax
              </span>
              <Icon name="arrow" />
            </a>
            <a href="/Samata-Das-Resume.pdf" download>
              <Icon name="arrow" />
              <span>
                <small>Resume</small>Download PDF
              </span>
              <Icon name="arrow" />
            </a>
          </div>
          <blockquote>“The journey is only beginning.”</blockquote>
        </div>
      </section>
      <footer>
        <div className="container">
          <img src="/assets/skybound-logo.png" alt="Skybound Syntax" />
          <p>
            <Icon name="rocket" /> Skybound Syntax · A signature, not a company.
          </p>
          <small>© 2026 Samata Das · Pune, India</small>
        </div>
      </footer>
    </main>
  )
}
