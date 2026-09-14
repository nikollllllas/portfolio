import { AboutSection } from '#/components/portfolio/about-section'
import { ContactSection } from '#/components/portfolio/contact-section'
import { ExperienceSection } from '#/components/portfolio/experience-section'
import { HeroSection } from '#/components/portfolio/hero-section'
import { ProjectsSection } from '#/components/portfolio/projects-section'

export function HomePage() {
  return (
    <main className="relative z-10">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
