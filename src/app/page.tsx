import { Inter } from "next/font/google"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PlatformsSection from "@/components/platforms-section"
import CredibleImpactSection from "@/components/credible-impact-section"
import TrustedBy from "@/components/TrustedBy"
import Footer from "@/components/Footer"
import LatestInsights from "@/components/latest-insights"
import CareersDiagonalSection from "@/components/careers-diagonal-section"
import Legacy from "@/components/legacy-hero"
import Leaders from "@/components/Leaders"
import Recognized from "@/components/recognized-work"
import LeadershipSection from "@/components/LeadershipSection"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function Home() {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Header />
      <main>
        <HeroSection />
        <PlatformsSection />
        <CredibleImpactSection />
        <TrustedBy/>
        <LeadershipSection />
        <Legacy/>
        <CareersDiagonalSection/>
        <LatestInsights/>
        <Footer/>
      </main>
    </div>
  )
}


