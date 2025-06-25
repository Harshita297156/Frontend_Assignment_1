import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function CareersDiagonalSection() {
  return (
    <div className="bg-white my-10 sm:my-16 mx-4 sm:mx-8 md:mx-12 overflow-hidden shadow-lg">
      <section className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_4030.jpeg"
            alt="Diverse professionals collaborating in modern workspace"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-end">
          <div
            className="w-full sm:w-3/5 h-full relative"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-16 ml-0 sm:ml-16">
              <div className="max-w-xl text-white text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-6 sm:mb-8">
                  Careers that shape your future
                </h1>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12 text-white/90">
                  You will have the chance to contribute to the tangible impacts of our work, and help us make the world a
                  better place.
                </p>

                <button className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-colors duration-200 group">
                  WORK WITH US
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
