"use client"

import Image from 'next/image'
import { motion } from '@/components/motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: "Jennifer L.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "AlphaCore completely changed my approach to fitness. The trainers focus on proper form and progressive overload which has helped me get stronger than I ever thought possible.",
    rating: 5,
  },
  {
    name: "Michael T.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "I've been a member for 6 months and have lost 30 pounds. The community here keeps me accountable and the trainers push me to be my best self every day.",
    rating: 5,
  },
  {
    name: "Sophia R.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "The nutrition coaching alongside my training plan has been a game-changer. I've seen more progress in 3 months at AlphaCore than I did in years at other gyms.",
    rating: 5,
  },
  {
    name: "David K.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "As someone who was intimidated by gyms, AlphaCore's supportive environment made all the difference. The trainers are knowledgeable and approachable.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-5 bg-no-repeat bg-contain"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundPosition: 'top right',
          zIndex: 0,
          transform: 'scaleX(-1)'
        }}
      />
      
      <div className="container relative z-10">
        <SectionHeading 
          title="Success Stories" 
          subtitle="Don't just take our word for it. Hear what our members have to say about their AlphaCore experience."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Background decorative element */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-chart-1/20 to-chart-5/20 blur-xl" />
              
              <Card className="border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-chart-1 mb-4" />
                  
                  <blockquote className="text-xl italic font-medium mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonials[activeIndex].name}</p>
                      <div className="flex">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 text-chart-1" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-3 w-3 rounded-full p-0 border",
                    activeIndex === index 
                      ? "bg-chart-1 border-chart-1" 
                      : "bg-transparent border-muted-foreground/30"
                  )}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="sr-only">View testimonial {index + 1}</span>
                </Button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-primary">
              Real Results.<br />
              <span className="text-chart-1">Real Transformations.</span>
            </h3>
            
            <p className="text-muted-foreground">
              Our members achieve remarkable results through commitment, smart training, and the 
              support of our expert coaches and community. Every AlphaCore success story is 
              built on the foundations of consistent effort and evidence-based methods.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <p className="font-bebas text-4xl text-chart-1">500+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <p className="font-bebas text-4xl text-chart-1">95%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <p className="font-bebas text-4xl text-chart-1">12+</p>
                <p className="text-sm text-muted-foreground">Expert Trainers</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <p className="font-bebas text-4xl text-chart-1">24/7</p>
                <p className="text-sm text-muted-foreground">Support Access</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="bg-chart-1 hover:bg-chart-1/90">
                Start Your Transformation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}