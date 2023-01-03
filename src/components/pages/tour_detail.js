// import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

function TourDetail() {
  const tours = useSelector((store) => store.tours);
  const location = useLocation();
  const filter = location.state;
  const tour = tours.filter((t) => filter === t.id);
  const navigate = useNavigate();
  const back = () => {
    navigate('/');
  };
  //   useEffect(() => {
  //     tour = tours.filter((t) => filter === t.id);
  //   }, []);

  return (
    <div>
      {tour.map((m) => (
        <div key={m} className="lg:flex lg:ap-80">
          <div>
            <img src={m.image} alt="egypt" className="lg:w-[40rem] lg:h-screen object-cover" />
          </div>
          <div className="">
            <p className="font-black text-xl">{m.name}</p>
            <p className="w-80">{m.description}</p>
            <ul className="pl-20">
              <li>city:{m.city}</li>
              <li>Duration(weeks):</li>
              <li>Cost:</li>
            </ul>
            <button className="text-white bg-slate-700 p-2 rounded-md" type="button" onClick={back}>
              Reserve
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourDetail;
