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
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/" />} />

        {/* Add a specific route for each subject */}
        <Route path="/biology" element={<BiologyPage />} />
        <Route path="/chemistry" element={<ChemistryPage />} />
        <Route path="/physics" element={<PhysicsPage />} />
        <Route path="/maths" element={<MathsPage />} />
        <Route path="/earthscience" element={<EarthSciencePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;