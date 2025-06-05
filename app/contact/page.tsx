"use client"

import { motion } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
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
            CONTACT US
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us for any questions about our <span className="highlight">services</span> or to schedule a tour
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="neo-card p-8">
              <h2 className="text-3xl font-bold mb-6 uppercase">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-bold uppercase mb-2 block">First Name</label>
                    <input 
                      className="neo-input w-full" 
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold uppercase mb-2 block">Last Name</label>
                    <input 
                      className="neo-input w-full" 
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold uppercase mb-2 block">Email</label>
                  <input 
                    type="email" 
                    className="neo-input w-full" 
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold uppercase mb-2 block">Phone</label>
                  <input 
                    type="tel" 
                    className="neo-input w-full" 
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold uppercase mb-2 block">Message</label>
                  <textarea
                    className="neo-input w-full min-h-[120px] resize-none"
                    placeholder="Tell us about your fitness goals..."
                  />
                </div>
                <Button className="w-full neo-button">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="neo-card p-8">
              <h2 className="text-3xl font-bold mb-6 uppercase">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD100] border-2 border-black flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 uppercase">Address</h3>
                    <p className="text-lg">
                      123 Fitness Street<br />
                      Workout City, WC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD100] border-2 border-black flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 uppercase">Phone</h3>
                    <p className="text-lg">
                      +1 (555) 123-4567<br />
                      +1 (555) 765-4321
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD100] border-2 border-black flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 uppercase">Email</h3>
                    <p className="text-lg">
                      info@alphacore.com<br />
                      support@alphacore.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD100] border-2 border-black flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 uppercase">Hours</h3>
                    <p className="text-lg">
                      Monday - Friday: 5:00 AM - 10:00 PM<br />
                      Saturday - Sunday: 6:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="neo-card p-8">
              <h2 className="text-3xl font-bold mb-6 uppercase">Location</h2>
              <div className="border-4 border-black overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 