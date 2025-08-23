import React from 'react';
import { Link } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar'; // Import the new component

// --- Main History Page Component ---
export default function GeographyPage() {
    const geographyLabs = [
        { 
            id: 1, 
            title: "Earth Crust", 
            description: "Step back in time and walk through photorealistic reconstructions of the world's most iconic landmarks. Explore ancient ruins, uncover their hidden secrets, and witness pivotal historical moments as if you were actually there.",
            url: "/labs/earthcrust.html" 
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
                        Geogrpahy Labs
                    </h1>
                    <p className="text-gray-600 mt-2 text-base sm:text-lg">Select a lab to begin your experiment.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {geographyLabs.map(lab => (
                        <a 
                            href={lab.url} 
                            key={lab.id} 
                            target="_blank" 
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