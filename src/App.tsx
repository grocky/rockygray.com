import { motion } from "motion/react";
import { Mail, Linkedin, Github, ExternalLink, FileText, ArrowRight, Award, Trophy, Briefcase, Code2, PenTool } from "lucide-react";
import Logo from "./Logo";

interface NavItem {
  id: string;
  label: string;
}

interface Highlight {
  title: string;
  period: string;
  bullets: string[];
}

interface Achievement {
  icon: React.JSX.Element;
  title: string;
  desc: string;
}

interface Project {
  title: string;
  tech: string;
  desc: string;
  link: string;
}

interface Post {
  title: string;
  href: string;
  date: string;
}

export default function LandingPage(): React.JSX.Element {
  const nav: NavItem[] = [
    { id: "about", label: "About" },
    { id: "highlights", label: "Highlights" },
    { id: "projects", label: "Projects" },
    { id: "writing", label: "Writing" },
    { id: "contact", label: "Contact" },
  ];

  const highlights: Highlight[] = [
    {
      title: "Engineering Manager, Ads API Platform — Reddit",
      period: "Dec 2024 – Present",
      bullets: [
        "Lead platform teams enabling partner integrations, sales-tools infra, and large-scale API reliability.",
        "Drove initiatives like Ads API Gateway Validation, Rate Limit Redesign, and System Users decoupling.",
        "Scaled ways-of-working: OKRs, PPPs, design reviews, and cross-functional execution.",
      ],
    },
    {
      title: "System Design & Reliability",
      period: "Career Focus",
      bullets: [
        "Extensive experience building high-availability systems and APIs at scale.",
        "Strong emphasis on architecture clarity (DDD, OLEP, transactional outbox).",
      ],
    },
  ];

  const achievements: Achievement[] = [
    { icon: <Trophy className="w-5 h-5" />, title: "Leadership & Recognition", desc: "Selected for leadership programs and recognized for cross-org platform impact." },
    { icon: <Award className="w-5 h-5" />, title: "Patents & Awards", desc: "Patents and awards in platform engineering and system design (see resume)." },
  ];

  const projects: Project[] = [
    {
      title: "Poker Ledger (Web App)",
      tech: "React · Go · MySQL · Tailwind",
      desc: "App for poker hosts to manage buy-ins/cash-outs with transactional-outbox and DDD patterns.",
      link: "https://www.pokerledger.club",
    },
    {
      title: "Community Leadership",
      tech: "Burke Basketball",
      desc: "Boys commisioner overeeing 8-10 youth leagues from grade 3 through high school.",
      link: "#",
    },
    {
      title: "Northern Virginia Poker Club",
      tech: "Poker Club",
      desc: "Organizer and host of monthly poker games in Northern Virginia since 2021.",
      link: "https://northernvirginiapoker.club",
    },
  ];

  const posts: Post[] = [
    { title: "Mice Detetion in Go Using OpenCV and MachineBox", href: "https://blog.rockygray.com/posts/mouse-detective/", date: "June 8, 2020" },
    { title: "Refactoring is good for your code and databases too!", href: "https://blog.rockygray.com/posts/database-refactoring/", date: "May 20, 2019" },
  ];

  return (
    <div className="min-h-screen text-slate-900 bg-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-semibold text-lg">
            <Logo
              containerClass="w-8 h-12"
              fillColor="#991D20"
            />
            Rocky Gray
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-slate-700 text-slate-600">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://resume.rockygray.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50">
              <FileText className="w-4 h-4" /> Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl text-white px-3 py-1.5 text-sm hover:opacity-90" style={{backgroundColor: '#991D20'}}>
              Contact <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-widest text-slate-500">Engineering Leader • Builder • Community Organizer</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
              I build scalable platforms and high‑performing teams.
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Engineering Manager at Reddit. I design reliable systems, lead platform programs for the Ads API, and foster communities around technology, poker, and youth sports.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://resume.rockygray.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl text-white px-5 py-2.5 text-sm hover:opacity-90" style={{backgroundColor: '#991D20'}}>
                View Resume <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-2.5 text-sm hover:bg-slate-50">
                See Projects <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
            <p className="mt-4 text-slate-700">
              I'm based in Fairfax Station, VA. Over my career, I've focused on platform engineering, system design, and building teams that ship secure, reliable APIs. My leadership style is structured, collaborative, and outcome‑driven—with clear OKRs, crisp design docs, and healthy feedback loops.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex gap-2"><Briefcase className="w-5 h-5 mt-0.5 text-slate-500" /> Engineering Manager, Ads API Platform — Reddit</li>
              <li className="flex gap-2"><Code2 className="w-5 h-5 mt-0.5 text-slate-500" /> Strengths: DDD, OLEP, transactional outbox, reliability and API governance</li>
              <li className="flex gap-2"><PenTool className="w-5 h-5 mt-0.5 text-slate-500" /> Community: Commisioner for youth basketball and poker organizer</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-medium">Accomplishments</h3>
              <div className="mt-4 space-y-4">
                {achievements.map((a, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 text-slate-600">{a.icon}</div>
                    <div>
                      <div className="font-medium">{a.title}</div>
                      <p className="text-sm text-slate-600">{a.desc}</p>
                    </div>
                  </div>
                ))}
                <a href="https://resume.rockygray.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
                  See full list on my resume <ArrowRight className="w-4 h-4 transition -translate-x-0 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights (Career) */}
      <section id="highlights" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Professional Highlights</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <span className="text-xs text-slate-500">{item.period}</span>
                </div>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
                  {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Projects & Ventures</h2>
          {/* <button className="text-sm text-slate-600 hover:text-slate-900">View all</button> */}
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{p.title}</h3>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
              </div>
              <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">{p.tech}</p>
              <p className="mt-3 text-sm text-slate-700">{p.desc}</p>
              <div className="mt-4">
                <a href={p.link} className="text-sm text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">Learn more <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Writing & Talks</h2>
            <a href="https://blog.rockygray.com" target="_blank" rel="noreferrer" className="text-sm text-slate-600 hover:text-slate-900">Visit blog</a>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <a key={i} href={post.href} target="_blank" rel="noreferrer" className="block rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                <div className="text-sm text-slate-500">{post.date}</div>
                <div className="mt-1 font-medium">{post.title}</div>
                <div className="mt-2 text-sm text-slate-600">Read on blog <ExternalLink className="inline w-3 h-3 ml-1" /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200 p-8 md:p-10 bg-gradient-to-br from-white to-slate-50">
          <h2 className="text-2xl md:text-3xl font-semibold">Let's connect</h2>
          <p className="mt-3 max-w-2xl text-slate-700">Open to advising, speaking, and collaborations around platform engineering, API ecosystems, and community building.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:rocky.grayjr@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"><Mail className="w-4 h-4" /> Email</a>
            <a href="https://www.linkedin.com/in/grocky" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"><Linkedin className="w-4 h-4" /> LinkedIn</a>
            <a href="https://github.com/grocky" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"><Github className="w-4 h-4" /> GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Rocky Gray — <a className="text-slate-600 underline" href="https://github.com/grocky/rockygray.com">Built</a> with React & Tailwind
      </footer>
    </div>
  );
}
