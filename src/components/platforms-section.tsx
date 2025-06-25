"use client"

import { useState } from "react"

export default function Platforms() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const platforms = [
    {
      id: 1,
      title: "Fintech",
      image: "/images/platforms-1.png",
      hoverOverlay: "from-[#ffaa48]/70 to-[#f7545f]/70", // Semi-transparent gradient
      expandedContent: {
        description:
          "At Conviva, we bring ideas to life through AI-driven platforms that unlock growth, simplify complexity, and drive impactful value in a dynamic digital world.",
        productName: "mobiquity® Pay",
        cta: "EXPLORE FINTECH INNOVATION",
      },
    },
    {
      id: 2,
      title: "Martech",
      image: "/images/platforms-2.jpg",
      hoverOverlay: "from-[#ffaa48]/70 to-[#f7545f]/70",
      expandedContent: {
        description:
          "Put your business ahead with MobiLytix™ – a suite of AI-driven tools that bring personalized, automated customer experiences to life, shaping the future of marketing.",
        productName: "MobiLytix™ Digital",
        cta: "DISCOVER MARTECH SOLUTIONS",
      },
    },
    {
      id: 3,
      title: "Digitech",
      image: "/images/platforms-3.jpg",
      hoverOverlay: "from-[#ffaa48]/70 to-[#f7545f]/70",
      expandedContent: {
        description:
          "Unleash new revenue streams by integrating your business into the digital world, creating a seamless multi-channel experience designed to drive growth and scale.",
        productName: "BlueMarble BSS",
        cta: "EXPLORE DIGITECH SOLUTIONS",
      },
    },
    {
      id: 4,
      title: "Revtech",
      image: "/images/platforms-4.jpg",
      hoverOverlay: "from-[#ffaa48]/70 to-[#f7545f]/70",
      expandedContent: {
        description:
          "Elevate your telecom services with dynamic, omni-channel communication platforms that ensure seamless, personalized customer experiences across every touchpoint.",
        productName: "CNPaaS",
        cta: "EXPLORE REVTECH INNOVATION",
      },
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Platforms</h1>
        <p className="text-xl text-gray-600">Turning big ideas for tomorrows businesses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className="relative h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredCard(platform.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Image Only */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${platform.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Hover Gradient Overlay - Semi-transparent */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${platform.hoverOverlay} transition-opacity duration-300 ${
                hoveredCard === platform.id ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
              {/* Title - Always visible */}
              <div>
                <h3 className="text-2xl font-bold mb-4">{platform.title}</h3>
              </div>

              {/* Expanded Content - Only visible on hover */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  hoveredCard === platform.id
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-4 pointer-events-none"
                }`}
              >
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-gray-100">{platform.expandedContent.description}</p>

                  <div className="text-yellow-300 font-semibold text-base">{platform.expandedContent.productName}</div>

                  <div className="pt-2">
                    <button className="text-white font-bold text-sm underline hover:text-gray-200 transition-colors">
                      {platform.expandedContent.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
