import React from "react";
import fatherImg from "../assets/father.jpg";
import motherImg from "../assets/mother.jpg";
import selfImg from "../assets/self.jpg";
import About from "./About";
import { ABOUT_BABA, ABOUT_MAMA, ABOUT_ME } from "../constants";

function FamilyProfile() {
  return (
    <div className="w-full overflow-hidden">
      <div className="space-y-6">
        <About image={fatherImg} text={ABOUT_BABA} idn=" My Baba" />
        <About image={motherImg} text={ABOUT_MAMA} idn="My Mama" />
        <About image={selfImg} text={ABOUT_ME} idn="me" />
      </div>
    </div>
  );
}

export default FamilyProfile;
