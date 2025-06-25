import Image from "next/image"

const insights = [
  {
    id: 1,
    image: "/images/latest1.jpg",
    title: "How an immersive merchant payment platform transformed customer behavior for this business...",
    tag: "WEBINAR",
    tagColor: "bg-yellow-400",
  },
  {
    id: 2,
    image: "/images/latest2.png",
    title: "We revealed as market leader for digital wallet platforms by juniper research",
    tag: "PRESS",
    tagColor: "bg-yellow-400",
  },
  {
    id: 3,
    image: "/images/latest3.jpg",
    title: "How an immersive merchant payment platform transformed customer behavior for this business",
    tag: "WEBINAR",
    tagColor: "bg-yellow-400",
  },
]

export default function LatestInsights() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-light text-gray-900">Latest from our desks</h2>
        <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          VIEW ALL INSIGHTS
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="group bg-white hover:bg-black rounded-2xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={insight.image || "E:\crypto\assignment\frontend-assignment\public\images\herosection.png"}
                alt={insight.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-white mb-6 transition-colors duration-500 leading-relaxed">
                {insight.title}
              </h3>

              {/* Bottom Section */}
              <div className="flex justify-between items-center">
                <button className="text-sm font-medium text-gray-900 group-hover:text-white underline underline-offset-4 transition-colors duration-500">
                  READ MORE
                </button>
                <span className={`px-3 py-1 ${insight.tagColor} text-black text-xs font-bold rounded-full`}>
                  {insight.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
