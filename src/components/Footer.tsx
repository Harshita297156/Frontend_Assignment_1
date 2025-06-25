import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/images/foot.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Wrapper */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-20 space-y-16">

        {/* CTA Section */}
        <div className="text-center space-y-6 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
            Ready to embrace digital transformation?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 leading-relaxed">
            Whether you're starting from scratch or enhancing your existing project, we're here to guide you every step of the way.
          </p>
          <Link
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base"
          >
            CONTACT US TODAY
          </Link>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

            {/* Logo & Social */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">
                <span className="text-red-800">L</span>
                <span className="text-yellow-600">O</span>
                <span className="text-red-800">G</span>
                <span className="text-red-800">O</span>
              </h3>
              <div className="flex space-x-3">
                {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </Link>
                ))}
              </div>
              <div className="text-xs sm:text-sm opacity-75 leading-relaxed">
                <p>
                  © 2025 |{" "}
                  <Link href="#" className="hover:underline">Privacy Policy</Link> |{" "}
                  <Link href="#" className="hover:underline">Cookie Policy</Link> |{" "}
                  <Link href="#" className="hover:underline">Terms of Use</Link> |{" "}
                  <Link href="#" className="hover:underline">Sitemap</Link> |{" "}
                  <Link href="#" className="hover:underline">Public Notices</Link>
                </p>
              </div>
            </div>

            {/* Fintech & Martech */}
            <div className="space-y-8">
              <div>
                <h4 className="text-base font-semibold mb-3">FINTECH</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  {["Digital Payments", "Digital Banking", "Digital Lending"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="hover:underline">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-base font-semibold mb-3">MARTECH</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li><Link href="#" className="hover:underline">Customer Value Management</Link></li>
                  <li><Link href="#" className="hover:underline">Digital Experience & Management</Link></li>
                </ul>
              </div>
            </div>

            {/* Digitech */}
            <div>
              <h4 className="text-base font-semibold mb-3">DIGITECH</h4>
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
              <h4 className="text-base font-semibold mb-3">COMPANY</h4>
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
    </footer>
  );
}
