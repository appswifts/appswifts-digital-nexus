"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'

interface FloatingProps {
  children: React.ReactNode
  sensitivity?: number
  className?: string
}

interface FloatingElementProps {
  children: React.ReactNode
  depth?: number
  className?: string
}

const Floating: React.FC<FloatingProps> & {
  Element: typeof FloatingElement
} = ({ children, sensitivity = 1, className }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set((e.clientX - centerX) * sensitivity)
      mouseY.set((e.clientY - centerY) * sensitivity)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [sensitivity])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  depth = 1,
  className,
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springX = useSpring(x, { stiffness: 400, damping: 90 })
  const springY = useSpring(y, { stiffness: 400, damping: 90 })

  const rotateX = useTransform(springY, [-100, 100], [5, -5])
  const rotateY = useTransform(springX, [-100, 100], [-5, 5])

  useEffect(() => {
    x.set(x.get() * depth)
    y.set(y.get() * depth)
  }, [depth, x, y])

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        position: 'absolute',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

Floating.Element = FloatingElement

export { FloatingElement }
export default Floating