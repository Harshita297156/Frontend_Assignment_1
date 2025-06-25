import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-[400px]"
      style={{
        backgroundImage: "url('/images/foot.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Call to Action Section */}
        <div className="px-6 py-16 md:py-24 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl mx-auto leading-tight">
            Ready to embrace digital transformation?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Whether you're starting from scratch or enhancing your existing project, we're here to guide you every step of the way.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            CONTACT US TODAY
          </Link>
        </div>

        {/* Footer Links */}
        <div className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Logo & Social */}
              <div className="lg:col-span-1">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold">
                    <span className="text-red-800">L</span>
                    <span className="text-yellow-600">O</span>
                    <span className="text-red-800">G</span>
                    <span className="text-red-800">O</span>
                  </h3>
                </div>
                <div className="flex space-x-4 mb-8">
                  {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-black" />
                    </Link>
                  ))}
                </div>
                <div className="text-sm opacity-75">
                  <p>
                    © 2025 |{" "}
                    <Link href="#" className="hover:underline">Privacy Policy</Link>{" "}|
                    <Link href="#" className="hover:underline"> Cookie Policy</Link>{" "}|
                    <Link href="#" className="hover:underline"> Terms of Use</Link>{" "}|
                    <Link href="#" className="hover:underline"> Sitemap</Link>{" "}|
                    <Link href="#" className="hover:underline"> Public Notices</Link>
                  </p>
                </div>
              </div>

              {/* Fintech & Martech */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">FINTECH</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    {["Digital Payments", "Digital Banking", "Digital Lending"].map((item, i) => (
                      <li key={i}>
                        <Link href="#" className="hover:underline">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">MARTECH</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li><Link href="#" className="hover:underline">Customer Value Management</Link></li>
                    <li><Link href="#" className="hover:underline">Digital Experience & Management</Link></li>
                  </ul>
                </div>
              </div>

              {/* Digitech */}
              <div>
                <h4 className="text-lg font-semibold mb-4">DIGITECH</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li><Link href="#" className="hover:underline text-blue-300">BlueMarble BSS</Link></li>
                  <li><Link href="#" className="hover:underline">Recharge & Voucher</Link></li>
                  <li className="font-semibold">REVTECH</li>
                  <li><Link href="#" className="hover:underline">Communication Network Platform as a Service</Link></li>
                  <li><Link href="#" className="hover:underline">UNO Messaging Solutions</Link></li>
                  <li><Link href="#" className="hover:underline">Media & Digital Services</Link></li>
                  <li><Link href="#" className="hover:underline">API Marketplace Solution</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold mb-4">COMPANY</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  {[
                    "Who We Are", "In the News", "Press Releases", "Analyst Mentions Old", "Blogs",
                    "Podcasts", "Webinars", "Leadership Talks", "Contact Us"
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="hover:underline">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
