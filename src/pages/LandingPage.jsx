import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- Reusable Components ---

/**
 * A component to render subtle, animated shapes in the background.
 * These create a dynamic, tech-inspired feel for the light theme.
 */
const BackgroundAnimation = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
    <style>{`
      @keyframes float {
        0% { transform: translateY(0) translateX(0); opacity: 0.7; }
        50% { transform: translateY(-80px) translateX(20px); opacity: 0.3; }
        100% { transform: translateY(0) translateX(0); opacity: 0.7; }
      }
      .shape { animation: float 15s ease-in-out infinite; }
      .shape-2 { animation-delay: -5s; animation-duration: 20s; }
      .shape-3 { animation-delay: -10s; animation-duration: 25s; }
    `}</style>
    <div className="relative w-full h-full">
      <div className="shape absolute w-20 h-20 bg-cyan-200/50 rounded-full top-1/4 left-1/4"></div>
      <div className="shape shape-2 absolute w-32 h-32 bg-blue-200/50 rounded-full bottom-1/4 right-1/4"></div>
      <div className="shape shape-3 absolute w-16 h-16 bg-indigo-200/50 rounded-full bottom-1/2 left-1/3"></div>
    </div>
  </div>
);

/**
 * A card component for the Content Catalog section.
 */
const CatalogCard = ({ image, title, description, tag }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out border border-gray-100">
    <img src={image} alt={title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E2E8F0/4A5568?text=Image+Error'; }} />
    <div className="p-6">
      <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{tag}</span>
      <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
        Try for Free
      </button>
    </div>
  </div>
);


// --- Page Sections ---

const Navbar = () => (
  <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm border-b border-gray-200/80">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">
        Team <span className="text-blue-600">Vortex</span>
      </h1>
      <nav className="hidden md:flex space-x-8">
        <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
        <a href="#catalog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Catalog</a>
        <a href="#join" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Join Us</a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-gray-50 pt-20">
    <BackgroundAnimation />
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-4">
        Immersive STEM Education
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        An interactive learning platform using AR/VR to bring science to life. Explore, experiment, and discover like never before.
      </p>
      <div className="space-x-4">
        <a href="#catalog" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform">
          Explore simulations
        </a>
        <a href="#join" className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform border border-blue-200">
          Request a Demo
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">About Team Vortex</h2>
      <p className="max-w-3xl mx-auto text-gray-600">
        We are a passionate team of developers, designers, and educators dedicated to revolutionizing learning. We believe in the power of immersive technology to create engaging and effective educational experiences that inspire the next generation of innovators.
      </p>
    </div>
  </section>
);

const ContentCatalog = () => {
    const sectionRef = useRef(null);

    // Dummy data for catalog items
    const catalogItems = [
        {
            image: "https://placehold.co/600x400/93C5FD/1E3A8A?text=Biology+Lab",
            title: "Virtual Biology Lab",
            description: "Dissect a virtual frog, explore cell structures, and understand DNA replication in a fully interactive lab.",
            tag: "Biology"
        },
        {
            image: "https://placehold.co/600x400/A5B4FC/312E81?text=Chemistry+Sim",
            title: "Chemistry Reaction Simulator",
            description: "Mix chemicals safely, observe reactions, and learn the periodic table without stepping into a real lab.",
            tag: "Chemistry"
        },
        {
            image: "https://placehold.co/600x400/6EE7B7/064E3B?text=Physics+World",
            title: "Physics World",
            description: "Experiment with gravity, electricity, and magnetism. Build circuits and launch projectiles to see physics in action.",
            tag: "Physics"
        }
    ];
    
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate cards appearing on scroll
            gsap.from(".catalog-card", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%", // Start animation when 80% of the section is in view
                },
            });
        }, sectionRef);
        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <section id="catalog" ref={sectionRef} className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Content Catalog</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Dive into our library of interactive simulations across various subjects.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {catalogItems.map((item, index) => (
                        <div className="catalog-card" key={index}>
                            <CatalogCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const JoinUs = () => (
  <section id="join" className="py-20 bg-blue-600 text-white text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-6">Join Us Today</h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg">
        Be part of the journey to innovate, collaborate, and build the future with Team Vortex.
      </p>
      <a href="#" className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform">
        Join Now
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-6 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Team Vortex. All Rights Reserved.</p>
    </div>
  </footer>
);


// --- Main App Component ---

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ContentCatalog />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}