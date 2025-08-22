import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6">About Team Vortex</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700">
        Team Vortex is a group of passionate innovators participating in hackathons to build meaningful solutions. 
        Our vision is to blend creativity, design, and technology to create impactful web experiences.
      </p>
    </section>
  );
};

export default About;
