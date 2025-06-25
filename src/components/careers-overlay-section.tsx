import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function CareersOverlaySection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_4030.jpeg"
          alt="Diverse professionals collaborating in modern workspace"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay Panel - Text content on separate image/panel */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="w-1/2 h-full relative">
         

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center px-8 lg:px-16">
            <div className="max-w-lg text-white">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8">
                Careers that shape your future
              </h1>

              <p className="text-lg lg:text-xl leading-relaxed mb-12 text-white/90">
                You will have the chance to contribute to the tangible impacts of our work, and help us make the world a
                better place.
              </p>

              <button className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 group">
                WORK WITH US
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
