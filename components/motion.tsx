"use client"

import React from "react"
import {
  motion as framerMotion,
  AnimatePresence as FramerAnimatePresence
} from "framer-motion"

// Re-export everything from framer-motion
export const motion = framerMotion
export const AnimatePresence = FramerAnimatePresence

// Custom motion components with defaults
export const FadeIn = ({ 
  children, 
  className = "", 
  delay = 0,  
  duration = 0.5, 
  ...props 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const SlideIn = ({ 
  children, 
  className = "", 
  direction = "left", 
  delay = 0,
  ...props 
}: { 
  children: React.ReactNode
  className?: string
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  [key: string]: any
}) => {
  const directionMap = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: -50 },
    down: { x: 0, y: 50 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const ScaleIn = ({ 
  children, 
  className = "", 
  delay = 0,
  ...props 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}