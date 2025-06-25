import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Leaders() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-12 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Trusted by Industry Leaders</h1>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 w-10 h-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 w-10 h-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left side - Logo and company info */}
          <div className="space-y-8 bg-black/40 backdrop-blur-sm rounded-2xl p-8 h-[300px] w-[250px]">
            {/* Colorful circular logo */}
            <div className="relative w-40 h-40 mx-auto md:mx-0">
              <div className="absolute inset-0">
                {/* Red circle */}
                <div className="w-20 h-20 bg-red-500 rounded-full absolute top-2 left-10 opacity-90"></div>
                {/* Pink circle */}
                <div className="w-20 h-20 bg-pink-500 rounded-full absolute top-6 right-2 opacity-90"></div>
                {/* Yellow circle */}
                <div className="w-20 h-20 bg-yellow-400 rounded-full absolute top-6 left-2 opacity-90"></div>
                {/* Cyan circle */}
                <div className="w-20 h-20 bg-cyan-400 rounded-full absolute bottom-2 left-10 opacity-90"></div>
                {/* Purple circle (center) */}
                <div className="w-16 h-16 bg-purple-600 rounded-full absolute top-12 left-12 opacity-95 z-10"></div>
              </div>
            </div>

            {/* Company logo and name */}
            <div className="text-center md:text-left">
              <div className="text-white text-3xl font-bold mb-1">indosat</div>
              <div className="text-white/80 text-sm tracking-widest font-medium">OOREDOO HUTCHISON</div>
            </div>
          </div>

          {/* Right side - Testimonial content */}
          <div className="space-y-8">
            <p className="text-white text-base leading-relaxed">
              We are delighted to offer SMEGA which is delivered through the mobile money platform. SMEGA is focused on
              enabling access to financial services to improve people's lives and positively contribute towards the
              economy by accelerating financial inclusion and economic development. We also trust that our customers
              across the country will find it easy, fast and a more convenient means of transferring money, making
              payments and doing other financial transactions.
            </p>

            {/* Attribution */}
            <div className="pt-4">
              <div className="text-yellow-400 font-bold text-base">RITESH SINGH</div>
              <div className="text-yellow-400/90 text-sm font-medium">CCO, INDOSAT OOREDOO HUTCHISON</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
