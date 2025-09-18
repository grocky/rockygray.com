import { Briefcase, Code2, PenTool, ArrowRight, Trophy, Award } from "lucide-react";

interface Achievement {
  icon: React.JSX.Element;
  title: string;
  desc: string;
}

export default function About(): React.JSX.Element {
  const achievements: Achievement[] = [
    { icon: <Trophy className="w-5 h-5" />, title: "Leadership & Recognition", desc: "Selected for leadership programs and recognized for cross-org platform impact." },
    { icon: <Award className="w-5 h-5" />, title: "Patents & Awards", desc: "Patents and awards in platform engineering and system design (see resume)." },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 text-slate-700">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
          <p className="mt-4">
            I'm based in Fairfax Station, VA. Over my career, I've focused on platform engineering, system design, and building teams that ship secure, reliable APIs. My leadership style is structured, collaborative, and outcome‑driven—with clear OKRs, crisp design docs, and healthy feedback loops.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex gap-2"><Briefcase className="w-5 h-5 mt-0.5 text-slate-500" /> Engineering Manager, Ads API Platform — Reddit</li>
            <li className="flex gap-2"><Code2 className="w-5 h-5 mt-0.5 text-slate-500" /> Strengths: DDD, OLEP, transactional outbox, reliability and API governance</li>
            <li className="flex gap-2"><PenTool className="w-5 h-5 mt-0.5 text-slate-500" /> Community: Commisioner for youth basketball and poker organizer</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <div className="bg-gray-200 rounded-2xl border border-slate-200 p-5 shadow-sm">
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
  );
}
