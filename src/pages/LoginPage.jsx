// src/pages/LoginPage.jsx
import React from "react";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard"); // Changed to dashboard for more professional feel
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const goToLanding = () => {
    navigate("/");
  };

  // Google Logo SVG Component
  const GoogleLogo = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      className="mr-3"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );

  // Back Arrow Icon
  const BackArrowIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2"
    >
      <path d="m12 19-7-7 7-7"/>
      <path d="M19 12H5"/>
    </svg>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-slate-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Back to Landing Button - Top Left */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={goToLanding}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/80 hover:text-white font-medium py-2.5 px-4 border border-white/20 hover:border-white/30 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group hover:scale-105 active:scale-95"
        >
          <BackArrowIcon />
          <span className="text-sm">Back to Home</span>
        </button>
      </div>

      {/* Main login container */}
      <div className="relative w-full max-w-md z-10">
        {/* Enhanced Glass morphism card */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/20 p-6 relative overflow-hidden">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-2xl"></div>
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-white/25">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold text-white mb-1 drop-shadow">Sign In</h1>
              <p className="text-white/70 text-sm">Welcome back</p>
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={signInWithGoogle}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 border border-gray-200 hover:border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group hover:scale-[1.01] active:scale-[0.99] mb-6"
            >
              <GoogleLogo />
              <span className="text-sm">Continue with Google</span>
            </button>

            {/* Legal Links */}
            <div className="text-center mt-6">
              <p className="text-xs text-white/60">
                By continuing, you agree to our{" "}
                <a href="#" className="text-white/80 hover:text-white underline underline-offset-2 transition-colors">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-white/80 hover:text-white underline underline-offset-2 transition-colors">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-xs text-white/50">
            Secured by Firebase Auth
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;