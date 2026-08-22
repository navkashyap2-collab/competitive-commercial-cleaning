import Hero from '../components/home/Hero.jsx'
import TrustMarquee from '../components/home/TrustMarquee.jsx'
import ServicesShowcase from '../components/home/ServicesShowcase.jsx'
import Process from '../components/home/Process.jsx'
import ServiceArea from '../components/home/ServiceArea.jsx'
import GoogleReviews from '../components/home/GoogleReviews.jsx'
import FinalCTA from '../components/home/FinalCTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServicesShowcase />
      <Process />
      <ServiceArea />
      <GoogleReviews />
      <FinalCTA />
    </>
  )
}
