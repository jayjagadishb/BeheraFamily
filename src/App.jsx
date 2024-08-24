import React, { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
import "./App.css";
import Contact from "./components/Contact.jsx";
import FamilyProfile from "./components/FamilyProfile.jsx";
import FamilySlider from "./components/FamilySlider.jsx";
import Gallery from "./components/Gallery.jsx";
import Hero from "./components/Hero.jsx";
import ImportantDates from "./components/ImportantDates.jsx";

gsap.registerPlugin(CSSPlugin);

function App() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        setLoading(false);
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 0.8,
      delay: 0.5,
    })
      .to(".hide", { opacity: 0, duration: 0.2 })
      .to(".hide", { display: "none", duration: 0.2 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.5,
        delay: 0.3,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.5 })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.5,
      });
  };

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen relative text-black">
          <div className="flex justify-center items-center w-full h-full bg-gray-900 absolute top-0">
            <div className="absolute h-0.5 bg-orange-600 left-0 w-0 follow z-20"></div>
            <div
              className="absolute left-0 bg-white h-0.5 w-0 transition ease-out duration-400 hide"
              id="progress-bar"
              style={{ width: counter + "%" }}
            ></div>

            <p
              className="absolute text-[130px] font-medium text-white -translate-y-4 hide mb-40"
              id="count"
            >
              {counter}%
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-0 h-full absolute top-0 left-0 bg-gray-900 overflow-hidden content z-10">
            <p className="text-center text-[104px] font-medium opacity-0 hidden title-lines">
              Wait,
            </p>
            <p className="text-center text-[104px] font-medium opacity-0 hidden title-lines">
              Behera Family
            </p>
            <p className="text-center text-[104px] font-medium opacity-0 hidden title-lines">
              is Cooking
            </p>
            <p className="text-center text-[104px] font-medium opacity-0 hidden title-lines">
              Something for you
            </p>
          </div>
        </div>
      ) : (
        <>
          <Hero />
          <FamilyProfile />
          <FamilySlider />

          <ImportantDates />
          <Gallery />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
