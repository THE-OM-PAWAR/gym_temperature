"use client"

import { motion } from '@/components/motion'
import Image from 'next/image'

export default function GalleryPage() {
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
            OUR GALLERY
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Take a look at our <span className="highlight">state-of-the-art facilities</span> and vibrant community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="neo-card overflow-hidden aspect-square group cursor-pointer"
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-[#FFD100] inline-block px-3 py-1 border-2 border-black mb-2">
                      <h3 className="text-black text-xl font-bold uppercase">{item.title}</h3>
                    </div>
                    <p className="text-white text-lg font-medium">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

const galleryItems = [
  {
    id: 1,
    title: "Main Training Floor",
    description: "Our spacious training area equipped with premium equipment",
    image: "/gallery/training-floor.jpg"
  },
  {
    id: 2,
    title: "Group Class Studio",
    description: "State-of-the-art studio for group fitness classes",
    image: "/gallery/group-class.jpg"
  },
  {
    id: 3,
    title: "Recovery Zone",
    description: "Dedicated space for post-workout recovery and relaxation",
    image: "/gallery/recovery-zone.jpg"
  },
  {
    id: 4,
    title: "Cardio Section",
    description: "Modern cardio equipment with entertainment systems",
    image: "/gallery/cardio.jpg"
  },
  {
    id: 5,
    title: "Weight Training Area",
    description: "Comprehensive selection of free weights and machines",
    image: "/gallery/weights.jpg"
  },
  {
    id: 6,
    title: "Yoga Studio",
    description: "Peaceful environment for yoga and meditation",
    image: "/gallery/yoga.jpg"
  },
  {
    id: 7,
    title: "Locker Rooms",
    description: "Clean and modern locker facilities with amenities",
    image: "/gallery/locker-room.jpg"
  },
  {
    id: 8,
    title: "Nutrition Bar",
    description: "Healthy refreshments and supplements available",
    image: "/gallery/nutrition-bar.jpg"
  },
  {
    id: 9,
    title: "Outdoor Training",
    description: "Open-air training space for outdoor workouts",
    image: "/gallery/outdoor.jpg"
  }
] 