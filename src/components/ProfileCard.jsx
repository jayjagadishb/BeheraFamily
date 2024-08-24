import React, { useEffect } from "react";
import { gsap } from "gsap";

function ProfileCard({ img, name, description }) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <div className="card flex flex-col md:flex-row mb-8 mx-4 md:mx-12">
      <img src={img} alt={name} className="w-full md:w-1/3 rounded-md" />
      <div className="p-4 md:p-8">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
