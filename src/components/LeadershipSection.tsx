"use client"; // Required for components using hooks

import React from "react";
import Leaders from "@/components/Leaders";
import Recognized from "@/components/recognized-work";

const LeadershipSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 md:px-12"
      style={{ backgroundImage: `url('/images/herosection.png')` }}
    >
      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        <Leaders />
        <Recognized />
      </div>
    </section>
  );
};

export default LeadershipSection;
