import "./globals.css"
import { Inter, Dancing_Script } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing-script" })

export const metadata = {
  title: "Happy Valentine's Day, My Love",
  description: "A special message for my girlfriend on Valentine's Day",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

