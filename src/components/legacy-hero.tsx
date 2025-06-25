import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/foot.png"
          alt=""
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="absolute inset-0 w-full h-full bg-slate-900/30" />

      <div className="relative z-10 min-h-screen flex flex-col justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white leading-snug sm:leading-tight">
              A legacy of innovation,
              <br />
              a world of impact
            </h1>
          </div>

          <div className="space-y-6 md:space-y-8 md:pl-8">
            <p className="text-sm sm:text-base md:text-xl text-slate-200 leading-relaxed max-w-lg">
              Our software solutions are shaping the digital landscape of
              business growth and customer experience across the globe.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium tracking-wider text-sm sm:text-base">
                ABOUT US
              </span>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10 pt-14">
          <div className="relative">
            <div className="absolute inset-0 hidden sm:block">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-400/40 transform -translate-y-1/2"></div>
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-400/40 transform -translate-x-1/2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 md:gap-x-24 md:gap-y-14">
              {[
                { value: "25+", label: "Years of technological excellence" },
                { value: "2Bn+", label: "Platform users across the world" },
                { value: "100+", label: "Countries served" },
                {
                  value: "3000+",
                  label: "Thinkers, Researchers & Innovators",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start sm:items-baseline space-x-4 sm:space-x-6 py-4 sm:py-6"
                >
                  <span className="text-4xl sm:text-6xl md:text-7xl font-light text-white whitespace-nowrap">
                    {item.value}
                  </span>
                  <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
