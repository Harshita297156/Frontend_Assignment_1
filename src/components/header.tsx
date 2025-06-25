import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black px-6 py-4">
      {/* Top navigation */}
      <div className="hidden md:flex justify-end  mx-auto mb-2 text-sm text-gray-300 space-x-8 bg-gray-800 px-4 py-2 ">
        <a href="#" className="hover:text-black transition-colors">
          Partners
        </a>
        <a href="#" className="hover:text-black transition-colors">
          News & Press
        </a>
        <a href="#" className="hover:text-black transition-colors">
          Careers
        </a>
        <a href="#" className="hover:text-black transition-colors">
          Support
        </a>
      </div>

      {/* Main navigation */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo with LGO styling */}
        <div className="text-xl font-bold">
          <span className="text-red-500">L</span>
          <span className="text-yellow-500">O</span>
          <span className="text-red-500">G</span>
          <span className="text-red-500">O</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Products
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Themes
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            About
          </a>

          <Search className="w-5 h-5 text-white cursor-pointer hover:text-gray-300" />

          <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full">
            CONTACT
          </Button>
        </nav>
      </div>
    </header>
  );
}
