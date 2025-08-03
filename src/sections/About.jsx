import React from "react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        {/* <div className="overflow-hidden rounded-lg shadow-md"> */}
        {/*   <img */}
        {/*     src={aboutImg} */}
        {/*     alt="Interior design showcase" */}
        {/*     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" */}
        {/*   /> */}
        {/* </div> */}

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Transforming Spaces with Elegance
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            At <span className="font-semibold text-black">InteriorPro</span>, we
            believe your space should reflect your personality. With a passion
            for detail and a dedication to quality, we craft timeless interiors
            that inspire comfort, beauty, and functionality.
          </p>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Whether it's a cozy home, a modern office, or a luxury renovation,
            we bring your vision to life with creativity and care.
          </p>

          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
