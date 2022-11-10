import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/sidenav/sidenav';
import Tour from './components/pages/tour';
import Reservation from './components/pages/reservation';
import Reserve from './components/pages/reserve';

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="w-52 border-x-2 border-black h-screen">
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Tour />} />
          <Route path="/my-reservations" element={<Reservation />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
