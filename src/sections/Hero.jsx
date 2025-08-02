import React from "react";

export default function Hero() {
  return (
    <section className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center text-center px-6">
      <div className="bg-white bg-opacity-70 backdrop-blur-sm p-10 rounded-md max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Elegant Interiors. Timeless Design.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Transforming spaces into sophisticated sanctuaries that reflect your
          story.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
