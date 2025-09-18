import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  tech: string;
  desc: string;
  link: string;
}

export default function Projects(): React.JSX.Element {
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

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects & Ventures</h2>
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
  );
}