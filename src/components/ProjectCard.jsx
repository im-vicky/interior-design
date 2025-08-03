import React from "react";

export default function ProjectCard({ title, img, index }) {
  const dynamicContainer = index === 0 || index === 3;
  const background =
    index === 0 ? "bg-red-800" : index === 3 ? "bg-yellow-300" : "bg-white";

  return (
    <div
      className={`${background} ${
        dynamicContainer ? "flex flex-col items-center justify-center" : ""
      }`}
    >
      <div
        className={`${dynamicContainer ? "aspect-square w-full max-w-sm overflow-hidden" : "w-full"}`}
      >
        <img src={img} alt={title} className="w-full h-full object-cover" />
        {dynamicContainer && (
          <h3
            className={`mt-4 text-lg font-semibold text-center ${
              index === 0 ? "text-white" : "text-black"
            }`}
          >
            {title} {index}
          </h3>
        )}
      </div>
    </div>
  );
}
