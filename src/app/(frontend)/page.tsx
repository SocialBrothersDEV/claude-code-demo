import Header from '@/components/Header'
import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import DataPrivacy from '@/components/DataPrivacy'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Team from '@/components/Team'
import FooterCTA from '@/components/FooterCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-driven-dark">
      <TopBar />
      <Header />
      <Hero />
      <WhyUs />
      <DataPrivacy />
      <Services />
      <Process />
      <Team />
      <FooterCTA />
      <Footer />
    </main>
  )
}
