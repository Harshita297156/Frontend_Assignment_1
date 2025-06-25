"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const carouselData = [
  {
    id: 1,
    image: "/images/cr1.png",
  },
  {
    id: 2,
    image: "/images/cr2.png",
  },
]

export default function CredibleImpactCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length)
  }

  const currentSlide = carouselData[currentIndex]

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-light text-black">Credible Impact</h1>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-gray-200 border-gray-300 hover:bg-gray-300 transition-colors"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-black border-black hover:bg-gray-800 transition-colors"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left image section - stays the same, gradient only on hover */}
          <div className="col-span-4">
            <div
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={currentSlide.image}
                  alt="Slide image"
                  width={400}
                  height={400}
                  className={`w-full h-auto object-cover transform transition-transform duration-500 ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                />

                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: "linear-gradient(135deg, #ffaa48, #f7545f)",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Middle content - stays the same */}
          <div className="col-span-5 space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-light text-orange-500 mb-2">50%</div>
                <div className="text-gray-800 text-lg leading-tight">
                  Optimized
                  <br />
                  integration cost
                </div>
              </div>
              <div>
                <div className="text-5xl font-light text-orange-500 mb-2">1.7-4.8</div>
                <div className="text-gray-800 text-lg leading-tight">
                  Enhanced CSAT
                  <br />
                  mobile app rating
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 w-16"></div>

            <div className="space-y-6">
              <p className="text-gray-800 text-lg leading-relaxed">
                Customer journey simplification with centralized digital enablement layer, connecting prepaid,
                post-paid and enterprise lines of businesses
              </p>

              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
                READ MORE
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          </div>
        {/* Slide indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
