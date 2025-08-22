import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">TeamVortex</h1>
        <div className="space-x-6">
          <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#join" className="text-gray-700 hover:text-gray-900">Join Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
