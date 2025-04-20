import { HeroSection } from "@/components/home/components/HeroSection"
import { FeaturesSection } from "@/components/home/components/FeaturesSection"
import { StatisticsSection } from "@/components/home/components/StatisticsSection"
import { HowItWorksSection } from "@/components/home/components/HowItWorksSection"
import { PartnersSection } from "@/components/home/components/PartnersSection"
import { CTASection } from "@/components/home/components/CTASection"

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatisticsSection />
        <HowItWorksSection />
        <PartnersSection />
        <CTASection />
      </main>
    </>
  )
}
