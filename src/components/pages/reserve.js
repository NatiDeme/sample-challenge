import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';

export default function Reserve() {
  // eslint-disable-next-line prettier/prettier, no-bitwise, yoda
  const [date, setDate] = React.useState < Dayjs | null > dayjs('2022-1-12');
  return (
    <div className="w-full">
      <div className="text-center mt-5">
        <p className="text-3xl font-black"> Reserve your Tour</p>
      </div>
      <div className="flex justify-center mt-10">
        <form className="flex flex-col gap-5">
          {/* <input
            type="date"
            className="border-b-2 border-gray-200 focus:border-slate-500  p-1 focus:outline-0"
            id="date"
          /> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
          </LocalizationProvider>
          <input
            type="text"
            className="border-b-2 border-gray-200 focus:border-slate-500  p-1 focus:outline-0"
            id="date"
            placeholder="Name"
          />
          <select className="bg-slate-100 rounded-md focus:outline-2 focus:outline-slate-500 h-10">
            <option>Kenya</option>
            <option>Ethipia</option>
          </select>
        </form>
      </div>
    </div>
  );
}
