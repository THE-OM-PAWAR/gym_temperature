"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from '@/components/motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Instagram, Facebook } from 'lucide-react'

const trainers = [
  {
    name: "Alex Rodriguez",
    role: "Head Coach",
    specialties: ["Strength Training", "Powerlifting"],
    image: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=800",
    social: {
      instagram: "#",
      facebook: "#"
    }
  },
  {
    name: "Sarah Johnson",
    role: "Fitness Coach",
    specialties: ["HIIT", "Nutrition"],
    image: "https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=800",
    social: {
      instagram: "#",
      facebook: "#"
    }
  },
  {
    name: "Marcus Chen",
    role: "Personal Trainer",
    specialties: ["Functional Training", "Mobility"],
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    social: {
      instagram: "#",
      facebook: "#"
    }
  },
]

export default function TrainersSection() {
  return (
    <section className="py-20 bg-muted/10 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-repeat opacity-5" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 0 
        }}
      />
      
      <div className="container relative z-10">
        <SectionHeading 
          title="Meet Our Trainers" 
          subtitle="Our expert trainers are passionate about helping you achieve your fitness goals."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-0 overflow-hidden group">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <h3 className="text-2xl font-bold">{trainer.name}</h3>
                    <p className="text-chart-1 font-medium">{trainer.role}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {trainer.specialties.map((specialty, i) => (
                        <span key={i} className="text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Link href={trainer.social.instagram} passHref>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20">
                          <Instagram className="h-4 w-4" />
                          <span className="sr-only">Instagram</span>
                        </Button>
                      </Link>
                      <Link href={trainer.social.facebook} passHref>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20">
                          <Facebook className="h-4 w-4" />
                          <span className="sr-only">Facebook</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <CardFooter className="bg-card">
                  <Button className="w-full bg-chart-1 hover:bg-chart-1/90">
                    Book a Session
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/trainers">View All Trainers</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}