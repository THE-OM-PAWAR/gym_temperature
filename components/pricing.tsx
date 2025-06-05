"use client"

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { motion } from '@/components/motion'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: "Basic",
    price: "$39",
    description: "Essential access to facilities and classes",
    features: [
      "Full gym access",
      "Unlimited cardio equipment",
      "3 group classes per week",
      "Locker room access",
      "Mobile app access"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$79",
    description: "Enhanced training with coaching benefits",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 personal training session/month",
      "Monthly body composition analysis",
      "Nutrition guidance",
      "Priority class booking"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "$129",
    description: "Complete fitness experience with premium perks",
    features: [
      "Everything in Pro",
      "4 personal training sessions/month",
      "Custom nutrition plan",
      "Premium supplements starter pack",
      "Recovery zone access",
      "Guest passes (2/month)"
    ],
    popular: false
  }
]

export default function Pricing() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          background: 'radial-gradient(circle at 20% 30%, hsl(var(--chart-1)) 0%, transparent 20%), radial-gradient(circle at 80% 70%, hsl(var(--chart-2)) 0%, transparent 20%)',
          filter: 'blur(120px)'
        }}
      />
      
      <div className="container relative z-10">
        <SectionHeading 
          title="Membership Plans" 
          subtitle="Choose the plan that fits your fitness goals and lifestyle."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="bg-chart-1 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={cn(
                "h-full border-0 transition-all duration-300 relative overflow-hidden",
                plan.popular 
                  ? "bg-card shadow-lg shadow-chart-1/10 scale-105 md:scale-110 z-10" 
                  : "bg-card/50 backdrop-blur-sm"
              )}>
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-chart-1/10 to-transparent opacity-30" />
                )}
                
                <CardHeader className="relative z-10 text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bebas">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-chart-1 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="relative z-10">
                  <Button className={cn(
                    "w-full",
                    plan.popular 
                      ? "bg-chart-1 hover:bg-chart-1/90" 
                      : "bg-muted hover:bg-muted/80"
                  )}>
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All memberships include a free consultation with our fitness experts.
            <br />
            Longer commitment plans receive additional discounts.
          </p>
          <Button variant="outline" size="lg">View Full Pricing Details</Button>
        </div>
      </div>
    </section>
  )
}