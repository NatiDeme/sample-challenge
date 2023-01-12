import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import * as React from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addReservation } from '../../redux/reservations/reservation';
import { getTours } from '../../redux/tour/tour';

export default function Reserve() {
  const tours = useSelector((store) => store.tours);
  const [date, setDate] = useState(dayjs('2023-01-01'));
  const finalDate = [];
  const [value, setValue] = useState({
    date: '',
    tour_id: ''
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };
  const sendMe = () => {
    const token = localStorage.getItem('token');
    if (token !== '') {
      finalDate.push(date.$D);
      finalDate.push(date.$M);
      finalDate.push(date.$y);
      const me = finalDate.join('-');
      value.date = me;
      dispatch(addReservation(value, token));
    } else {
      navigate('/login');
    }
  };
  useEffect(() => {
    dispatch(getTours());
  });

  return (
    <div className="w-full h-screen">
      <div className="text-center bg-gray-50 text-gray-800 pb-10 py-14 px-4">
        <h1 className="text-5xl font-bold mt-0 mb-6 underline underline-offset-2">
          Reserve your tour
        </h1>
      </div>
      <div className="flex justify-center pt-10">
        <form className="lg:flex-row lg:justify-center md:gap-5 h-full pb-3 w-full flex flex-col items-center">
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
            </LocalizationProvider>
          </div>
          <div className="flex flex-col gap-5 pt-10 w-96 px-10">
            <input
              type="text"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              id="name"
              placeholder="Name"
            />
            <select
              className="bg-gray-100 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:border-gray-300 block w-full p-2.5"
              id="tour_id"
              onChange={onChange}>
              {tours.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.city}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="bg-slate-500 text-white p-3 rounded-lg hover:bg-gray-400 font-bold py-3 px-4"
              onClick={sendMe}>
              Reserve
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
