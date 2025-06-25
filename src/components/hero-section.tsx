"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const videos = ["/images/vd.mp4", "/images/vd.mp4", "/images/vd.mp4"];
  const words = ["Experience", "Credible Impact"];
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/herosection.png"
          alt="gradient glow"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
        <div
          className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gray-100 z-10 flex items-center justify-center"
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <video
            ref={videoRef}
            src={videos[activeIndex]}
            className="w-full h-full object-cover"
            muted
            loop
            controls={false}
          />
        </div>
      </div>

      <div className="relative z-20 flex items-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <motion.h1
              className="text-gray-700 md:text-white text-5xl sm:text-6xl md:text-7xl font-light leading-tight mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              {words.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </motion.h1>

            <p className="text-gray-300 text-lg mb-10 max-w-md sm:max-w-lg">
              Empowering organizations to unlock new revenue models and innovate
              at scale
            </p>

            <Button
              onClick={handlePlay}
              className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-full flex items-center space-x-2 group"
            >
              <span>INNOVATE FOR IMPACT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-6 flex space-x-2 z-20">
        {videos.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === activeIndex ? "bg-white scale-110" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>

      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20">
        <Button
          onClick={handlePlay}
          className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 rounded-full flex items-center space-x-2"
        >
          <span>PLAY VIDEO</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
