import React from "react";
import Spline from "@splinetool/react-spline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black-800 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-center mb-10">
            Welcome to TeamVortex
          </h1>
          <p className="text-lg text-center mb-10">
            Our Hackathon Project – Immersive 3D Experience
          </p>
          <div className="w-full h-[500px]">
            <Spline scene="https://prod.spline.design/2mkPN7C-P4EgbdeT/scene.splinecode" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
