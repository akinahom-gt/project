import React from "react";
import jackson from "../assets/images/jackson.jpg";
const About = () => {
  return (
    <div className="flex flex-col min-h-[900px] justify-center items-center text-justify text-left text-lg">
      <div className=" space-y-6">
        <img src={jackson} className="rounded-[15px]"></img>
        <p>Hey, I'm Jackson. </p>
        <p>I've been a builder for 11.5673437721 years.</p>
        <p>At 12 years old, I built a nuclear fusion reactor.</p>
        <p className="w-[380px]">
          Currently, I'm building new physical computing interfaces at
          Midjourney.
        </p>
      </div>
    </div>
  );
};

export default About;
