import React from 'react';
import { Link } from 'react-router-dom';

// --- Reusable Navbar Component ---
// This should be the same navbar used on your dashboard for consistency.
const DashboardNavbar = () => (
    <header className="fixed top-0 left-0 w-full z-50 p-2 sm:p-3">
        <div className="container mx-auto">
            <div className="bg-white/10 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/20 px-4 py-2 sm:px-6 sm:py-3">
                <div className="flex justify-between items-center">
                    <Link to="/dashboard" className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Team<span className="text-indigo-600">Vortex</span>
                    </Link>
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

// --- Main Chemistry Page Component ---
export default function ChemistryPage() {
    // --- Manually list your chemistry labs here ---
    // Make sure the 'url' matches the path to your HTML files in the `public` folder.
    const chemistryLabs = [
        { 
            id: 1, 
            title: "Titration Experiment", 
            description: "Master the technique of determining the concentration of an unknown solution.",
            url: "/labs/chemistry-titration.html" 
        },
        { 
            id: 2, 
            title: "Chemical Bonding", 
            description: "Explore ionic, covalent, and metallic bonds in an interactive 3D environment.",
            url: "/labs/chemistry-bonding.html" 
        },
        { 
            id: 3, 
            title: "Periodic Table Explorer", 
            description: "An in-depth look at the properties and trends of the elements.",
            url: "/labs/chemistry-periodic-table.html" 
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden font-montserrat">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            </div>

            <DashboardNavbar />
            
            <div className="container mx-auto pt-24 sm:pt-28 p-4 relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        Chemistry Labs
                    </h1>
                    <p className="text-gray-600 mt-2 text-base sm:text-lg">Select a lab to begin your experiment.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chemistryLabs.map(lab => (
                        // Use a standard <a> tag to link to the static HTML file
                        <a 
                            href={lab.url} 
                            key={lab.id} 
                            target="_blank" // Opens the lab in a new tab for a better experience
                            rel="noopener noreferrer"
                            className="group relative bg-white/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
                        >
                            <div className="relative p-6 flex flex-col h-full">
                                <h2 className="card-title text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                    {lab.title}
                                </h2>
                                <p className="text-gray-600 text-sm mt-2 flex-grow">{lab.description}</p>
                                <div className="card-actions mt-6">
                                    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transform transition-all duration-300">
                                        Open Lab
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                 <div className="text-center mt-12">
                    <Link to="/dashboard" className="btn btn-outline btn-primary">
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
