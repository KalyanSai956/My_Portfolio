import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import attendAI from "@/assets/projects/attendAI.png";
import carePlus from "@/assets/projects/carePlus.png";
import profileImg from "@/assets/git.png";

import { useTheme } from "@/hooks/use-theme";
import GithubActivity from "@/components/ui/GithubActivity";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";

import SmartHire from "@/assets/projects/SmartHire.png";
import Projxty from "@/assets/experience/company_projxty.png";
import MeetMind from "@/assets/projects/MeetMind.png";

import MBULogo from "./assets/education/MBU.jpg";
import SastraLogo from "./assets/education/Sastra.png";
import SriChaitanyaLogo from "./assets/education/Sri_Chaitanya.png";

/* ---------- Education ---------- */

const education = [
  {
    institution: "Mohan Babu University",
    degree: "B.Tech in Computer Science & Engineering - 8.98 CGPA",
    period: "2022 – 2026",
    logo: MBULogo,
  },
  {
    institution: "Sastra Junior College",
    degree: "Intermediate - 93.8%",
    period: "2020 – 2022",
    logo: SastraLogo,
  },
  {
    institution: "Sri Chaitanya EM High School",
    degree: "Secondary School Certificate - 98.9%",
    period: "2020",
    logo: SriChaitanyaLogo,
  },
];

/* ---------- Experience ---------- */

const experiences = [
  {
    company: "Projxty",
    tag: "INTERNSHIP",
    logo: Projxty,
    role: "Web Developer",
    period: "Apr 2025 – Jul 2025",
    desc: "Developed responsive and reusable user interface components using React.js and JavaScript. Integrated backend APIs with Node.js and Express.js to enhance application functionality. Managed MongoDB databases for efficient data storage and retrieval, ensuring data integrity. Collaborated with a dynamic development team using Git and GitHub for version control and debugging.",
    initials: "S14",
    color: "bg-white-800/40 text-yellow-200",
  },
];

/* ---------- Tech Stack ---------- */

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
  { name: "Postman", icon: "postman", color: "FF6C37" },
  { name: "MySQL", icon: "mysql", color: "4479A1" },
  { name: "TensorFlow", icon: "tensorflow", color: "FF6F00" },
  { name: "scikit-learn", icon: "scikitlearn", color: "F7931E" },
  { name: "Pandas", icon: "pandas", color: "150458" },
];

/* ---------- Projects ---------- */

const projects = [
  {
    title: "AttendAI",
    image: attendAI,
    desc: "AI-powered smart attendance system that uses Face Recognition and Voice Recognition.",
    tags: ["Python", "Streamlit", "FastAPI", "Supabase"],
    live: "https://attend-ai-landing.vercel.app/",
    github: "https://github.com/KalyanSai956/attendai-app",
    gradient: "from-blue-500/20 via-cyan-500/10 to-indigo-500/20",
  },
  {
    title: "SmartHire ATS",
    image: SmartHire,
    desc: "AI-powered Applicant Tracking System that analyzes resumes.",
    tags: ["React", "FastAPI", "Python", "AI"],
    live: "#",
    github: "https://github.com/yourusername/SmartHireATS",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
  },
  {
    title: "MeetMind",
    image: MeetMind,
    desc: "MeetMind is an intelligent team meeting and collaboration platform.",
    tags: ["Python", "AI"],
    live: "#",
    github: "https://github.com/KalyanSai956/meetmind",
    gradient: "from-orange-500/20 via-red-500/10 to-yellow-500/20",
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
];

/* ---------- Small Components ---------- */

function Chip({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}

function LinkBtn({ href, children }) {
  const isExternal = href.startsWith("http");

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

/* ---------- Social Button ---------- */

function SocialButton({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex flex-col items-center gap-1.5"
    >
      <span
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-card
          shadow-sm
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:bg-muted
        "
      >
        {icon}
      </span>

      <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {label}
      </span>
    </a>
  );
}
/* ---------- App ---------- */

function App() {
  const { theme, toggle } = useTheme();
  const [visitorNumber, setVisitorNumber] = useState(null);

  useEffect(() => {
    const registerVisitor = async () => {
      const { data, error } = await supabase.rpc("increment_visitor_count");

      if (error) {
        console.error("Visitor counter error:", error);
        return;
      }

      setVisitorNumber(data);
    };

    registerVisitor();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar theme={theme} toggle={toggle} />

      <main id="main-content" className="mx-auto max-w-4xl px-6 py-5">
        {/* ---------- Hero ---------- */}

        <section className="flex flex-col gap-6">
          <div className="flex flex-wrap items-start gap-5">
            <img
              src={profileImg}
              alt="Pasupuleti Sai Kalyan — Full Stack Developer"
              width={88}
              height={88}
              className="h-24 w-24 rounded-full object-cover"
            />

            <div className="min-w-0 flex-1">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Pasupuleti Sai Kalyan
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">Backend &amp; AI Engineer</p>

              <span className="mt-2 inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_var(--accent-green)]" />
                Available for work
              </span>
            </div>
          </div>

          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Hi, I'm Pasupuleti Sai Kalyan — a Full-Stack Developer and AI Engineer who has shipped
            10+ projects across web apps, AI. I mostly work with{" "}
            <InlineTech name="JavaScript" abbr="JS" color="#F7DF1E" />,{" "}
            <InlineTech name="Python" abbr="Py" color="#3776AB" />,{" "}
            <InlineTech name="Java" abbr="J" color="#CE422B" />, and whatever gets the job done.
            Actively contributing to several open-source projects.
          </p>

          {/* ---------- Social Links ---------- */}

          <div className="flex flex-wrap items-start gap-5">
            <SocialButton
              href="https://github.com/KalyanSai956"
              label="GitHub"
              icon={
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.09-.74.09-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.13 3.19.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
              }
            />

            <SocialButton
              href="https://x.com/kalyanworkspace"
              label="X"
              icon={
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2H21l-6.52 7.45L22 22h-6.86l-4.79-6.27L4.8 22H2l7.02-8.02L2 2h6.98l4.35 5.75L18.244 2Zm-1.2 18h1.9L7.02 4H5.03l12.014 16Z" />
                </svg>
              }
            />

            <SocialButton
              href="https://www.linkedin.com/in/saikalyanpasupuleti/"
              label="LinkedIn"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="4" fill="#0A66C2" />

                  <path
                    d="M6.5 8.2C7.44 8.2 8.2 7.44 8.2 6.5C8.2 5.56 7.44 4.8 6.5 4.8C5.56 4.8 4.8 5.56 4.8 6.5C4.8 7.44 5.56 8.2 6.5 8.2Z"
                    fill="white"
                  />

                  <path d="M5.2 9.6H7.8V19.2H5.2V9.6Z" fill="white" />

                  <path
                    d="M10 9.6H12.5V10.9H12.54C12.89 10.25 13.75 9.25 15.7 9.25C18.4 9.25 18.9 11.03 18.9 13.34V19.2H16.3V14C16.3 12.76 16.27 11.17 14.57 11.17C12.84 11.17 12.58 12.52 12.58 13.92V19.2H10V9.6Z"
                    fill="white"
                  />
                </svg>
              }
            />

            <SocialButton
              href="mailto:kalyansai956@gmail.com"
              label="Gmail"
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Gmail M */}
                  <path
                    d="M3 6.5C3 5.67 3.67 5 4.5 5H5.2L12 10.1L18.8 5H19.5C20.33 5 21 5.67 21 6.5V18.5C21 19.33 20.33 20 19.5 20H17V9.15L12 12.9L7 9.15V20H4.5C3.67 20 3 19.33 3 18.5V6.5Z"
                    fill="#EA4335"
                  />

                  <path d="M3 6.5V18.5C3 19.33 3.67 20 4.5 20H7V9.15L3 6.5Z" fill="#4285F4" />

                  <path d="M21 6.5V18.5C21 19.33 20.33 20 19.5 20H17V9.15L21 6.5Z" fill="#34A853" />

                  <path d="M3 6.5L7 9.15V7.5L4.8 5.85C4.14 5.35 3 5.82 3 6.5Z" fill="#FBBC04" />
                </svg>
              }
            />
          </div>
        </section>

        {/* ---------- Section Navigation ---------- */}

        <nav className="sticky top-0 z-50 bg-background/95 mt-10 border-b border-border">
          <div className="flex items-center gap-2 overflow-x-auto">
            <a
              href="#skills"
              className="shrink-0 bg-muted px-4 py-2 font-semibold text-foreground transition-colors hover:bg-muted/80"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="shrink-0 px-6 py-3 font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="shrink-0 px-6 py-3 font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Experience
            </a>

            <a
              href="#education"
              className="shrink-0 px-6 py-3 font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Education
            </a>
          </div>
        </nav>

        {/* ---------- Skills ---------- */}

        <Section id="skills" eyebrow="TECH STACK">
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
                  px-3
                  py-1.5
                  text-xs
                  transition-all
                  duration-300
                  hover:bg-muted
                  hover:text-white
                "
                style={{
                  borderColor: `#${t.color}55`,
                  backgroundColor: `#${t.color}12`,
                }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${t.icon}/${t.color}`}
                  className="h-4 w-4"
                  alt=""
                />

                {t.name}
              </span>
            ))}
          </div>
        </Section>

        {/* ---------- Projects ---------- */}

        <Section id="projects" eyebrow="PROJECTS">
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="
                  group
                  overflow-hidden
                  
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
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-100"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-blue-400">
                    {p.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <a
                      href={p.live}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-foreground/30 hover:bg-muted"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Live
                    </a>

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
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

        {/* ---------- Experience ---------- */}

        <Section id="experience" eyebrow="EXPERIENCE">
          <ul className="mt-6 space-y-6">
            {experiences.map((e) => (
              <li key={e.company} className="flex gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-semibold ${e.color}`}
                >
                  {e.logo ? (
                    <img
                      src={e.logo}
                      alt={`${e.company} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    e.initials
                  )}
                </div>

                <div className="min-w-0 flex-1">
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

        {/* ---------- GitHub Activity ---------- */}

        <GithubActivity />

        {/* ---------- Education ---------- */}

        <Section id="education" eyebrow="EDUCATION">
          <div className="mt-6 space-y-0">
            {education.map((e, index) => (
              <div
                key={e.institution}
                className={`flex gap-4 py-5 ${
                  index !== education.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
                  <img
                    src={e.logo}
                    alt={`${e.institution} logo`}
                    className="h-full w-full object-contain p-1"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className="font-medium text-foreground">{e.institution}</span>

                    <span className="text-xs text-muted-foreground">{e.period}</span>
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------- Footer ---------- */}

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

          {visitorNumber !== null && (
            <p className="mt-5 text-xs text-muted-foreground">
              👁️ You are the{" "}
              <span className="font-semibold text-foreground">{visitorNumber}th</span> visitor
            </p>
          )}
        </footer>
      </main>
    </div>
  );
}

/* ---------- Inline Technology Badge ---------- */

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

/* ---------- Section ---------- */

function Section({ id, eyebrow, subtitle, children }) {
  return (
    <section id={id} className="mt-16 scroll-mt-24">
      <p className="text-xs font-medium tracking-widest text-muted-foreground">{eyebrow}</p>

      {subtitle && <p className="mt-1 text-sm text-muted-foreground/80">{subtitle}</p>}

      {children}
    </section>
  );
}

export default App;
