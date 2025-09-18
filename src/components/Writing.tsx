import { ExternalLink } from "lucide-react";

interface Post {
  title: string;
  href: string;
  date: string;
}

export default function Writing(): React.JSX.Element {
  const posts: Post[] = [
    { title: "Mice Detetion in Go Using OpenCV and MachineBox", href: "https://blog.rockygray.com/posts/mouse-detective/", date: "June 8, 2020" },
    { title: "Refactoring is good for your code and databases too!", href: "https://blog.rockygray.com/posts/database-refactoring/", date: "May 20, 2019" },
  ];

  return (
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
  );
}