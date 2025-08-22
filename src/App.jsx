import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all the pages of your application
import LandingPage from './pages/LandingPage';
// import LoginPage from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import BiologyPage from './pages/BiologyPage'; // <-- Import subject page
import ChemistryPage from './pages/ChemistryPage'; // <-- Import other subject pages
import MathsPage from './pages/MathsPage';
import EarthSciencePage from './pages/EarthSciencePage';
import HistoryPage from './pages/HistoryPage';
import PhysicsPage from './pages/PhysicsPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Add a specific route for each subject */}
        <Route path="/biology" element={<BiologyPage />} />
        {<Route path="/chemistry" element={<ChemistryPage />} /> }
        {<Route path="/physics" element={<PhysicsPage />} /> }
        {<Route path="/maths" element={<MathsPage />} /> }
        {<Route path="/earthscience" element={<EarthSciencePage />} /> }
        {<Route path="/history" element={<HistoryPage />} /> }


      </Routes>
    </BrowserRouter>
  );
}

export default App;