"use client";

import Image from "next/image";

export default function Events() {
  return (
    <div className="relative min-h-screen bg-[#f4f5e8] p-8">
      {/* Header Section */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl font-bold mb-4">Events</h1>
        <p className="text-gray-700 text-lg">
          Join our wonderful teams and be part of a community where your growth
          is our priority! Explore the latest achievements, milestones, and
          breakthroughs at Bennet Pharmaceuticals.
        </p>
      </div>

      {/* Orbital Timeline Container */}
      <div className="relative w-full max-w-3xl mx-auto aspect-square">
        {/* Center Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
          <Image
            src="/pills.jpg"
            alt="Colorful pharmaceutical pills"
            fill
            className="object-cover"
          />
        </div>

        {/* SVG Orbits */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          {/* Outer Orbit */}
          <ellipse
            cx="200"
            cy="200"
            rx="180"
            ry="180"
            fill="none"
            stroke="#ccc"
            strokeWidth="1"
            className="opacity-50"
          />
          {/* Inner Orbit */}
          <ellipse
            cx="200"
            cy="200"
            rx="120"
            ry="120"
            fill="none"
            stroke="#ccc"
            strokeWidth="1"
            className="opacity-50"
          />
        </svg>

        {/* Timeline Nodes */}
        <div className="absolute inset-0">
          {/* Top Node - Bennet Pharmaceuticals */}
          <div className="absolute top-[2%] left-1/2 -translate-x-1/2">
            <div className="bg-white rounded-full shadow-lg w-[120px] h-[120px] flex flex-col items-center justify-center text-center p-4">
              <span className="text-[#8cc63f] font-bold">2019</span>
              <p className="text-xs mt-1">Bennet Pharmaceuticals established</p>
            </div>
          </div>

          {/* Right Node - Blockbuster Drug */}
          <div className="absolute top-[28%] right-[2%]">
            <div className="bg-white rounded-full shadow-lg w-[120px] h-[120px] flex flex-col items-center justify-center text-center p-4">
              <span className="text-[#8cc63f] font-bold">2019</span>
              <p className="text-xs mt-1">Launch of first blockbuster drug</p>
            </div>
          </div>

          {/* Bottom Node - International Partnership */}
          <div className="absolute bottom-[28%] right-[2%]">
            <div className="bg-white rounded-full shadow-lg w-[120px] h-[120px] flex flex-col items-center justify-center text-center p-4">
              <span className="text-[#8cc63f] font-bold">2019</span>
              <p className="text-xs mt-1">First international partnership</p>
            </div>
          </div>

          {/* Left Node - Expansion */}
          <div className="absolute bottom-[28%] left-[2%]">
            <div className="bg-white rounded-full shadow-lg w-[120px] h-[120px] flex flex-col items-center justify-center text-center p-4">
              <span className="text-[#8cc63f] font-bold">2019</span>
              <p className="text-xs mt-1">Expansion into 50+ countries</p>
            </div>
          </div>

          {/* Orbit Dots */}
          <div className="absolute left-[22%] top-[22%] w-3 h-3 rounded-full bg-[#8cc63f]" />
          <div className="absolute right-[22%] top-[22%] w-3 h-3 rounded-full bg-[#1a4175]" />
          <div className="absolute right-[22%] bottom-[22%] w-3 h-3 rounded-full bg-[#8cc63f]" />
          <div className="absolute left-[22%] bottom-[22%] w-3 h-3 rounded-full bg-[#1a4175]" />
        </div>
      </div>

      {/* Bottom Right Images */}
      <div className="absolute bottom-8 right-8 flex gap-4">
        <div className="w-32 h-24 md:w-48 md:h-32 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/pills-strip.jpg"
            alt="Medical pill strip"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-32 h-24 md:w-48 md:h-32 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/stethoscope.jpg"
            alt="Stethoscope on documents"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
