import React from "react";
// @ts-ignore
import heroImg from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Interior Design"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Text */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 drop-shadow-lg">
          Suzy Hoodless Studio
        </h1>
        <p className="text-lg text-gray-200 mb-8 drop-shadow-md">
          Thoughtful, timeless interiors rooted in collaboration and curated
          elegance.
        </p>
        <a
          href="/portfolio"
          className="inline-block px-6 py-3 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Get Quote
        </a>
      </div>
    </section>
  );
}
