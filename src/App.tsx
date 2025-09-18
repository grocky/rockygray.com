import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function LandingPage(): React.JSX.Element {

  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <Header />
      <Hero />
      <About />
      <Highlights />
      <Projects />
      <Writing />
      <Contact />
      <Footer />
    </div>
  );
}
