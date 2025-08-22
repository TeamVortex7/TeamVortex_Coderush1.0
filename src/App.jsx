import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all the pages of your application
import LandingPage from './pages/LandingPage';

import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<LandingPage />} />

        {/* Routes for authentication */}
        {/* Route for the user dashboard (after login) */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;