import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Sparkles,
  Smartphone, Server, Shield, Brain, Code2, Database, Zap, Award,
  GraduationCap, Calendar, ExternalLink, Download, Send,
} from "lucide-react";
import kashifPortrait from "@/assets/kashif.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kashif Hussain — Flutter Developer & AI-Focused Mobile Engineer" },
      { name: "description", content: "Portfolio of Kashif Hussain, a Flutter developer in Pakistan building AI-powered mobile apps, secure Laravel REST APIs, and production-grade end-to-end systems." },
      { property: "og:title", content: "Kashif Hussain — Flutter Developer & AI-Focused Mobile Engineer" },
      { property: "og:description", content: "Flutter, Laravel, Firebase, and AI engineering — selected projects, technical stack, and contact." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Kashif Hussain — Flutter Developer" },
      { name: "twitter:description", content: "Flutter, Laravel, Firebase, and AI engineering — selected projects and stack." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kashif Hussain",
          jobTitle: "Flutter Developer",
          email: "mailto:ranakashifhussain5@gmail.com",
          telephone: "+92-301-494-7564",
          address: { "@type": "PostalAddress",  addressCountry: "PK" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Baba Guru Nanak University" },
          sameAs: ["https://linkedin.com/in/rana-kashif-hussain-392a4036b"],
          knowsAbout: ["Flutter", "Dart", "Laravel", "REST API", "Firebase", "MySQL", "JWT", "Cybersecurity"],
        }),
      },
    ],
  }),
  component: Index,
});

const projects = [
  {
    name: "GradifyAI",
    tag: "AI · Mobile",
    blurb: "AI-powered assignment checker with NLP grading, OCR document scanning, voice feedback, and offline submission sync.",
    stack: ["Flutter", "Dart", "REST API", "Firebase", "OCR"],
    accent: "from-[oklch(0.7_0.22_250)] to-[oklch(0.65_0.27_295)]",
    featured: true,
  },
  {
    name: "E-Commerce Platform",
    tag: "Full-stack",
    blurb: "Full-stack commerce engine with JWT auth, admin dashboard, payment gateway, and hardened SQL-injection defenses.",
    stack: ["Laravel", "MySQL", "JWT"],
    accent: "from-[oklch(0.65_0.27_295)] to-[oklch(0.82_0.15_210)]",
  },
  {
    name: "Google Maps Clone",
    tag: "Mobile · GPS",
    blurb: "Real-time GPS tracking with dynamic markers and turn-by-turn navigation via Google Maps APIs.",
    stack: ["Flutter", "Maps API", "GPS"],
    accent: "from-[oklch(0.82_0.15_210)] to-[oklch(0.7_0.22_250)]",
  },
  {
    name: "COVID-19 Tracker",
    tag: "Data Viz",
    blurb: "Live global statistics with interactive fl_chart visualizations and clean Provider state management.",
    stack: ["Flutter", "fl_chart", "Provider"],
    accent: "from-[oklch(0.7_0.22_250)] to-[oklch(0.82_0.15_210)]",
  },
  {
    name: "Cybersecurity & ML Research",
    tag: "Research",
    blurb: "Intrusion-detection models with Scikit-learn plus hands-on labs in Wireshark, Nmap, and Kali Linux.",
    stack: ["Python", "Scikit-learn", "Kali"],
    accent: "from-[oklch(0.65_0.27_295)] to-[oklch(0.7_0.22_250)]",
  },
];

const skills = [
  { icon: Smartphone, label: "Mobile", items: ["Flutter", "Dart", "Firebase", "MVVM"] },
  { icon: Server, label: "Backend", items: ["Laravel", "REST", "JWT", "WebSockets"] },
  { icon: Database, label: "Data", items: ["MySQL", "SQL", "Realtime DB"] },
  { icon: Shield, label: "Security", items: ["Encryption", "Validation", "SQLi Prevention"] },
  { icon: Brain, label: "AI / ML", items: ["NLP", "Scikit-learn", "IDS"] },
  { icon: Code2, label: "Languages", items: ["Dart", "Python", "PHP", "JS", "SQL"] },
];

const timeline = [
  { year: "2026", title: "BS Computer Science — Expected", place: "Baba Guru Nanak University", desc: "Information Security, AI, Networks, Software Engineering." },
  { year: "2024", title: "ICAST-2024 Conference", place: "BGNU · Hybrid", desc: "Attendee at the 1st International Conference on Applied Sciences & Technology." },
  { year: "2024", title: "AI for Everyone Seminar", place: "Baba Guru Nanak University", desc: "Certificate of participation in AI fundamentals seminar." },
  { year: "2022", title: "BS Computer Science — Started", place: "Baba Guru Nanak University", desc: "Began the BSCS journey with focus on systems and security." },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function MagneticButton({ children, href, primary }: { children: React.ReactNode; href: string; primary?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.25;
    const y = (e.clientY - r.top - r.height / 2) * 0.25;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,box-shadow] duration-300 will-change-transform ${
        primary
          ? "bg-gradient-to-r from-[oklch(0.7_0.22_250)] to-[oklch(0.65_0.27_295)] text-white shadow-[0_0_40px_-10px_oklch(0.7_0.22_250/0.7)] hover:shadow-[0_0_60px_-5px_oklch(0.7_0.22_250/0.9)]"
          : "glass text-foreground hover:border-[oklch(0.7_0.22_250/0.5)]"
      }`}
    >
      {children}
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled ? "glass mx-4 md:mx-auto" : "mx-4 md:mx-auto"}`}>
        <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[oklch(0.7_0.22_250)] to-[oklch(0.65_0.27_295)] text-xs text-white shadow-[0_0_20px_oklch(0.7_0.22_250/0.5)]">K</span>
          <span className="hidden sm:inline">Kashif Hussain</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#journey" className="hover:text-foreground transition-colors">Journey</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-foreground/10 px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground/20">
          Let's talk <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[oklch(0.7_0.22_250)]/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute right-10 top-40 h-[300px] w-[300px] rounded-full bg-[oklch(0.65_0.27_295)]/20 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for Flutter & Junior Software Engineer roles
        </div>

        <h1 className="animate-fade-up mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl" style={{ animationDelay: "0.1s" }}>
          Engineering <span className="text-gradient animate-gradient">production-grade</span><br />
          mobile software.
        </h1>

        <p className="animate-fade-up mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "0.2s" }}>
          I'm <span className="text-foreground">Kashif Hussain</span>, a Flutter developer focused on secure architecture, Laravel REST APIs, and AI-integrated features. I design and ship end-to-end systems — from mobile client to backend — with an emphasis on reliability, security, and clean engineering.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.3s" }}>
          <MagneticButton href="#work" primary>
            View case studies <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
          <MagneticButton href="#contact">
            <Mail className="h-4 w-4" /> Contact
          </MagneticButton>
        </div>

        <div className="animate-fade-up mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground" style={{ animationDelay: "0.4s" }}>
          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Warburton, Pakistan</span>
          <span className="flex items-center gap-2"><GraduationCap className="h-3.5 w-3.5" /> BSCS · Baba Guru Nanak University</span>
          <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> Flutter · Laravel · AI</span>
        </div>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-sm lg:max-w-none" style={{ animationDelay: "0.25s" }}>
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[oklch(0.7_0.22_250)]/40 via-[oklch(0.65_0.27_295)]/30 to-transparent blur-3xl" />
          <div className="relative glass overflow-hidden rounded-[2rem] p-2">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[oklch(0.7_0.22_250)]/20 to-[oklch(0.65_0.27_295)]/20">
              <img
                src={kashifPortrait}
                alt="Portrait of Kashif Hussain, Flutter developer"
                loading="eager"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl glass px-4 py-2.5 text-xs">
                <div>
                  <div className="font-semibold text-foreground">Kashif Hussain</div>
                  <div className="text-muted-foreground">Flutter · Laravel · AI</div>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] font-medium text-emerald-300">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "5+", l: "Shipped projects" },
    { v: "4 yrs", l: "Engineering practice" },
    { v: "10+", l: "Technologies mastered" },
    { v: "BSCS", l: "Computer Science" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 80}>
            <div className="glass glass-hover rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient md:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected Work</div>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">A focused body of <span className="text-gradient">engineering work.</span></h2>
          </div>
          <div className="hidden text-sm text-muted-foreground md:block">Mobile  ·  Backend  ·  AI</div>
        </div>
      </Reveal>

      <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[260px_260px_260px]">
        {/* Featured */}
        <Reveal className="md:col-span-4 md:row-span-2" delay={0}>
          <ProjectCard project={projects[0]} large />
        </Reveal>
        <Reveal className="md:col-span-2" delay={100}>
          <ProjectCard project={projects[1]} />
        </Reveal>
        <Reveal className="md:col-span-2" delay={150}>
          <ProjectCard project={projects[2]} />
        </Reveal>
        <Reveal className="md:col-span-3" delay={200}>
          <ProjectCard project={projects[3]} />
        </Reveal>
        <Reveal className="md:col-span-3" delay={250}>
          <ProjectCard project={projects[4]} />
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project, large }: { project: typeof projects[0]; large?: boolean }) {
  return (
    <article className={`group glass glass-hover relative h-full overflow-hidden rounded-3xl p-6 md:p-8`}>
      <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`} />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <span className="rounded-full border border-border bg-background/40 px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">{project.tag}</span>
          <ExternalLink className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
        <h3 className={`mt-auto pt-12 font-bold tracking-tight ${large ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
          {project.name}
        </h3>
        <p className={`mt-3 text-muted-foreground ${large ? "text-base md:text-lg max-w-xl" : "text-sm"}`}>
          {project.blurb}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="rounded-md bg-foreground/5 px-2 py-1 font-mono text-[10px] text-muted-foreground">{s}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Technical Toolkit</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">A stack built for <span className="text-gradient">velocity and security.</span></h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.label} delay={i * 60}>
            <div className="glass glass-hover group h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.7_0.22_250)]/20 to-[oklch(0.65_0.27_295)]/20 ring-1 ring-[oklch(0.7_0.22_250)]/30 transition-all group-hover:scale-110">
                  <s.icon className="h-5 w-5 text-[oklch(0.78_0.18_265)]" />
                </div>
                <h3 className="text-lg font-semibold">{s.label}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.items.map((t) => (
                  <span key={t} className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Background</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Education & professional milestones.</h2>
        </div>
      </Reveal>
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.7_0.22_250)]/60 via-[oklch(0.65_0.27_295)]/30 to-transparent md:left-1/2" />
        <div className="space-y-8">
          {timeline.map((t, i) => (
            <Reveal key={t.title + i} delay={i * 80}>
              <div className={`relative flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-[oklch(0.7_0.22_250)] shadow-[0_0_20px_oklch(0.7_0.22_250/0.8)] md:left-1/2" />
                <div className="md:w-1/2" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass glass-hover rounded-2xl p-5">
                    <div className="flex items-center gap-2 text-xs text-[oklch(0.78_0.18_265)]">
                      <Calendar className="h-3.5 w-3.5" /> {t.year}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{t.title}</h3>
                    <div className="text-sm text-muted-foreground">{t.place}</div>
                    <p className="mt-2 text-sm text-muted-foreground/80">{t.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[oklch(0.7_0.22_250)]/30 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[oklch(0.65_0.27_295)]/30 blur-3xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get in touch</div>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              Let's build something <span className="text-gradient">exceptional.</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground md:text-lg">
              Currently open to Flutter Developer Intern and Junior Software Engineer opportunities. I respond to every inquiry within 24 hours.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ContactRow icon={Mail} label="Email" value="ranakashifhussain5@gmail.com" href="mailto:ranakashifhussain5@gmail.com" />
              <ContactRow icon={Phone} label="Phone" value="+92 301 494 7564" href="tel:+923014947564" />
              <ContactRow icon={Linkedin} label="LinkedIn" value="rana-kashif-hussain" href="https://linkedin.com/in/rana-kashif-hussain-392a4036b" />
              <ContactRow icon={MapPin} label="Location" value="Warburton, Pakistan" />
            </div>

            <div className="mt-10">
              <MagneticButton href="mailto:ranakashifhussain5@gmail.com" primary>
                <Send className="h-4 w-4" /> Send a message
              </MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass glass-hover flex items-center gap-4 rounded-2xl p-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.7_0.22_250)]/20 to-[oklch(0.65_0.27_295)]/20 ring-1 ring-[oklch(0.7_0.22_250)]/30">
        <Icon className="h-4 w-4 text-[oklch(0.82_0.15_265)]" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="border-t border-border/50 mt-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-gradient-to-br from-[oklch(0.7_0.22_250)] to-[oklch(0.65_0.27_295)] text-[10px] font-bold text-white">K</span>
          © 2026 Kashif Hussain. All rights reserved.
        </div>
        <div className="font-mono text-[11px]">Designed & engineered in Pakistan</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Work />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
