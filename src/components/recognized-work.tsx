export default function Recognized() {
  const cards = [
    {
      category: "AWARDS",
      categoryColor: "bg-red-500",
      title: "Telecoms World Middle East",
      subtitle: "Best Use of Mobile and Best Digital Experience",
      backgroundImage: "/images/reco1.png",
    },
    {
      category: "NEWS",
      categoryColor: "bg-orange-500",
      title: "GenAI revolution: How marketers can personalise customer journey with GenAI",
      author: "Amit Sanyal, EVP & COO – MarTech Solutions",
      backgroundImage: "/images/reco2.png",
    },
    {
      category: "AWARDS",
      categoryColor: "bg-red-500",
      title: "Juniper Research Fintech and Payments Future Digital Awards 2024",
      description:
        'mobiquity Pay solution has been awarded "GOLD" in the "Best Digital Wallet Platform 2024" category.',
      backgroundImage: "/images/reco3.png",
    },
    {
      category: "NEWS",
      categoryColor: "bg-orange-500",
      title: "Positive Growth Trajectory Inc42.com",
      author: "Srinivas Nidugondi, COO, Fintech",
      backgroundImage: "/images/reco4.png",
    },
    {
      category: "TALKS",
      categoryColor: "bg-gray-400",
      title: "2.0",
      description: "Hear from Rajesh Chandraman, CEO, as he shares his vision to lead the company",
      backgroundImage: "/images/reco5.png",
    },
    {
      category: "BLOG",
      categoryColor: "bg-cyan-400",
      title: "The Transformative Impact of GenAI on Telecom Marketing",
      author: "Greg Armstrong, CPO - Consumer Value Solutions",
      backgroundImage: "/images/reco6.png",
    },
    {
      category: "NEWS",
      categoryColor: "bg-orange-500",
      title: "Meet us at Africa Com 2024",
      description: "Cape Town from November 12-14 November",
      backgroundImage: "/images/reco7.png",
    },
    {
      category: "BLOG",
      categoryColor: "bg-cyan-400",
      title: "Is Collaboration the Key to Unlocking Telecom's API Potential?",
      author: "Tabeish Isha – Marketing Manager",
      backgroundImage: "/images/reco8.png",
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-8 bg-no-repeat bg-cover bg-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl md:text-5xl font-light text-white">Recognized for our work</h1>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-black hover:text-white transition-colors duration-300">
            VIEW MORE
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden h-80 p-6 flex flex-col justify-between text-white shadow-md"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 z-0" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className={`${card.categoryColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {card.category}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 leading-tight">{card.title}</h3>
                  {card.subtitle && <p className="text-sm opacity-90 mb-2">{card.subtitle}</p>}
                  {card.description && <p className="text-sm opacity-90 mb-2">{card.description}</p>}
                  {card.author && <p className="text-sm opacity-75">{card.author}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
