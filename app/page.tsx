import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">

        {/* ── Hero ── */}
        <Hero />

        {/* ── About ── */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 70% 50% at 0% 50%, rgba(0,229,192,0.06) 0%, transparent 70%)",
          }} />
          <About id="about" />
        </div>

        {/* ── Skills ── */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 60% 60% at 100% 50%, rgba(168,85,247,0.07) 0%, transparent 70%)",
          }} />
          <Skills id="skills" />
        </div>

        {/* ── Experience ── */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)",
          }} />
          <Experience id="experience" />
        </div>

        {/* ── Projects ── */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 80% 60% at 80% 30%, rgba(0,229,192,0.05) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 10% 80%, rgba(168,85,247,0.05) 0%, transparent 60%)",
          }} />
          <Projects id="projects" />
        </div>

        {/* ── Education — has its own full photo background ── */}
        <Education id="education" />

        {/* ── Certifications ── */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,192,0.06) 0%, transparent 70%)",
          }} />
          <Certifications />
        </div>

        {/* ── Achievements ── */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 50% 60% at 90% 50%, rgba(168,85,247,0.07) 0%, transparent 70%)",
          }} />
          <Achievements />
        </div>

        {/* ── Tech Stack ── */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,229,192,0.05) 0%, transparent 70%)",
          }} />
          <TechStack />
        </div>

        {/* ── Contact ── */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 0% 100%, rgba(0,229,192,0.06) 0%, transparent 60%)",
          }} />
          <Contact id="contact" />
        </div>

        <Footer />
      </main>
    </>
  );
}
