"use client"

import { motion } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 noise-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="neo-heading text-5xl md:text-6xl font-bold mb-6">
            MEMBERSHIP PLANS
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Choose the perfect plan that fits your <span className="highlight">fitness goals</span> and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "neo-card p-8 relative",
                plan.featured ? "border-[#FFD100]" : ""
              )}
              style={plan.featured ? { transform: 'scale(1.05)' } : {}}
            >
              {plan.featured && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FFD100] text-black px-6 py-2 font-bold text-sm border-4 border-black">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2 uppercase">{plan.name}</h3>
                <div className="text-5xl font-bold mb-2">
                  ${plan.price}
                  <span className="text-xl font-normal">/month</span>
                </div>
                <p className="text-lg">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-[#FFD100] flex-shrink-0 bg-black p-1" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={cn(
                  "w-full neo-button",
                  !plan.featured ? "bg-white hover:bg-white" : ""
                )}
              >
                GET STARTED
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

const plans = [
  {
    name: "Basic",
    price: 49,
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to gym equipment",
      "Basic fitness assessment",
      "Group classes (2x/week)",
      "Locker room access",
      "Free parking"
    ],
    featured: false
  },
  {
    name: "Pro",
    price: 89,
    description: "Ideal for regular gym-goers seeking more features",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Personal training session (1x/month)",
      "Nutrition consultation",
      "Access to mobile app",
      "Recovery room access"
    ],
    featured: true
  },
  {
    name: "Elite",
    price: 149,
    description: "For serious athletes and fitness enthusiasts",
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Priority booking",
      "Monthly progress tracking",
      "Recovery treatments",
      "Exclusive events access",
      "24/7 facility access"
    ],
    featured: false
  }
]

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
} 