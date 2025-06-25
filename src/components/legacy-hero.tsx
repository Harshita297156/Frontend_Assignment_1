import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background gradient image - extended to cover full component */}
      <div className="absolute inset-0 w-full h-full">
        <Image src="/images/foot.png" alt="" fill className="object-cover w-full h-full" priority />
      </div>

      {/* Additional dark overlay for text readability */}
      <div className="absolute inset-0 w-full h-full bg-slate-900/20"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-16">
        {/* Top section with headline and description */}
        <div className="grid grid-cols-2 gap-16 pt-8">
          {/* Left side - Main headline */}
          <div>
            <h1 className="text-7xl font-light text-white leading-tight">
              A legacy of innovation,
              <br />a world of impact
            </h1>
          </div>

          {/* Right side - Description and button */}
          <div className="space-y-8 pl-8">
            <p className="text-xl text-slate-200 leading-relaxed max-w-lg">
              Our software solutions are shaping the digital landscape of business growth and customer experience across
              the globe.
            </p>

            <div className="flex items-center space-x-4">
              <span className="text-white font-medium tracking-wider text-sm">ABOUT US</span>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Statistics with grid lines */}
        <div className="pb-8">
          <div className="relative">
            {/* Grid lines for statistics */}
            <div className="absolute inset-0">
              {/* Horizontal line dividing top and bottom rows */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-400/40 transform -translate-y-1/2"></div>
              {/* Vertical line dividing left and right columns */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-400/40 transform -translate-x-1/2"></div>
            </div>

            {/* Statistics grid */}
            <div className="grid grid-cols-2 gap-x-24 gap-y-16">
              {/* Top row */}
              <div className="flex items-baseline space-x-8 py-8">
                <span className="text-8xl font-light text-white">25+</span>
                <div>
                  <p className="text-lg text-slate-200 leading-tight">
                    Years of technological
                    <br />
                    excellence
                  </p>
                </div>
              </div>

              <div className="flex items-baseline space-x-8 py-8">
                <span className="text-8xl font-light text-white">2Bn+</span>
                <div>
                  <p className="text-lg text-slate-200 leading-tight">
                    Platform users across
                    <br />
                    the world
                  </p>
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex items-baseline space-x-8 py-8">
                <span className="text-8xl font-light text-white">100+</span>
                <div>
                  <p className="text-lg text-slate-200 leading-tight">Countries served</p>
                </div>
              </div>

              <div className="flex items-baseline space-x-8 py-8">
                <span className="text-8xl font-light text-white">3000+</span>
                <div>
                  <p className="text-lg text-slate-200 leading-tight">
                    Thinkers, Researchers
                    <br />& Innovators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
