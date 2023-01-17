import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRes, removeRes } from '../../redux/reservations/reservation';

function Reservation() {
  const reservations = useSelector((store) => store.reservation);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.length > 0) {
      const token = localStorage.getItem('token');
      dispatch(getRes(token));
    } else {
      navigate('/login');
    }
  }, [reservations]);
  const clickHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    dispatch(removeRes(token, e.target.id));
  };
  return (
    <div className="h-full lg:h-screen">
      <div className="text-center bg-gray-50 text-gray-800 py-10 px-4">
        <h1 className="text-5xl font-bold mt-0 underline underline-offset-2">Your Tours</h1>
      </div>
      <div className=" flex-col items-center hidden">
        <p className="text-3xl font-black">You have not created any reservations yet</p>
        <p>Please select a Tour</p>
      </div>
      <div className="flex justify-center mt-4">
        {reservations.map((m) => (
          <div
            key={m.id}
            className="flex flex-col mx-3 md:flex-row md:max-w-5xl rounded-lg bg-white shadow-lg h-[40rem] md:h-[20rem] lg:h-[15rem]">
            <img
              className=" w-full h-96 md:h-full object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={m.tour.image}
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">{m.tour.name}</h5>
              <p className="text-gray-700 text-base mb-4">{m.tour.description.substring(0, 300)}</p>
              <p className="text-gray-600 text-xs">Reserved Date: {m.date}</p>
              <button
                type="button"
                onClick={clickHandler}
                id={m.reservation_id}
                className="w-52 bg-slate-500 text-white p-3 rounded-lg hover:bg-gray-400 font-bold py-3 px-4 mt-2 uppercase">
                Cancel Reservation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reservation;
