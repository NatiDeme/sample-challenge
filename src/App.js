import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/sidenav/sidenav';
import Tour from './components/pages/tour';
import Reservation from './components/pages/reservation';
import Reserve from './components/pages/reserve';
import CreateTour from './components/pages/new_tour';
import DeleteTour from './components/pages/delete_tour';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import TourDetail from './components/pages/tour_detail';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Tour />} />
          <Route path="/my-reservations" element={<Reservation />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/create-tour" element={<CreateTour />} />
          <Route path="/delete-tour" element={<DeleteTour />} />
          <Route path="/detail" element={<TourDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
