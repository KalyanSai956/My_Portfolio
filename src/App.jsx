import attendAI from "@/assets/projects/attendAI.png";
// import smartHire from "@/assets/projects/smarthire.png";
import carePlus from "@/assets/projects/carePlus.png";
// import gymTrainer from "@/assets/projects/aigymtrainer.png";
import profileImg from "@/assets/git.png";
import { useTheme } from "@/hooks/use-theme";
import GithubActivity from "@/components/ui/GithubActivity";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";
import SmartHire from "@/assets/projects/SmartHire.jpg";
const experiences = [
  {
    company: "Projxty",
    tag: "INTERNSHIP",
    role: "Web Developer",
    period: "Apr 2025 – Jul 2025",
    desc: "Delivered high-quality, plagiarism-free food articles optimized for SEO, ensuring reader-friendly content through meticulous proofreading and keyword strategy.",
    initials: "S14",
    color: "bg-yellow-800/40 text-yellow-200",
  },
];

const techStack = [
  { name: "Python", icon: "python", color: "3776AB" },
  { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
  { name: "HTML5", icon: "html5", color: "E34F26" },
  { name: "CSS3", icon: "css", color: "1572B6" },
  { name: "React", icon: "react", color: "61DAFB" },
  { name: "Bootstrap", icon: "bootstrap", color: "7952B3" },
  { name: "Vite", icon: "vite", color: "646CFF" },
  { name: "Node.js", icon: "nodedotjs", color: "5FA04E" },
  { name: "Express.js", icon: "express", color: "FFFFFF" },
  { name: "MongoDB", icon: "mongodb", color: "47A248" },
  { name: "FastAPI", icon: "fastapi", color: "009688" },
  { name: "Streamlit", icon: "streamlit", color: "FF4B4B" },
  { name: "Git", icon: "git", color: "F05032" },
  { name: "GitHub", icon: "github", color: "FFFFFF" },
  { name: "VS Code", icon: "visualstudiocode", color: "007ACC" },
  { name: "Postman", icon: "postman", color: "FF6C37" },
  { name: "MySQL", icon: "mysql", color: "4479A1" },
  { name: "TensorFlow", icon: "tensorflow", color: "FF6F00" },
  { name: "scikit-learn", icon: "scikitlearn", color: "F7931E" },
  { name: "Pandas", icon: "pandas", color: "150458" },
];

const projects = [
  {
    title: "AttendAI",
    image: attendAI,
    desc: "AI-powered smart attendance system that uses Face Recognition and Voice Recognition for secure attendance management.",
    tags: ["Python", "Streamlit", "FastAPI", "Supabase"],
    live: "https://attend-ai-landing.vercel.app/", // Add deployed URL if available
    github: "https://github.com/KalyanSai956/attendai-app",
    gradient: "from-blue-500/20 via-cyan-500/10 to-indigo-500/20",
  },
  {
    title: "SmartHire ATS",
    image: SmartHire,
    desc: "AI-powered Applicant Tracking System that analyzes resumes, matches candidates with job descriptions, provides ATS scores.",
    tags: ["React", "FastAPI", "Python", "AI"],
    live: "#",
    github: "https://github.com/yourusername/SmartHireATS",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
  },
  {
    title: "Care Plus",
    image: carePlus,
    desc: "Full-stack Pharmacy Management System for inventory management.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://care-plus-frontend.vercel.app/",
    github: "https://github.com/KalyanSai956/care-plus-backend",
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
  },
  {
    title: "AI Gym Trainer",
    image: attendAI,
    desc: "AI fitness assistant that analyzes workout posture using computer vision.",
    tags: ["Python", "OpenCV", "MediaPipe", "AI"],
    live: "#",
    github: "https://github.com/yourusername/AIGymTrainer",
    gradient: "from-orange-500/20 via-red-500/10 to-yellow-500/20",
  },
];

function Chip({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}

function IconBtn({ href, label, children }) {
  const isExternal = href.startsWith("http") || href.startsWith("https");

  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card/40 text-muted-foreground transition hover:border-foreground/40 hover:text-foreground"
    >
      {children}
    </a>
  );
}

function LinkBtn({ href, children }) {
  const isExternal = href.startsWith("http") || href.startsWith("https");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-4 py-2.5 text-sm text-foreground transition hover:border-foreground/40 hover:bg-card"
    >
      {children}
    </a>
  );
}

function App() {
  const { theme, toggle } = useTheme();
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <Navbar theme={theme} toggle={toggle} />
      <main id="main-content" className="mx-auto max-w-3xl px-6 py-14">
        {/* Hero */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-wrap items-start gap-5">
            <img
              src={profileImg}
              alt="Pasupuleti Sai Kalyan — Full Stack Developer"
              width={96}
              height={96}
              className="h-24 w-24 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Pasupuleti Sai Kalyan
                  </h1>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Full Stack Developer &amp; Software Engineer
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_var(--accent-green)]" />
                  Available for work
                </span>
              </div>
            </div>
          </div>

          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Hi, I'm Pasupuleti Sai Kalyan — a Full-Stack Developer and AI Engineer who has shipped
            10+ projects across web apps, AI. I mostly work with{" "}
            <InlineTech name="JavaScript" abbr="JS" color="#3178C6" />,{" "}
            <InlineTech name="Python" abbr="Py" color="#3776AB" />,{" "}
            <InlineTech name="Java" abbr="J" color="#CE422B" />, and whatever gets the job
            done.Actively contributing to several open-source projects.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <LinkBtn href="/Kalyan_Resume.pdf">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
              Resume
            </LinkBtn>
            <LinkBtn href="mailto:kalyansai956@gmail.com?subject=Job Opportunity&body=Hi Sai Kalyan,">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              Open To Work
            </LinkBtn>
            <IconBtn href="https://twitter.com/kalyanworkspace" label="X / Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2H21l-6.52 7.45L22 22h-6.86l-4.79-6.27L4.8 22H2l7.02-8.02L2 2h6.98l4.35 5.75L18.244 2Zm-1.2 18h1.9L7.02 4H5.03l12.014 16Z" />
              </svg>
            </IconBtn>
            <IconBtn href="https://github.com/KalyanSai956/" label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.09-.74.09-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.13 3.19.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
            </IconBtn>
            <IconBtn href="https://www.linkedin.com/in/saikalyanpasupuleti/" label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v14H.22V8Zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.98V22h-4.56v-6.14c0-1.46-.03-3.34-2.03-3.34-2.04 0-2.35 1.59-2.35 3.24V22H7.72V8Z" />
              </svg>
            </IconBtn>
            <IconBtn href="mailto:kalyansai956@gmail.com" label="Email">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </IconBtn>
            <IconBtn href="#" label="Website">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            </IconBtn>
          </div>
        </section>

        {/* Experience */}
        <Section eyebrow="EXPERIENCE" subtitle="Where I've worked and contributed.">
          <ul className="mt-6 space-y-6">
            {experiences.map((e) => (
              <li key={e.company} className="flex gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${e.color}`}
                >
                  {e.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-foreground">{e.company}</span>
                      <Chip>{e.tag}</Chip>
                    </div>
                    <span className="text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground/90">{e.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Tech Stack */}
        <Section eyebrow="TECH STACK" subtitle="The tools behind my builds.">
          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t.name}
                className="
inline-flex
items-center
gap-2
rounded-lg
border
border-zinc-700
bg-zinc-900/50
px-3
py-1.5
text-xs
transition-all
duration-300
hover:border-cyan-400
hover:bg-zinc-800
hover:text-white
"
                style={{
                  borderColor: `#${t.color}55`,
                  backgroundColor: `#${t.color}12`,
                }}
              >
                <img src={`https://cdn.simpleicons.org/${t.icon}/${t.color}`} className="w-4 h-4" />
                {t.name}
              </span>
            ))}
          </div>
        </Section>

        {/* <GithubActivity /> */}

        {/* Featured Projects */}
        <Section eyebrow="FEATURED PROJECTS" subtitle="Things I've built and shipped.">
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="
  group
  overflow-hidden
  rounded-2xl
  border
  border-border
  bg-card/80
  backdrop-blur-xl
  transition-all
  duration-300
  hover:-translate-y-2
  hover:border-foreground/20
  hover:shadow-xl
"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* <div
        className={`absolute inset-0 bg-gradient-to-t ${p.gradient}`}
    /> */}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={p.live}
                      className="
inline-flex
items-center
gap-1.5
rounded-md
border
border-border
bg-background
px-3
py-1.5
text-xs
font-medium
text-foreground
transition
hover:bg-muted
hover:border-foreground/30
"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
                    </a>
                    <a
                      href={p.github}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-foreground/90 hover:border-foreground/40"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <LinkBtn href="/projects">View All Projects →</LinkBtn>
          </div>
        </Section>

        {/* CTA */}
        <section className="mt-20 rounded-2xl border border-border bg-card/40 p-8 text-center">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Freelance &amp; Collaboration
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to Build Something Great?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            I'm available for freelance projects, consulting, and collaborations. Whether you need a
            Web3 dApp, a full-stack application, or smart contract development, let's discuss how I
            can help bring your vision to life.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <LinkBtn href="#">Book a Free Consultation</LinkBtn>
            <LinkBtn href="#">Send an Email</LinkBtn>
          </div>
        </section>

        <footer className="mt-16 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Pasupuleti Sai Kalyan</p>
          <div className="mt-3 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/KalyanSai956"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/saikalyanpasupuleti/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/kalyanworkspace"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Twitter
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function InlineTech({ name, abbr, color }) {
  return (
    <span className="inline-flex items-center overflow-hidden rounded-md border border-border align-middle text-[11px]">
      <span
        style={{ backgroundColor: color }}
        className="px-1.5 py-0.5 font-semibold text-black/80"
      >
        {abbr}
      </span>
      <span className="bg-muted px-1.5 py-0.5 text-foreground">{name}</span>
    </span>
  );
}

function Section({ eyebrow, subtitle, children }) {
  return (
    <section className="mt-16">
      <p className="text-xs font-medium tracking-widest text-muted-foreground">{eyebrow}</p>
      <p className="mt-1 text-sm text-muted-foreground/80">{subtitle}</p>
      {children}
    </section>
  );
}

export default App;
