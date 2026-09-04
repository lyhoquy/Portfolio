import { About, Experience, Skills } from "@/components/portfolio/profile-sections";
import { Contact, Footer } from "@/components/portfolio/contact";
import { Hero, SiteNav } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { WeatherMoments } from "@/components/portfolio/weather-moments";
import { projects } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#top">Skip to content</a>
      <SiteNav />
      <div id="top" className="page-shell">
        <Hero />
        <WeatherMoments />
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
