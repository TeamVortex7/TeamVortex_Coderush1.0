import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';

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

// --- Reusable Components ---

// Enhanced floating navbar with proper background
const DashboardNavbar = () => (
  <header className="fixed top-0 left-0 w-full z-50 p-2 sm:p-3">
    <div className="container mx-auto">
      <div className="bg-white/10 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/20 px-4 py-2 sm:px-6 sm:py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Team<span className="text-indigo-600">Vortex</span>
          </h1>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-sm sm:text-base">
              JD
            </div>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-red-600 hover:to-red-700">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

// Enhanced lab card with circular elements and better animations
const LabCard = ({ title, subject, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl lab-card-animate"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative">
        <div className="h-36 sm:h-48 w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              {subject}
            </span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40">
              <LabIcon />
            </div>
          </div>
          
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed line-clamp-2">{description}</p>
          
          <button className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 transform ${isHovered ? 'shadow-xl scale-105' : 'shadow-lg'}`}>
            Start Lab
          </button>
        </div>
      </div>
    </div>
  );
};

// Circular Progress Component
const CircularProgress = ({ percentage, size = 160, strokeWidth = 10 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  // Responsive size adjustment
  const responsiveSize = window.innerWidth < 640 ? Math.max(120, size * 0.75) : size;
  const responsiveStroke = window.innerWidth < 640 ? Math.max(8, strokeWidth * 0.8) : strokeWidth;
  
  const radius = (responsiveSize - responsiveStroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative flex items-center justify-center progress-animate">
      <svg
        width={responsiveSize}
        height={responsiveSize}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={responsiveSize / 2}
          cy={responsiveSize / 2}
          r={radius}
          stroke="rgba(156, 163, 175, 0.3)"
          strokeWidth={responsiveStroke}
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx={responsiveSize / 2}
          cy={responsiveSize / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={responsiveStroke}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {animatedPercentage}%
          </span>
          <div className="text-xs sm:text-sm text-gray-600 mt-1">Complete</div>
        </div>
      </div>
    </div>
  );
};

// --- Main Dashboard Page Component ---
export default function DashboardPage() {
  const dashboardRef = useRef(null);
  const [isVisible, setIsVisible] = useState({});

  // Dummy data for labs
  const labs = [
    { title: "Virtual Biology Lab", subject: "Biology", description: "Dissect, explore cells, and understand DNA.", imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop" },
    { title: "Chemistry Simulator", subject: "Chemistry", description: "Mix chemicals safely and observe reactions.", imageUrl: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=600&h=400&fit=crop" },
    { title: "Physics World", subject: "Physics", description: "Experiment with gravity, circuits, and magnetism.", imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop" },
    { title: "Math Laboratory", subject: "Mathematics", description: "Visualize equations and geometric concepts.", imageUrl: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&h=400&fit=crop" },
    { title: "Earth Sciences Hub", subject: "Geography", description: "Explore geological formations and climate.", imageUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop" },
    { title: "History Timeline", subject: "History", description: "Interactive historical events and timelines.", imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop" },
  ];

  const courseCompletion = 75;
  const totalModules = 20;
  const completedModules = Math.floor((courseCompletion / 100) * totalModules);
  const labsFinished = 8;
  const achievementsEarned = 15;

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate');
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Initial page load animation
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({
        welcome: true,
        cards: true,
        sidebar: true
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <DashboardNavbar />
      
      <div ref={dashboardRef} className="container mx-auto pt-20 sm:pt-24 px-3 sm:px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Main Content Area */}
          <main className="flex-grow">
            <div 
              data-animate="welcome"
              className={`transform transition-all duration-1000 ${
                isVisible.welcome ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                Welcome back, Jane! 🚀
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">Let's continue your learning journey. Pick a lab to get started.</p>
            </div>

            <div 
              data-animate="cards"
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 transform transition-all duration-1000 delay-300 ${
                isVisible.cards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {labs.map((lab, index) => (
                <div 
                  key={index} 
                  className="transform transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    opacity: isVisible.cards ? 1 : 0,
                    transform: isVisible.cards ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <LabCard {...lab} />
                </div>
              ))}
            </div>
          </main>

          {/* Right Sidebar */}
          <aside 
            data-animate="sidebar"
            className={`w-full lg:w-80 xl:w-80 flex-shrink-0 transform transition-all duration-1000 delay-500 ${
              isVisible.sidebar ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-white/20 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-white/30 sticky top-20 sm:top-24">
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6 lg:mb-8">Your Progress</h2>
              
              <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
                <CircularProgress percentage={courseCompletion} />
              </div>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/40">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <BookIcon />
                  </div>
                  <div>
                    <p className="font-bold text-lg sm:text-xl text-gray-800">{completedModules} / {totalModules}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Modules Completed</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/40">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <LabIcon />
                  </div>
                  <div>
                    <p className="font-bold text-lg sm:text-xl text-gray-800">{labsFinished}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Labs Finished</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/40">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <TrophyIcon />
                  </div>
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
    </div>
  );
}