"use client";

import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black px-4 py-3 md:px-6 md:py-4">
      <div className="hidden md:flex justify-end mx-auto mb-2 text-sm text-gray-300 space-x-6 bg-gray-800 px-4 py-2">
        <a href="#" className="hover:text-white transition-colors">Partners</a>
        <a href="#" className="hover:text-white transition-colors">News & Press</a>
        <a href="#" className="hover:text-white transition-colors">Careers</a>
        <a href="#" className="hover:text-white transition-colors">Support</a>
      </div>

      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-xl font-bold">
          <span className="text-red-500">L</span>
          <span className="text-yellow-500">O</span>
          <span className="text-red-500">G</span>
          <span className="text-red-500">O</span>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Products</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Themes</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Resources</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">About</a>
          <Search className="w-5 h-5 text-white cursor-pointer hover:text-gray-300" />
          <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full">
            CONTACT
          </Button>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4">
          <a href="#" className="block hover:text-gray-300">Products</a>
          <a href="#" className="block hover:text-gray-300">Themes</a>
          <a href="#" className="block hover:text-gray-300">Resources</a>
          <a href="#" className="block hover:text-gray-300">About</a>
          <div className="flex items-center justify-between">
            <Search className="w-5 h-5 text-white cursor-pointer hover:text-gray-300" />
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full">
              CONTACT
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
