import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTours, removeTour } from '../../redux/tour/tour';

export default function DeleteTour() {
  const tours = useSelector((store) => store.tours);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [myTours, setMyTours] = useState([]);
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    dispatch(removeTour(token, e.target.id));
  };
  useEffect(() => {
    if (user.length > 0) {
      dispatch(getTours());
      const m = tours.filter((m) => m.user_id === user[0].user.user_id);
      setMyTours(m);
    } else {
      navigate('/login');
    }
  }, [tours]);
  return (
    <div className="w-full">
      <div className="text-center bg-white text-gray-800 pb-10 py-14">
        <h1 className="text-5xl font-bold underline underline-offset-2">Your Tour</h1>
      </div>
      <div className=" flex-col items-center pt-5 hidden">
        <p className="text-3xl font-black">You have not created any reservations yet</p>
        <p>Please select a Tour</p>
      </div>
      {myTours.length > 0 ? (
        <div className="flex justify-center gap-4">
          {myTours.map((a) => (
            <div
              key={a.id}
              className="max-w-sm h-min bg-white border border-gray-200 rounded-lg shadow-md">
              <a href=".">
                <img className="rounded-t-lg" src={a.image} alt="" />
              </a>
              <div className="p-5">
                <a href=".">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{a.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">{a.description}</p>
                <button
                  type="button"
                  onClick={clickHandler}
                  id={a.id}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Delete Event
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <span className="font-semibold text-xl">You haven not created tours yet</span>
        </div>
      )}
    </div>
  );
}
