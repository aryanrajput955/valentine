"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const messages = [
  "Your love is the most beautiful gift I've ever received.",
  "Every moment with you feels like a dream come true.",
  "You're the missing piece that makes my life complete.",
  "Your smile brightens my darkest days.",
  "I fall in love with you more and more each day.",
  "You're not just my girlfriend, you're my best friend and soulmate.",
  "Your love gives me strength and inspires me to be a better person.",
  "With you, every day feels like Valentine's Day.",
  "You're the rhythm of my heart and the sunshine in my world.",
  "I cherish every second we spend together, and I look forward to our future.",
  "Your love is the greatest adventure of my life.",
  "You make my heart skip a beat every time I see you.",
  "I'm so grateful to have you in my life, today and always.",
  "You're the most beautiful story I've ever read, and it's a story I never want to end.",
  "My love for you grows stronger with each passing day.",
]

export default function LoveMessage() {
  const [currentMessage, setCurrentMessage] = useState(0)

  const nextMessage = () => {
    setCurrentMessage((prev) => (prev + 1) % messages.length)
  }

  return (
    <motion.div
      className=" bg-white bg-opacity-70 rounded-lg p-6 mb-8 max-w-md mx-auto shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xl text-pink-700 mb-4">{messages[currentMessage]}</p>
      <button
        onClick={nextMessage}
        className=" z-20 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Next Message
      </button>
    </motion.div>
  )
}

