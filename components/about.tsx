"use client"

import Image from 'next/image'
import { motion } from '@/components/motion'
import { SectionHeading } from '@/components/ui/section-heading'

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/10 relative overflow-hidden">
      {/* Decorative graffiti element */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-5 bg-no-repeat bg-contain"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundPosition: 'top right',
          zIndex: 0 
        }}
      />
      
      <div className="container relative z-10">
        <SectionHeading 
          title="About AlphaCore" 
          subtitle="Where science meets motivation in a community of strength."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                At Gym Temperature, we believe in combining evidence-based training methods with the 
                power of community motivation. Our mission is to help you build strength, improve performance, 
                and transform your body through consistent, smart training.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Approach</h3>
              <p className="text-muted-foreground">
                We take a scientific approach to fitness, applying proven principles of exercise 
                physiology, nutrition, and recovery. But we also understand the importance of 
                community and motivation in achieving long-term results.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Community</h3>
              <p className="text-muted-foreground">
                When you join AlphaCore, you become part of a supportive community of like-minded 
                individuals who push each other to be better every day. Our trainers and members 
                create an atmosphere of positive energy and mutual growth.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-chart-1/20 to-chart-2/20 blur-xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image 
                    src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Group training session" 
                    fill
                    className="object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-lg">
                  <Image 
                    src="https://images.pexels.com/photos/4761671/pexels-photo-4761671.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Personal trainer with client" 
                    fill
                    className="object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-40 overflow-hidden rounded-lg">
                  <Image 
                    src="https://images.pexels.com/photos/4162584/pexels-photo-4162584.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Gym equipment" 
                    fill
                    className="object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image 
                    src="https://images.pexels.com/photos/6456207/pexels-photo-6456207.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Member lifting weights" 
                    fill
                    className="object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}