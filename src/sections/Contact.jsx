import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 min-h-screen bg-gray-50 px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-xl w-full p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Let's Talk
        </h2>
        <p className="text-gray-600 mb-8">
          Want to discuss a project or just say hello? Hit the button below and
          message me directly on WhatsApp.
        </p>

        <a
          href="https://wa.me/1234567890?text=Hi%20there%2C%20I'd%20like%20to%20connect!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 text-black px-6 py-3 rounded-md hover:bg-green-600 transition text-sm font-medium"
        >
          <FaWhatsapp className="text-lg" />
          Contact Me on WhatsApp
        </a>
      </div>
    </section>
  );
}
