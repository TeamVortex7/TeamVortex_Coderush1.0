import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

// --- SVG Icon Components ---
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
const LabIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);
const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
);
const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
);
const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
);

// --- Reusable Components ---
const DashboardNavbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth).then(() => {
      navigate('/');
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-2 sm:p-3">
      <div className="container mx-auto">
        <div className="bg-white/10 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/20 px-4 py-2 sm:px-6 sm:py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Team<span className="text-indigo-600">Vortex</span>
            </h1>
            <div className="flex items-center gap-2 sm:gap-3">
              {user && (
                <img
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full shadow-lg"
                  src={user.photoURL}
                  alt="User avatar"
                />
              )}
              <button
                onClick={logout}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-red-600 hover:to-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const LabCard = ({ title, subject, description, imageUrl }) => (
    <div className="group relative bg-white/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30 overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative flex flex-col h-full">
        <div className="h-36 sm:h-48 w-full overflow-hidden">
          <img src={imageUrl} alt={title} className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">{subject}</span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40"><LabIcon /></div>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">{title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 flex-grow">{description}</p>
          <div className="mt-4 sm:mt-6">
            <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base text-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transform transition-all duration-300">Open Lab</div>
          </div>
        </div>
      </div>
    </div>
);

const CircularProgress = ({ percentage, size = 160, strokeWidth = 10 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const responsiveSize = typeof window !== 'undefined' && window.innerWidth < 640 ? Math.max(120, size * 0.75) : size;
  const responsiveStroke = typeof window !== 'undefined' && window.innerWidth < 640 ? Math.max(8, strokeWidth * 0.8) : strokeWidth;
  const radius = (responsiveSize - responsiveStroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedPercentage(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative flex items-center justify-center">
      <svg width={responsiveSize} height={responsiveSize} className="transform -rotate-90">
        <circle cx={responsiveSize / 2} cy={responsiveSize / 2} r={radius} stroke="rgba(156, 163, 175, 0.3)" strokeWidth={responsiveStroke} fill="transparent" />
        <circle cx={responsiveSize / 2} cy={responsiveSize / 2} r={radius} stroke="url(#gradient)" strokeWidth={responsiveStroke} fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
        <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#8B5CF6" /></linearGradient></defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{animatedPercentage}%</span>
          <div className="text-xs sm:text-sm text-gray-600 mt-1">Complete</div>
        </div>
      </div>
    </div>
  );
};

// --- NEW Footer Component ---
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 font-montserrat mt-auto">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-2">Team<span className="text-blue-500">Vortex</span></h2>
          <p className="pr-8">Our mission is to make education an adventure. We use immersive technology to ignite curiosity and empower students to explore, create, and build the future.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
            <li><a href="/#catalog" className="hover:text-white transition-colors">Catalog</a></li>
            <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><TwitterIcon /></a>
            <a href="#" className="hover:text-blue-600"><LinkedinIcon /></a>
            <a href="#" className="hover:text-white"><GithubIcon /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 border-t border-gray-800 py-4">
      <p className="text-center text-sm">&copy; {new Date().getFullYear()} Team Vortex. All Rights Reserved.</p>
    </div>
  </footer>
);

// --- Main Dashboard Page Component ---
export default function DashboardPage() {
  const [user] = useAuthState(auth);
  const [isVisible, setIsVisible] = useState({});
  const [greeting, setGreeting] = useState("Welcome back");

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting("Good morning");
    } else if (hours < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  const labs = [
    { title: "Virtual Biology Lab", subject: "Biology", description: "Dissect, explore cells, and understand DNA.", imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop", path: "/biology" },
    { title: "Chemistry Simulator", subject: "Chemistry", description: "Mix chemicals safely and observe reactions.", imageUrl: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=600&h=400&fit=crop", path: "/chemistry" },
    { title: "Physics World", subject: "Physics", description: "Experiment with gravity, circuits, and magnetism.", imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop", path: "/physics" },
    { title: "Math Laboratory", subject: "Mathematics", description: "Visualize equations and geometric concepts.", imageUrl: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&h=400&fit=crop", path: "/maths" },
    { title: "Earth Sciences Hub", subject: "Geography", description: "Explore geological formations and climate.", imageUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop", path: "/earthscience" },
    { title: "History Timeline", subject: "History", description: "Interactive historical events and timelines.", imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop", path: "/history" },
  ];
  const courseCompletion = 75;
  const totalModules = 20;
  const completedModules = Math.floor((courseCompletion / 100) * totalModules);
  const labsFinished = 8;
  const achievementsEarned = 15;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-animate');
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    }, { threshold: 0.1, rootMargin: '50px' });

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible({ welcome: true, cards: true, sidebar: true }), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>
      <DashboardNavbar />
      <main className="flex-grow">
        <div className="container mx-auto pt-20 sm:pt-24 px-3 sm:px-4 pb-16 sm:pb-20 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-grow">
              <div data-animate="welcome" className={`transform transition-all duration-1000 ${isVisible.welcome ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                  {greeting}, {user ? user.displayName.split(" ")[0] : "User"}! 🚀
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">Let's continue your learning journey. Pick a lab to get started.</p>
              </div>
              <div data-animate="cards" className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 transform transition-all duration-1000 delay-300 ${isVisible.cards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {labs.map((lab, index) => (
                  <Link to={lab.path} key={index}>
                    <div className="transform transition-all duration-300 h-full" style={{ animationDelay: `${index * 100}ms`, opacity: isVisible.cards ? 1 : 0, transform: isVisible.cards ? 'translateY(0)' : 'translateY(20px)' }}>
                      <LabCard {...lab} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <aside data-animate="sidebar" className={`w-full lg:w-80 xl:w-80 flex-shrink-0 transform transition-all duration-1000 delay-500 ${isVisible.sidebar ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-white/20 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-white/30 sticky top-20 sm:top-24">
                <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6 lg:mb-8">Your Progress</h2>
                <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8"><CircularProgress percentage={courseCompletion} /></div>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4 bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/40">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"><BookIcon /></div>
                    <div>
                      <p className="font-bold text-lg sm:text-xl text-gray-800">{completedModules} / {totalModules}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Modules Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/40">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg"><LabIcon /></div>
                    <div>
                      <p className="font-bold text-lg sm:text-xl text-gray-800">{labsFinished}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Labs Finished</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/40">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"><TrophyIcon /></div>
                    <div>
                      <p className="font-bold text-lg sm:text-xl text-gray-800">{achievementsEarned}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Achievements</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}