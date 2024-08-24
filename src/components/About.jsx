import React from "react";
import { motion } from "framer-motion";

function About({ image, text, idn }) {
  return (
    <div className="border-b border-neutral-900 pb-6 px-4 sm:px-6 lg:px-8">
      <h2 className="my-4 text-center text-3xl sm:text-4xl ">
        <span className="text-neutral-500">Meet</span> {idn}
      </h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
         
          <img
            className="rounded-xl w-[400px] h-[400px] object-cover"
            src={image}
            alt="About Me"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start"
        >
          <p className="my-4 text-base sm:text-lg lg:text-xl max-w-full px-2 sm:px-4">
            {text}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
