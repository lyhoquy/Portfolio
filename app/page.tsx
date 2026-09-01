import { About, Experience, Skills } from "@/components/portfolio/profile-sections";
import { Contact, Footer } from "@/components/portfolio/contact";
import { Hero, SiteNav } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { projects } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#top">Skip to content</a>
      <SiteNav />
      <div id="top" className="page-shell">
        <Hero />
        <Projects projects={projects} />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
