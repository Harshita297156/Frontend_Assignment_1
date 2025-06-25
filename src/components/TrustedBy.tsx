"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const companies = [
  { name: "slice", logo: "/images/logo-1.png" },
  { name: "vi", logo: "/images/logo-2.png" },
  { name: "airtel", logo: "/images/logo-3.png" },
  { name: "at&t", logo: "/images/logo-4.png" },
  { name: "bank abc", logo: "/images/logo-5.png" },
  { name: "mtn", logo: "/images/logo-6.png" },
  { name: "orange", logo: "/images/logo-7.png" },
];

export default function TrustedBy() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationId: number;

    const scroll = () => {
      if (scrollRef.current && isHovered) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <div className="w-full py-12 px-4 bg-white text-black text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Innovating at Scale.</h2>
      <h3 className="text-2xl md:text-3xl font-semibold mb-8">Leading with Impact.</h3>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden w-full mx-auto max-w-6xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex shrink-0 gap-6 md:gap-10 px-4">
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="flex-shrink-0 h-10 flex items-center justify-center min-w-[80px]">
              <Image
                src={company.logo}
                alt={company.name}
                height={30}
                width={80}
                className="object-contain brightness-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
