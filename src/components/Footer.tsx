export default function Footer(): React.JSX.Element {
  return (
    <footer className="py-10 text-center text-sm text-slate-500">
      &copy; {new Date().getFullYear()} Rocky Gray — <a className="text-slate-600 underline" href="https://github.com/grocky/rockygray.com">Built</a> with React & Tailwind
    </footer>
  );
}