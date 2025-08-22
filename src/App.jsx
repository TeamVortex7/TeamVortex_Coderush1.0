

// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import { auth } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/landing" /> : <LoginPage />} />
      <Route path="/landing" element={user ? <LandingPage /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App;