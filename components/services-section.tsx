"use client"

import { motion, FadeIn } from '@/components/motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dumbbell, Users, PersonStanding as Person, Scale, Trophy, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

const services = [
  {
    icon: <Dumbbell className="h-10 w-10 text-black" />,
    title: "Personal Training",
    description: "One-on-one coaching tailored to your specific goals, fitness level, and schedule.",
  },
  {
    icon: <Users className="h-10 w-10 text-black" />,
    title: "Group Classes",
    description: "High-energy group workouts including HIIT, strength training, and functional fitness.",
  },
  {
    icon: <Person className="h-10 w-10 text-black" />,
    title: "Online Coaching",
    description: "Expert guidance wherever you are with custom workout plans and virtual check-ins.",
  },
  {
    icon: <Scale className="h-10 w-10 text-black" />,
    title: "Nutrition Plans",
    description: "Personalized nutrition strategies to complement your training and maximize results.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-black" />,
    title: "Transformation Challenge",
    description: "8-week challenges with structured workouts, nutrition, and community support.",
  }
]

function ServiceCard({ icon, title, description, delay = 0 }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="neo-card h-full p-6 hover:cursor-pointer">
        <div className="w-16 h-16 bg-[#FFD100] rounded-none flex items-center justify-center mb-6 border-2 border-black">
          {icon}
        </div>
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-bold mb-3 uppercase text-black">{title}</CardTitle>
          <CardDescription className="text-black">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="p-0 mt-6">
          <Button 
            variant="ghost" 
            size="sm" 
            asChild 
            className="neo-button text-black hover:text-black"
          >
            <Link href="/services">
              Learn More
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover opacity-5"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/5746245/pexels-photo-5746245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: '100%',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
      
      <div className="container relative z-10">
        <SectionHeading 
          title="Our Services" 
          subtitle="Explore our range of fitness services designed to help you reach your goals and transform your life."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <FadeIn className="mt-12 text-center">
          <Button 
            asChild 
            size="lg" 
            className="neo-button text-black hover:text-black"
          >
            <Link href="/services">
              View All Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}