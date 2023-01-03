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
        <div key={m} className="flex justify-center mt-10 ">
          <div
            style={{ backgroundImage: `url(${m.image})` }}
            className="bg-no-repeat bg-cover bg-center h-[32rem] w-[65rem] rounded-3xl">
            <div className="bg-opacity-20 bg-black h-full w-full">
              <p className="font-black text-5xl text-white pt-14 text-center px-44">{m.name}</p>
              <ul className="">
                <li>city:{m.city}</li>
                <li>Duration(weeks):</li>
                <li>Cost:</li>
              </ul>
              <button
                className="text-white bg-slate-700 p-2 rounded-md"
                type="button"
                onClick={back}>
                Reserve
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourDetail;
