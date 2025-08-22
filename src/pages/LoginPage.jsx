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
      navigate("/landing");
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main login container */}
      <div className="relative w-full max-w-md z-10">
        {/* Enhanced Glass morphism card */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl"></div>
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/30">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Welcome Back</h1>
              <p className="text-white/80 drop-shadow">Please sign in to your account</p>
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={signInWithGoogle}
              className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-6 border border-white/30 hover:border-white/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-[1.02] active:scale-[0.98]"
            >
              <GoogleLogo />
              <span className="text-base">Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-white/30"></div>
              <span className="px-4 text-sm text-white/70 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">or</span>
              <div className="flex-1 border-t border-white/30"></div>
            </div>

            {/* Additional info */}
            <div className="text-center">
              <p className="text-sm text-white/70">
                By continuing, you agree to our{" "}
                <a href="#" className="text-white hover:text-white/80 underline underline-offset-2">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-white hover:text-white/80 underline underline-offset-2">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-white/60 drop-shadow">
            Secure authentication powered by Firebase
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;