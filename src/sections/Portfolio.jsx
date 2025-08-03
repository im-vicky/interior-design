import React from "react";
import ProjectCard from "../components/ProjectCard"; // assuming you have this component
// @ts-ignore
import project1 from "../assets/images/project1.jpg";
// @ts-ignore
import project2 from "../assets/images/project2.jpg";
// @ts-ignore
import project3 from "../assets/images/project3.jpg";
// @ts-ignore
import project4 from "../assets/images/project4.jpg";

const projects = [
  { title: "Modern Living Room", img: project1 },
  { title: "Elegant Bedroom", img: project2 },
  { title: "Luxury Kitchen", img: project3 },
  { title: "Minimalist Workspace", img: project4 },
];

export default function PortfolioGrid() {
  return (
    <section className="flex-grow w-full py-16 px-6 bg-white overflow-auto">
      <h2 className="text-3xl font-serif text-center mb-12">Recent Work</h2>

      {/* Grid with 4 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {projects.slice(0, 4).map((p, i) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            img={p.img}
            index={i} // 👈 pass index
          />
        ))}
      </div>
      {/* <div className="text-center mt-10"> */}
      {/*   <a */}
      {/*     href="/portfolio" */}
      {/*     className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition" */}
      {/*   > */}
      {/*     View Full Portfolio */}
      {/*   </a> */}
      {/* </div> */}
    </section>
  );
}
