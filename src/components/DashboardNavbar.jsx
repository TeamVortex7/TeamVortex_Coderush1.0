import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

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
            <Link to="/dashboard" className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Team<span className="text-indigo-600">Vortex</span>
            </Link>
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

export default DashboardNavbar;