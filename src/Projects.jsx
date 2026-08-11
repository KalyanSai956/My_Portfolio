import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import Navbar from "@/components/ui/Navbar";
import attendAI from "@/assets/projects/attendAI.png";
import carePlus from "@/assets/projects/carePlus.png";
import SmartHire from "@/assets/projects/SmartHire.png";
const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "AIML", value: "aiml" },
  { label: "Full Stack", value: "fullstack" },
];

const AIProjects = [
  {
    title: "AttendAI",
    image: attendAI,
    desc: "AI-powered smart attendance system that uses Face Recognition and Voice Recognition for secure attendance management.",
    tags: ["Python", "Streamlit", "FastAPI", "Supabase"],
    live: "https://attend-ai-landing.vercel.app/",
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
    title: "AI Gym Trainer",
    image: attendAI,
    desc: "AI fitness assistant that analyzes workout posture using computer vision.",
    tags: ["Python", "OpenCV", "MediaPipe", "AI"],
    live: "#",
    github: "https://github.com/yourusername/AIGymTrainer",
    gradient: "from-orange-500/20 via-red-500/10 to-yellow-500/20",
  },
];

const fullStackProjects = [
  {
    title: "Care Plus",
    image: carePlus,
    desc: "Full-stack Pharmacy Management System for inventory management.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://care-plus-frontend.vercel.app/",
    github: "https://github.com/KalyanSai956/care-plus-backend",
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
  },
];

function Chip({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground">
      {children}
    </span>
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

function SmallLink({ href, children }) {
  const isExternal = href.startsWith("http") || href.startsWith("https");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-foreground/90 hover:border-foreground/40"
    >
      {children}
    </a>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/30 hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground">{p.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.map((t, i) => (
            <Chip key={t + i}>{t}</Chip>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          {p.live && (
            <SmallLink href={p.live}>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
            </SmallLink>
          )}
          {p.github && <SmallLink href={p.github}>GitHub</SmallLink>}
        </div>
      </div>
    </article>
  );
}

function ProjectGroup({ title, items }) {
  if (!items.length) return null;
  return (
    <section className="mt-14">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {items.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}

export default function Projects() {
  const { theme, toggle } = useTheme();
  const [category, setCategory] = useState("all");

  const showFullStack = category === "all" || category === "fullstack";
  const showAI = category === "all" || category === "aiml";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} toggle={toggle} />

      <main id="main-content" className="mx-auto max-w-3xl px-6 py-14">
        {/* Header */}
        <section>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            AI Full-stack,work I've designed, built, and shipped.
          </p>

          {/* Category filter */}
          <div className="mt-6 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`rounded-md border px-3 py-1.5 text-xs transition ${
                  category === c.value
                    ? "border-foreground/40 bg-foreground text-background"
                    : "border-border bg-card/40 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </section>
        {showAI && <ProjectGroup title="AI Projects" items={AIProjects} />}
        {showFullStack && <ProjectGroup title="Full-Stack Projects" items={fullStackProjects} />}

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
            AI application, a full-stack application, or smart contract development, let's discuss
            how I can help bring your vision to life.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <LinkBtn href="#">Book Free Consultation</LinkBtn>
            <LinkBtn href="mailto:kalyansai956@gmail.com">Send an Email</LinkBtn>
          </div>
        </section>

        <footer className="mt-16 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()}Pasupuleti Sai Kalyan</p>
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
