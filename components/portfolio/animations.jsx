"use client"

import { motion, useReducedMotion } from "framer-motion"

const revealTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1],
}

export function RevealOnView({
  children,
  className,
  delay = 0,
  x = 0,
  y = 0,
  scale = 1,
  as = "div",
  ...props
}) {
  const prefersReducedMotion = useReducedMotion()
  const MotionElement = motion[as] || motion.div

  return (
    <MotionElement
      initial={{
        opacity: 0,
        x: prefersReducedMotion ? 0 : x,
        y: prefersReducedMotion ? 0 : y,
        scale: prefersReducedMotion ? 1 : scale,
        filter: prefersReducedMotion ? "none" : "blur(4px)",
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "none" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ ...revealTransition, duration: prefersReducedMotion ? 0.2 : revealTransition.duration, delay }}
      className={className}
      style={{ willChange: "transform, opacity, filter" }}
      {...props}
    >
      {children}
    </MotionElement>
  )
}

export function FadeUp({ children, className, delay = 0, y = 120, as = "div", ...props }) {
  return (
    <RevealOnView as={as} className={className} delay={delay} y={y} {...props}>
      {children}
    </RevealOnView>
  )
}

export function ImageReveal({ children, className, delay = 0, as = "div", ...props }) {
  return (
    <RevealOnView as={as} className={className} delay={delay} y={100} scale={0.94} {...props}>
      {children}
    </RevealOnView>
  )
}
