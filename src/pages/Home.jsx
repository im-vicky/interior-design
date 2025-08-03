import React from "react";
import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
// import Footer from "./components/Footer";
import About from "../sections/About";
// import Services from "./sections/Services";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";
//
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="h-screen w-full">
        <Hero />
      </section>
      {/* Portfolio Section */}
      <Portfolio />
      <Contact />
      <About />
    </div>
  );
}
