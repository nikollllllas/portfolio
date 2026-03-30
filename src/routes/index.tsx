import { createFileRoute } from '@tanstack/react-router'
import { AboutSection } from '#/components/portfolio/about-section'
import { ContactSection } from '#/components/portfolio/contact-section'
import { HeroSection } from '#/components/portfolio/hero-section'
import { ProjectsSection } from '#/components/portfolio/projects-section'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <>
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}
