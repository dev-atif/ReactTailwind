import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";


const Home = ({ flex, Heading, desc, title, Image, SubHeading }) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".Text-motion",
      {
        opacity: 0,
        y: 70,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".Text-motion",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".Image-motion",
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".Image-motion",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <>
      <div
        name="home"
        className={`max-w-6xl mx-auto  py-10 md:py-20 leading-snug flex flex-col   items-center relative
    md:flex-row ${flex === "flex-row-reverse" ? "md:flex-row-reverse" : ""}`}
      >
        <div className="blob1"></div>
        <div className="blob2"></div>
        <div className="text-center md:text-start px-5 md:w-1/2  Text-motion" >
          <h1 className="text-sm text-color-secondary mb-3 border-b-2 border-solid border-color-secondary pb-1  inline-block">
            {SubHeading}
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold">{Heading}</h1>
          <p className="text-sm md:text-md leading-relaxed my-2 md:my-4 ">
            {desc}
          </p>
          <div>
            <button className="btn">{title}</button>
          </div>
        </div>
        <div className="md:w-1/2 Image-motion" >
          <img src={Image} alt="Home" />
        </div>
      </div>
    </>
  );
};

export default Home;
