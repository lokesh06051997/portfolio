import React, { useEffect, useMemo, useState } from "react";

// Single-file React + Tailwind portfolio
// How to use in a Vite app:
// 1) Create app: npm create vite@latest lokesh-portfolio -- --template react
// 2) cd lokesh-portfolio && npm i && npm i -D tailwindcss postcss autoprefixer && npx tailwindcss init -p
// 3) Configure Tailwind (tailwind.config.js -> content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"])
// 4) Add to src/index.css: @tailwind base; @tailwind components; @tailwind utilities;
// 5) Replace App.jsx contents with this file's default export OR create Portfolio.jsx and import it in App.jsx
// 6) Place Lokesh_Resume.pdf in public/ (or adjust the link below)
// 7) npm run dev

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
);

const Tag = ({ children }) => (
  <span className="px-3 py-1 rounded-full border text-sm leading-none inline-block">
    {children}
  </span>
);

const Pill = ({ children }) => (
  <span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 text-xs font-medium">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border shadow-sm p-5 md:p-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
    {children}
  </div>
);

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent dark:via-white/20 my-8" />
);

const data = {
  name: "Lokesh B",
  role: "Data Engineering & Project Management Professional",
  location: "Chennai, India",
  phone: "+91-7904771198",
  email: "lokesh.b07@gmail.com",
  linkedin: "https://www.linkedin.com/in/lokeshb07",
  resumeUrl: "/Lokesh_B_Resume.pdf", // put the file in /public
  tagline: "Bridging business strategy with scalable data systems",
  summary:
    "Results-driven professional with 5+ years designing and delivering scalable data systems and leading Digital Twin and SaaS initiatives. Proven in Python, Kafka, Delta Lake, gRPC, and AWS with end-to-end ownership from architecture to delivery.",
  projects: [
    {
      title: "Boiler Digital Twin",
      role: "Data Engineer & Project Manager",
      period: "2021 – Present",
      tech: ["Python", "gRPC", "WebSocket", "Cassandra", "APIs"],
      highlights: [
        "Designed overall system architecture and storage planning",
        "Built Python APIs for real-time integration and analytics",
        "Drove end-to-end delivery aligned to business outcomes",
        "Facilitated user workshops and iterative feedback",
      ],
      impact:
        "Optimized operations and enabled cost reductions through real-time insights and robust data pipelines.",
    },
    {
      title: "Copper Twin (POC → App)",
      role: "Strategic Planner • Tech Lead • PM",
      period: "2023 – 2024",
      tech: ["Kafka", "Delta Lake", "gRPC", "Python", "Polars"],
      highlights: [
        "Defined product strategy and technology stack from scratch",
        "Optimized pipelines for high-throughput processing",
        "Developed POCs to validate architecture & scalability",
        "Mentored team; aligned milestones and timelines",
      ],
      impact:
        "Delivered a modular, high-performance pipeline design, ready for scalable production rollout.",
    },
    {
      title: "SaaS Applications (Multiple)",
      role: "Project Manager & Database Specialist",
      period: "2021 – 2025",
      tech: ["PostgreSQL", "SQL Server", "AWS", "Docker"],
      highlights: [
        "Church Management, HR/Employee, Laboratory, Donor Apps",
        "Requirements → Delivery with agile ceremonies",
        "Change request analysis and feasibility evaluation",
        "DB schema optimization, performance tuning",
      ],
      impact:
        "Consistent delivery predictability, smoother releases, and improved stakeholder satisfaction.",
    },
  ],
  skills: {
    core: [
      "Data Engineering",
      "ETL Pipeline Development",
      "Digital Twin Implementation",
      "API Development (gRPC/REST/WebSocket)",
      "Cloud Deployment & Scalability",
      "Project & Team Management (Agile)",
    ],
    tech: [
      "Python",
      "SQL",
      "Polars",
      "Pandas",
      "Delta Lake",
      "PySpark",
      "Kafka",
      "MQTT",
      "Redis",
      "PostgreSQL",
      "Cassandra",
      "SQL Server",
      "FastAPI",
      "Flask",
      "Apache Airflow",
      "AWS (EC2, ECS, S3)",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "ELK Stack",
    ],
  },
  experience: [
    {
      company: "EinNel Technologies",
      title: "Project Manager – Software Development",
      location: "Chennai",
      period: "Mar 2021 – Present",
      bullets: [
        "Led Digital Twin & SaaS deliveries from architecture to rollout",
        "Cross-functional stakeholder alignment & crisis management",
        "Mentored engineers; improved delivery velocity and quality",
      ],
    },
    {
      company: "Sicagen India Ltd",
      title: "Graduate Engineer Trainee",
      location: "Chennai",
      period: "Jun 2018 – May 2019",
      bullets: [
        "Commissioning & maintenance of speed governors",
        "Pre-commissioning process setup and schedules",
        "Commissioned controller at MAPS, Kalpakkam",
      ],
    },
  ],
  education: [
    {
      school: "Prathyusha Engineering College",
      degree: "B.E. Electrical & Electronics Engineering",
      score: "CGPA 7.06",
      year: "2018",
    },
  ],
};

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.title = `${data.name} • Portfolio`;
  }, []);

  const nav = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  return (
    <div className={`${dark ? "dark" : ""} min-h-screen w-full bg-gradient-to-b from-white to-slate-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100 scroll-smooth`}> 
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/70 dark:bg-neutral-950/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <a href="#home" className="font-bold tracking-tight text-lg md:text-xl">{data.name}</a>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-sm"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={data.resumeUrl}
              className="px-3 py-2 rounded-xl border hover:shadow-sm text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <button
              onClick={() => setDark((d) => !d)}
              className="px-3 py-2 rounded-xl border hover:shadow-sm text-sm"
              aria-label="Toggle dark mode"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section id="home" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              {data.name}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-neutral-600 dark:text-neutral-300">
              {data.role}
            </p>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              {data.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${data.email}`} className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">
                Email Me
              </a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border">
                LinkedIn
              </a>
              <a href={data.resumeUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border">
                Download Resume
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-neutral-600 dark:text-neutral-300">
              <Tag>{data.location}</Tag>
              <Tag>{data.phone}</Tag>
              <Tag>{data.email}</Tag>
            </div>
          </div>
          <Card>
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {data.summary}
            </p>
            <Divider />
            <div className="flex flex-wrap gap-2">
              {["Python", "Kafka", "Delta Lake", "gRPC", "AWS", "Docker"].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">Digital Twin & SaaS deliveries with measurable impact.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {data.projects.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{p.role} • {p.period}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {p.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-neutral-700 dark:text-neutral-300">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <Divider />
              <p className="text-sm italic text-neutral-600 dark:text-neutral-400">{p.impact}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold">Core</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.skills.core.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="font-semibold">Technologies</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.skills.tech.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
        <div className="mt-6 grid gap-6">
          {data.experience.map((e) => (
            <Card key={e.company}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{e.title} – {e.company}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{e.location} • {e.period}</p>
                </div>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-neutral-700 dark:text-neutral-300">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
        <div className="mt-6 grid gap-6">
          {data.education.map((ed) => (
            <Card key={ed.school}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{ed.degree}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{ed.school} • {ed.year}</p>
                </div>
                <Pill>{ed.score}</Pill>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Let’s Connect</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Open to roles in Data Engineering, Platform Engineering, or Technical Program Management.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold">Email</h3>
            <a className="mt-2 inline-block underline" href={`mailto:${data.email}`}>{data.email}</a>
          </Card>
          <Card>
            <h3 className="font-semibold">Phone</h3>
            <a className="mt-2 inline-block underline" href={`tel:${data.phone}`}>{data.phone}</a>
          </Card>
          <Card>
            <h3 className="font-semibold">LinkedIn</h3>
            <a className="mt-2 inline-block underline" href={data.linkedin} target="_blank" rel="noreferrer">{data.linkedin}</a>
          </Card>
        </div>
        <div className="mt-10 text-center">
          <a href="#home" className="inline-block px-4 py-2 rounded-xl border">
            Back to top
          </a>
        </div>
      </Section>

      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {data.name}. Built with React & Tailwind.
      </footer>
    </div>
  );
}
