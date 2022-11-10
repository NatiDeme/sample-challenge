import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/sidenav/sidenav';
import Tour from './components/pages/tour';
import Reservation from './components/pages/reservation';

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="w-64 border-x-2 border-black h-screen">
          <Nav />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Tour />} />
            <Route path="/reserve" element={<Reservation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
