import Hero from '@/components/hero'
import About from '@/components/about'
import ServicesSection from '@/components/services-section'
import TrainersSection from '@/components/trainers-section'
import Testimonials from '@/components/testimonials'
import Gallery from '@/components/gallery'
import Pricing from '@/components/pricing'
import ContactSection from '@/components/contact-section'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <TrainersSection />
      <Gallery />
      <Testimonials />
      <Pricing />
      <ContactSection />
    </>
  );
}