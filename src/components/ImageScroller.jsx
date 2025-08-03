import React from 'react';

export default function ImageScroller({ images }) {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-serif text-center mb-8">Gallery</h2>
      <div className="overflow-x-auto whitespace-nowrap px-6">
        <div className="inline-flex gap-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="h-64 w-auto rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
