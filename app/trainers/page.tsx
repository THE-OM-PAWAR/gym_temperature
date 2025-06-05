"use client"

import { motion } from '@/components/motion'
import Image from 'next/image'

export default function TrainersPage() {
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
            OUR EXPERT TRAINERS
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Meet our team of certified professionals dedicated to helping you <span className="highlight">achieve your fitness goals</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="neo-card overflow-hidden"
            >
              <div className="relative h-80 w-full border-b-4 border-black">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#FFD100] py-1 px-3 border-2 border-black font-bold">
                  {trainer.specialization}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 uppercase">{trainer.name}</h3>
                <p className="mb-4 text-lg">{trainer.description}</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="text-sm bg-black text-white px-3 py-1 font-bold"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

const trainers = [
  {
    name: "John Smith",
    specialization: "Strength & Conditioning",
    description: "Certified strength coach with 10+ years of experience in professional sports training.",
    image: "/trainers/trainer1.jpg",
    certifications: ["CSCS", "USAW", "CrossFit L3"]
  },
  {
    name: "Sarah Johnson",
    specialization: "Functional Training",
    description: "Former Olympic athlete specializing in functional movement and rehabilitation.",
    image: "/trainers/trainer2.jpg",
    certifications: ["NASM", "FMS", "Precision Nutrition"]
  },
  {
    name: "Mike Chen",
    specialization: "Sports Performance",
    description: "Expert in sports-specific training and athletic development programs.",
    image: "/trainers/trainer3.jpg",
    certifications: ["NSCA", "USAW", "EXOS"]
  },
  {
    name: "Emma Wilson",
    specialization: "Yoga & Mobility",
    description: "Yoga instructor with expertise in mobility training and injury prevention.",
    image: "/trainers/trainer4.jpg",
    certifications: ["RYT-500", "FMS", "MobilityWOD"]
  },
  {
    name: "David Rodriguez",
    specialization: "Nutrition & Wellness",
    description: "Registered dietitian and wellness coach focusing on sustainable lifestyle changes.",
    image: "/trainers/trainer5.jpg",
    certifications: ["RD", "CISSN", "ACE"]
  },
  {
    name: "Lisa Thompson",
    specialization: "HIIT & Cardio",
    description: "HIIT specialist with a passion for creating high-energy, effective workouts.",
    image: "/trainers/trainer6.jpg",
    certifications: ["ACE", "CrossFit L2", "TRX"]
  }
] 