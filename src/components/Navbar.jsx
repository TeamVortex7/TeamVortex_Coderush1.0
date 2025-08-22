import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">TeamVortex</h1>
      <div className="space-x-4">
        <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
