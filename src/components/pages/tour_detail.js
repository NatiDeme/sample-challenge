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
    navigate('/reserve');
  };
  const backToBase = () => {
    navigate('/');
  };

  return (
    <div>
      {tour.map((m) => (
        <div key={m} className="flex justify-center mt-10 ">
          <div
            style={{ backgroundImage: `url(${m.image})` }}
            className="bg-no-repeat bg-cover bg-center lg:h-[32rem] lg:w-[65rem] rounded-3xl w-72 h-72">
            <div className="bg-opacity-20 bg-black h-full w-full rounded-3xl">
              <p className="font-black lg:text-5xl text-3xl text-white pt-14 text-center lg:px-44 px-3">
                {m.name}
              </p>
            </div>
            <div className="flex gap-10 bg-[#f9fafb] bg-opacity-80 blur-md rounded-2xl lg:w-[50rem] lg:h-20 lg:mx-36 drop-shadow-xl absolute bottom-[22rem] justify-around" />
            <ul className="flex pt-3 gap-10 bg-[#f9fafb] bg-opacity-80 rounded-2xl lg:w-[50rem] lg:h-20 lg:mx-36 absolute bottom-[22rem] justify-around">
              <li>
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="text-lg font-semibold">City</span>
                </span>
                <p className="mt-3 px-7">{m.city}</p>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-lg font-semibold"> Duration(weeks)</span>
                </span>
                <p className="mt-3 px-8">{m.duration}</p>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-lg font-semibold">Cost</span>
                </span>
                <p className="mt-3 px-7">{m.price}</p>
              </li>
            </ul>
            <div className="mt-16">
              <p>{m.description}</p>
            </div>
            <div className="flex justify-between">
              <button
                className="text-white bg-slate-700 p-2 rounded-md flex gap-2 mt-3"
                type="button"
                onClick={backToBase}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
                <p>Back</p>
              </button>
              <button
                className="text-white bg-slate-700 p-2 rounded-md flex gap-2 mt-3 hover:bg-none hover:border-slate-700"
                type="button"
                onClick={back}>
                <p>Reserve</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourDetail;
