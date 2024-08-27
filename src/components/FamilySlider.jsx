import React, { useState } from "react";
import sliderImg1 from "../assets/slider1.jpg";
import sliderImg2 from "../assets/slider2.jpg";
import sliderImg3 from "../assets/slider3.jpg";
import sliderImg4 from "../assets/slider4.jpg";
import sliderImg5 from "../assets/slider5.jpg";
import sliderImg6 from "../assets/slider6.jpg";
import sliderImg7 from "../assets/slider7.jpg";
import sliderImg8 from "../assets/slider8.jpg";
import sliderImg9 from "../assets/slider9.jpg";
import sliderImg10 from "../assets/slider10.jpg";
import sliderImg11 from "../assets/slider11.jpg";
import sliderImg12 from "../assets/slider12.jpg";
import sliderImg13 from "../assets/slider13.jpg";
import sliderImg14 from "../assets/slider14.jpg";
import sliderImg15 from "../assets/slider15.jpg";
import sliderImg16 from "../assets/slider16.jpg";
import sliderImg17 from "../assets/slider17.jpg";
import sliderImg18 from "../assets/slider18.jpg";
import sliderImg19 from "../assets/slider19.jpg";
import sliderImg20 from "../assets/slider20.jpg";
import sliderImg21 from "../assets/slider21.jpg";
import sliderImg22 from "../assets/slider22.jpg";
import sliderImg23 from "../assets/slider23.jpg";
import sliderImg24 from "../assets/slider24.jpg";
import sliderImg25 from "../assets/slider25.jpg";
import sliderImg26 from "../assets/slider26.jpg";
function FamilySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const familyMembers = [
    {
      img: sliderImg1,
      name: "Bansidhara Behera & Nila Behera",
      relationship: "Bada Jeje bappa & Bada Jeje maa",
    },
    {
      img: sliderImg2,
      name: "Bhagirathi Behera & Ambirani Behera",
      relationship: "Jeje bappa & Jeje maa",
    },
    {
      img: sliderImg3,
      name: "Sribacha Behera & Nisarani Behera",
      relationship: "Jeje bappa & Jeje maa",
    },
    {
      img: sliderImg4,
      name: "Srikant Behera & Suniti Behera",
      relationship: "Jeje bappa & Jeje maa",
    },
    {
      img: sliderImg5,
      name: "Pradipta Kumar Behera & Abanti Behera",
      relationship: "Bada Baba & Bada Mama",
    },
    {
      img: sliderImg6,
      name: "Jitendra Behera & Sasmita Behera",
      relationship: "Baba & Mama",
    },
    {
      img: sliderImg7,
      name: "Sanjib Behera & Manini Behera",
      relationship: "Dada & Khudi",
    },
    {
      img: sliderImg8,
      name: "Ashok Kumar Behera & Shobhagyalaxmi Behera",
      relationship: "Dada & Khudi",
    },
    { img: sliderImg9, name: "Manas Chandan Behera", relationship: "Dada" },
    {
      img: sliderImg10,
      name: "Pyari Mohan Bahalia & Jyotirmayee Behera",
      relationship: "Bhaina & Nani",
    },
    {
      img: sliderImg11,
      name: "Manoranjan Behera & Prativa Behera",
      relationship: "Bhaina & Nani",
    },
    { img: sliderImg12, name: "Jay Jagadish Behera", relationship: "Me" },
    {
      img: sliderImg13,
      name: "Durga Madhav Behera ",
      relationship: "Sana Bhai",
    },
    { img: sliderImg14, name: "Shreyansh Behera", relationship: "Sana Bhai" },
    { img: sliderImg15, name: "Riyanshi Behera", relationship: "Sana Bhauni" },
    {
      img: sliderImg16,
      name: "Pramod Kumar Behera & Jemadai Behera",
      relationship: "Aja & Aee",
    },
    {
      img: sliderImg17,
      name: "Dungar Kumar Das & Sabita Behera",
      relationship: "Mausa & Mausi",
    },
    {
      img: sliderImg18,
      name: "Rohit Kumar Das & Kabita Behera",
      relationship: "Mausa & Mausi",
    },
    {
      img: sliderImg19,
      name: "Kamakhya Prasad Behera & Lalita Behera",
      relationship: "Mamu & Maine",
    },
    {
      img: sliderImg20,
      name: "Manoj Kumar Das & Somyashreedatta Pradhan ",
      relationship: "Bhai & Bhauja",
    },
    {
      img: sliderImg21,
      name: "Saroj Kumar Das & Suhasini sahoo",
      relationship: "Bhai & Bhauja",
    },
    { img: sliderImg22, name: "Rakesh Das", relationship: "Bada Bhai" },
    { img: sliderImg23, name: "Rajesh Das", relationship: "Bada Bhai" },
    {
      img: sliderImg24,
      name: "Krushna Prasad Behera",
      relationship: "Sana Bhai",
    },
    {
      img: sliderImg25,
      name: "Barsha Priyadarshini behera",
      relationship: "Sana Bhauni",
    },
    { img: sliderImg26, name: "Sai Simran Das", relationship: "Bhaneji" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? familyMembers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === familyMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="border-b border-neutral-900 pb-6 px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Family Members</h2>
      <div className="relative mx-auto w-full md:w-1/2">
        <div className="flex justify-center">
          <img
            src={familyMembers[currentIndex].img}
            alt={familyMembers[currentIndex].name}
            className="rounded-md w-[400px] h-[300px] object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-full"
            onClick={handlePrev}
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-full"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-xl">Name: {familyMembers[currentIndex].name}</p>
        <p className="text-xl">
          Relationship: {familyMembers[currentIndex].relationship}
        </p>
      </div>
    </section>
  );
}

export default FamilySlider;
