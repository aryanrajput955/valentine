import Header from "./components/Header"
import Footer from "./components/Footer"
import LoveMessage from "./components/LoveMessage"
import HeartAnimation from "./components/HeartAnimation"

export default function ValentinesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-pink-400 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-800 mb-8 animate-pulse">
          Happy Valentine's Day, My Love!
        </h1>
        <LoveMessage />
        <HeartAnimation />
      </main>
      <Footer />
    </div>
  )
}

