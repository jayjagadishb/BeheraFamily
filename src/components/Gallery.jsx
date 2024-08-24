import React from "react";
import { motion } from "framer-motion";
import familyImg1 from "../assets/family1.jpg";
import familyImg2 from "../assets/family2.jpg";
import familyImg3 from "../assets/family3.jpg";
import familyImg4 from "../assets/family4.jpg";
import familyImg5 from "../assets/family5.jpg";
import familyImg6 from "../assets/family6.jpg";
import familyImg7 from "../assets/family7.jpg";
import familyImg8 from "../assets/family8.jpg";
import familyImg9 from "../assets/family9.jpg";
import familyImg10 from "../assets/family10.jpg";
import familyImg11 from "../assets/family11.jpg";
import familyImg12 from "../assets/family12.jpg";

function Gallery() {
  const images = [
    familyImg1,
    familyImg2,
    familyImg3,
    familyImg4,
    familyImg5,
    familyImg6,
    familyImg7,
    familyImg8,
    familyImg9,
    familyImg10,
    familyImg11,
    familyImg12,
  ];

  return (
    <section className="border-b border-neutral-900 pb-6 px-2 sm:px-4 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 md:mx-12">
        {images.map((img, index) => (
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            key={index}
            src={img}
            alt={`Family ${index + 1}`}
            className="rounded-md w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
