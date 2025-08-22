import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo(subtitleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3 });
    gsap.fromTo(buttonRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, delay: 0.6 });
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white text-center">
      <h1 ref={titleRef} className="text-6xl font-bold mb-4">Welcome to Team Vortex</h1>
      <p ref={subtitleRef} className="text-xl mb-8 max-w-xl">
        Building immersive digital experiences with creativity and technology.
      </p>
      <a ref={buttonRef} href="#join" className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:scale-105 transition">
        Join Us
      </a>
    </section>
  );
};

export default Hero;
