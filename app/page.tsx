import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { GithubActivityMarquee } from "@/components/github-activity-marquee"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { BlogsSection } from "@/components/blogs-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] pb-24 sm:pb-28">{/* Bottom padding for navigation */}
      <Navigation />
      <HeroSection />
      <GithubActivityMarquee />
      <ServicesSection />
      <PortfolioSection />
      <ExperienceSection />
      <BlogsSection />
      <Footer />
    </main>
  )
}
