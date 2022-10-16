import React from "react";
import Rocket from "../images/rocket.png";
import Banner from "../images/banner-cloud.jpg";

const Hero = () => {
  return (
    <section className="pt-24 relative" id="spx-hero">
      <img
        className="w-full absolute object-cover object-center -z-50 top-0 h-full"
        src={Banner}
        alt="rocket"
      />
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">
            Go to the next level
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Let's go beyond our imagination
          </h1>
          <p className="leading-normal text-2xl mb-8">
            This is where we create everything
          </p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-2/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src={Rocket} alt="rocket" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
