import React from "react";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">InteriorPro</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-black transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/1234567890?text=Hi%20there%2C%20I%20came%20across%20your%20site%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <HiOutlineX className="w-6 h-6" />
            ) : (
              <HiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 pt-2 space-y-2 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-black transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/1234567890?text=Hi%20there%2C%20I%20came%20across%20your%20site%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
}
