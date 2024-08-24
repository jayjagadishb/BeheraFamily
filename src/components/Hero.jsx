import React, { useEffect } from "react";
import { gsap } from "gsap";
import namaste from "../assets/namaste.png";

function Hero() {
  useEffect(() => {
    gsap.fromTo(".hero-text", { opacity: 0 }, { opacity: 1, duration: 4 });
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-transparent relative px-4 mb-[-1rem]">
      <h1 className="hero-text text-4xl md:text-6xl font-bold text-white  text-center">
        Behera Family Welcomes You
      </h1>
      <img src={namaste} alt="namaste" className="w-24 md:w-32 lg:w-40" />
    </section>
  );
}

export default Hero;
