"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ChevronRight, ChevronDown, ArrowRight } from 'lucide-react'
import { motion } from '@/components/motion'

const backgroundImages = [
  'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
  'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
  'https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
]

export default function Hero() {
  const [currentImage, setCurrentImage] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Background image slider */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 bg-cover bg-center",
            index === currentImage ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: `url(${image})`,
            zIndex: 0
          }}
        />
      ))}

      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black/60"
        style={{ zIndex: 1 }}
      />

      <div className="container relative z-10 px-6 sm:px-8 lg:px-12 flex items-center justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="inline-block bg-[#FFD100] px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-bold text-black">TRANSFORM YOUR BODY</span>
              </div>

              <h1 className="font-bebas text-7xl sm:text-8xl md:text-9xl tracking-wide text-white">
                TRAIN LIKE A
                <span className="text-[#FFD100] block mt-2">CHAMPION</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-xl">
                Join AlphaCore Fitness and experience the perfect blend of science-based training 
                and high-energy motivation to achieve your fitness goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="neo-button text-black hover:text-black text-lg h-14 px-8 bg-[#FFD100] hover:bg-[#FFD100]/90"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="neo-button text-white hover:text-white h-14 px-8 text-lg border-4 bg-black/50 hover:bg-black/70"
                >
                  <Link href="/services">
                    View Programs
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-sm border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#FFD100]">500+</div>
                  <div className="text-white font-medium">Active Members</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#FFD100]">15+</div>
                  <div className="text-white font-medium">Expert Trainers</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#FFD100]">50+</div>
                  <div className="text-white font-medium">Weekly Classes</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#FFD100]">100%</div>
                  <div className="text-white font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-white mb-3 font-bold">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-12 h-12 bg-[#FFD100] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-300"
          >
            <ChevronDown className="h-6 w-6 text-black" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}