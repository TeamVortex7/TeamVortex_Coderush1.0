import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP plugin registration
gsap.registerPlugin(ScrollTrigger);

// --- Social Icons (with complete SVG paths) ---
const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);
const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
  </svg>
);
const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

// --- Background Animation (Fixed Contrast) ---
const BackgroundAnimation = () => (
  <div className="fixed inset-0 -z-20">
    <style>{`
      @keyframes breathingGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .bg-breathing {
        background: linear-gradient(-45deg, #005AA7, #000000, #005AA7, #000000);
        background-size: 400% 400%;
        animation: breathingGradient 20s ease infinite;
      }
    `}</style>
    <div className="absolute inset-0 bg-breathing" />
    <div className="absolute inset-0 bg-black/40" />
  </div>
);

// --- Navbar ---
const Navbar = () => (
  // This outer container handles the positioning and padding
  <header className="fixed top-0 left-0 w-full z-50 p-4 font-montserrat">
    {/* This inner container is the actual floating, blurred navbar */}
    <div className="container mx-auto bg-black/40 backdrop-blur-2xl rounded-full shadow-2xl border border-white/20">
      <div className="px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-white">
          Team<span className="text-blue-400">Vortex</span>
        </h1>
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#catalog" className="hover:text-blue-600 transition-colors">Catalog</a>
          <a href="#join" className="hover:text-blue-600 transition-colors">Join Us</a>
        </nav>
      </div>
    </div>
  </header>
);

// --- Hero Section ---
const Hero = () => {
  const heroRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1, ease: "power3.out", delay: 0.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center text-center font-montserrat text-white">
      <div className="container mx-auto px-6 hero-content">
        <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-white-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-animation_10s_ease_infinite]">Immersive STEM Education</h2>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
          Explore, experiment, and discover with interactive AR/VR-powered simulations.
        </p>
        <a href="#catalog" className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300">
          Explore Simulations
        </a>
      </div>
    </section>
  );
};

// --- Team Section ---
const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: "Ved Sharanagate", role: "Lead Developer", image: "https://raw.githubusercontent.com/TeamVortex7/TeamVortex_Coderush1.0/refs/heads/main/src/assets/team_img/ved.webp", socials: { twitter: "#", linkedin: "#", github: "#" } },
    { id: 2, name: "Prasad Pande", role: "Backend Developer", image: "https://raw.githubusercontent.com/TeamVortex7/TeamVortex_Coderush1.0/refs/heads/main/src/assets/team_img/prasad.webp", socials: { twitter: "#", linkedin: "#", github: "#" } },
    { id: 3, name: "Vyankatesh Punnal", role: "Frontend Developer", image: "https://raw.githubusercontent.com/TeamVortex7/TeamVortex_Coderush1.0/refs/heads/main/src/assets/team_img/varun.webp", socials: { twitter: "#", linkedin: "#", github: "#" } },
    { id: 4, name: "Sudhanshu Mahurkar", role: "Frontend Developer", image: "https://placehold.co/400x400/F9A8D4/831843?text=Sudhanshu", socials: { twitter: "#", linkedin: "#", github: "#" } },
  ];
  const [activeMember, setActiveMember] = useState(teamMembers[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMember(prev => teamMembers[(teamMembers.findIndex(m => m.id === prev.id) + 1) % teamMembers.length]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white font-montserrat">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Meet the Team</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">A passionate crew revolutionizing education through tech.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="relative h-80 w-48">
            {teamMembers.map(member => (
              <div key={member.id} className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${activeMember.id === member.id ? 'opacity-100' : 'opacity-0'}`}>
                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto shadow-2xl border-4 border-white mb-4 object-cover" />
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <div className="flex justify-center space-x-4 mt-4 text-gray-500">
                  <a href={member.socials.twitter} className="hover:text-blue-500"><TwitterIcon /></a>
                  <a href={member.socials.linkedin} className="hover:text-blue-700"><LinkedinIcon /></a>
                  <a href={member.socials.github} className="hover:text-gray-900"><GithubIcon /></a>
                </div>
              </div>
            ))}
          </div>
          <ul className="space-y-4 w-full md:w-1/3">
            {teamMembers.map(m => (
              <li key={m.id}>
                <button
                  onClick={() => setActiveMember(m)}
                  className={`w-full text-left px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    activeMember.id === m.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {m.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// --- Catalog Section (FIXED CARD HEIGHT) ---
const ContentCatalog = () => {
  const catalogRef = useRef(null);
  const items = [
    { image: "https://placehold.co/600x400/93C5FD/1E3A8A?text=Biology", title: "Virtual Biology Lab", description: "Dissect, explore cells, and understand DNA replication interactively. This lab provides a deep dive into cellular structures.", tag: "Biology" },
    { image: "https://placehold.co/600x400/A5B4FC/312E81?text=Chemistry", title: "Chemistry Reaction Simulator", description: "Mix chemicals safely, observe reactions, and explore the periodic table.", tag: "Chemistry" },
    { image: "https://placehold.co/600x400/6EE7B7/064E3B?text=Physics", title: "Physics World", description: "Experiment with gravity, circuits, and electricity in real-time. A perfect environment for learning core physics concepts.", tag: "Physics" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".catalog-card", {
        opacity: 0, y: 50, stagger: 0.2, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: catalogRef.current, start: "top 80%" },
      });
    }, catalogRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="catalog" ref={catalogRef} className="py-20 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Content Catalog</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">Dive into our library of immersive simulations.</p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {items.map((it, i) => (
            <div key={i} className="catalog-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/80 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <img src={it.image} alt={it.title} className="w-full h-48 object-cover" />
              {/* This wrapper div allows the content to grow and push the button down */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full self-start">{it.tag}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-3">{it.title}</h3>
                <p className="text-gray-600 text-sm mt-1 flex-grow">{it.description}</p>
                <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transform transition-transform duration-300">
                  Try for Free
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Join Us Section ---
const JoinUs = () => (
  <section id="join" className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center font-montserrat">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-extrabold mb-6">Join Us Today</h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">Be part of the journey to innovate and build the future with Team Vortex.</p>
      <a href="#" className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300">Join Now</a>
    </div>
  </section>
);

// --- Footer (ENHANCED) ---
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 font-montserrat">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-2">Team<span className="text-blue-500">Vortex</span></h2>
          <p className="pr-8">Our mission is to make education an adventure. We use immersive technology to ignite curiosity and empower students to explore, create, and build the future.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#catalog" className="hover:text-white transition-colors">Catalog</a></li>
            <li><a href="#join" className="hover:text-white transition-colors">Join Us</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><TwitterIcon /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><LinkedinIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><GithubIcon /></a>
          </div>
          <a href="mailto:contact@teamvortex.dev" className="hover:text-white transition-colors text-sm">contact@teamvortex.dev</a>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 border-t border-gray-800 py-4">
      <p className="text-center text-sm">&copy; {new Date().getFullYear()} Team Vortex. All Rights Reserved.</p>
    </div>
  </footer>
);

// --- Main App ---
export default function App() {
  return (
    <div className="font-montserrat">
      <BackgroundAnimation />
      <Navbar />
      <div className="relative z-10">
        <main>
          <Hero />
          <TeamSection />
          <ContentCatalog />
          <JoinUs />
        </main>
        <Footer />
      </div>
    </div>
  );
}