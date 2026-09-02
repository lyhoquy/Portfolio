import { HowIBuild } from "@/components/portfolio/how-i-build";
import { Contact, Footer } from "@/components/portfolio/contact";
import { Hero, SiteNav } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/profile-sections";
import { Projects } from "@/components/portfolio/projects";
import { projects } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#top">Skip to content</a>
      <header className="site-header">
        <SiteNav />
      </header>
      <div id="top" className="page-shell">
        <Hero />
        <Projects projects={projects} />
        <HowIBuild />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
