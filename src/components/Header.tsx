import { FileText, ArrowRight } from "lucide-react";
import Logo from "../Logo";

interface NavItem {
  id: string;
  label: string;
}

export default function Header(): React.JSX.Element {
  const nav: NavItem[] = [
    { id: "about", label: "About" },
    { id: "highlights", label: "Highlights" },
    { id: "projects", label: "Projects" },
    { id: "writing", label: "Writing" },
    { id: "contact", label: "Contact" },
  ];

  return (
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
  );
}
