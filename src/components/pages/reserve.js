import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import * as React from 'react';
import dayjs from 'dayjs';

export default function Reserve() {
  const [date, setDate] = React.useState(dayjs('2022-12-12'));
  return (
    <div className="w-full h-screen">
      <div className="text-center bg-gray-50 text-gray-800 py-20 px-4">
        <h1 className="text-5xl font-bold mt-0 mb-6 underline underline-offset-2">
          Reserve your tour
        </h1>
      </div>
      <div className="flex justify-center pt-10">
        <form className="md:flex md:gap-5 h-full pb-3">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
          </LocalizationProvider>
          <div className="flex flex-col gap-5 pt-10">
            <input
              type="text"
              className="border-b-2 border-gray-200 focus:border-slate-500  p-3 focus:outline-0 focus:ring-0 focus:border-0"
              id="date"
              placeholder="Name"
            />
            <select className="bg-slate-100 rounded-md focus:outline-2 py-3 px-5 focus:outline-slate-500">
              <option>Kenya</option>
              <option>Ethipia</option>
            </select>
            <button type="button" className="bg-slate-500 text-white p-3 rounded-lg">
              Reserve
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
