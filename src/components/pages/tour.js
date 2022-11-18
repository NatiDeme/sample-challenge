/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import { useState } from 'react';

const tours = [
  {
    id: 0,
    img: 'https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Visit Nirobi',
    desc: 'asdasadasdasdadasdadas'
  },
  {
    id: 1,
    img: 'https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Visit Ethiopia',
    desc: 'The capital of Africa'
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Visit Rwanda',
    desc: 'Amazing place in the horn of africa'
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Visit Uganda',
    desc: 'Whou would hate to visit Lake Victoria'
  }
];
function Tour() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const offSet = 3;
  const len = tours.length;
  const prev = () => {
    setCurrentIndex(currentIndex === 0 ? len - 1 - offSet : currentIndex - 1);
  };
  const next = () => {
    setCurrentIndex(currentIndex === len - 1 - offSet ? 0 : currentIndex + 1);
  };
  console.log(currentIndex);
  return (
    <div className="w-full">
      <div className=" flex flex-col items-center pt-5">
        <p className="text-3xl font-black">Latest Tours</p>
        <p>Please select a Tour</p>
      </div>
      <div className="flex justify-between mt-36 items-center">
        <div className="md:block hidden">
          <button
            className="bg-gray-200 hover:bg-gray-400 w-14 p-5 rounded-r-full bg-opacity-50 hidden lg:block"
            onClick={prev}
            type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        {/* <div className="flex gap-6 justify-center">
          {tours.map((tour) => (
            <div className="w-80" key={tour.id}>
              <div className="flex justify-center">
                <img className="w-72 h-72 rounded-full" src={tour.img} alt="asda" />
              </div>
              <div className="mt-3 text-center">
                <p className="text-xl font-bold">{tour.title}</p>
                <p>{tour.desc}</p>
              </div>
            </div>
          ))}
        </div> */}
        <List data={tours.filter((d, i) => i > currentIndex && i <= currentIndex + offSet)} />
        <div className="md:block justify-between hidden">
          <button
            className="bg-black w-14 p-5 rounded-l-full hidden lg:block"
            onClick={next}
            type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function List({ data = [] }) {
  if (!data.length) return;
  return (
    <div className="flex gap-6 justify-center">
      {data.map((tour) => (
        <div className="w-80" key={tour.id}>
          <div className="flex justify-center">
            <img className="w-72 h-72 rounded-full" src={tour.img} alt="asda" />
          </div>
          <div className="mt-3 text-center">
            <p className="text-xl font-bold">{tour.title}</p>
            <p>{tour.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tour;
