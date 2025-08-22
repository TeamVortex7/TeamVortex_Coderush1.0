import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";

// Import all the pages of your application
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import BiologyPage from './pages/BiologyPage'; 
import ChemistryPage from './pages/ChemistryPage';
import MathsPage from './pages/MathsPage';
import EarthSciencePage from './pages/EarthSciencePage';
import HistoryPage from './pages/HistoryPage';
import PhysicsPage from './pages/PhysicsPage';

function App() {
  const [user, loading] = useAuthState(auth);

  // A loading state is crucial while Firebase checks authentication.
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* --- Public Routes --- */}
        
        {/* Rule 1: The Landing Page is always the homepage. */}
        <Route path="/" element={<LandingPage />} />

        {/* Rule 2: If a logged-in user tries to visit the login page, send them to the dashboard. */}
        <Route 
          path="/login" 
          element={user ? <Navigate to="/dashboard" /> : <LoginPage />} 
        />

        {/* --- Protected Routes (These require a user to be logged in) --- */}
        
        {/* Rule 3: If a non-user tries to access a protected page, send them to login. */}
        <Route 
          path="/dashboard" 
          element={user ? <DashboardPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/biology" 
          element={user ? <BiologyPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/chemistry" 
          element={user ? <ChemistryPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/physics" 
          element={user ? <PhysicsPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/maths" 
          element={user ? <MathsPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/earthscience" 
          element={user ? <EarthSciencePage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/history" 
          element={user ? <HistoryPage /> : <Navigate to="/login" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;