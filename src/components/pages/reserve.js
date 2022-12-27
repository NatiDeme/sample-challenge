import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import * as React from 'react';
import dayjs from 'dayjs';

export default function Reserve() {
  const [date, setDate] = React.useState(dayjs('2022-12-12'));
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
              id="date"
              placeholder="Name"
            />
            <select className="bg-gray-100 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:border-gray-300 block w-full p-2.5">
              <option>Kenya</option>
              <option>Ethipia</option>
            </select>
            <button
              type="button"
              className="bg-slate-500 text-white p-3 rounded-lg hover:bg-gray-400 font-bold py-3 px-4">
              Reserve
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
