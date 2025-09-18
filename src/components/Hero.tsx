import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Hero(): React.JSX.Element {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <svg className="w-48 h-48 md:w-64 md:h-64" viewBox="0 0 200 200">
              <defs>
                <clipPath id="circle-clip">
                  <circle cx="100" cy="100" r="95" />
                </clipPath>
              </defs>
              <image
                href="/img/headshot.png"
                x="-42"
                y="-20"
                width="285"
                height="285"
                clipPath="url(#circle-clip)"
                className="object-cover"
              />
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="none"
                stroke="#991D20"
                strokeWidth="3"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}