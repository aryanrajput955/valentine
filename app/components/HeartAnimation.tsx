"use client"

import { motion } from "framer-motion"

export default function HeartAnimation() {
  return (
    <div className=" z-0 relative w-full h-40">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl"
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: -100,
            opacity: [0, 1, 0],
            x: Math.sin(index) * 50,
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.4,
          }}
          style={{
            left: `${index * 20}%`,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}

