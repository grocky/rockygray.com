interface Highlight {
  title: string;
  period: string;
  bullets: string[];
}

export default function Highlights(): React.JSX.Element {
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

  return (
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
  );
}