import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact(): React.JSX.Element {
  return (
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
  );
}