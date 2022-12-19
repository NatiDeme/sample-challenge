/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
// import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    img: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Visit Rwanda',
    desc: 'Amazing place in the horn of africa'
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Visit Uganda',
    desc: 'Whou would hate to visit Lake Victoria'
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Visit Egypt',
    desc: 'Whou would hate to visit Lake Victoria'
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Visit Ertirea',
    desc: 'Whou would hate to visit Lake Victoria'
  }
];
function Tour() {
  return (
    <div className="w-full">
      <div className="text-center mt-5">
        <p className="text-3xl font-black"> Reserve your Tour</p>
      </div>
      <div className="pt-32">
        <Swiper
          className="w-[95rem] h-[40rem]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={3}
          grabCursor="true"
          navigation
          pagination={{ clickable: true }}>
          {tours.map((d) => (
            <SwiperSlide key={d.id}>
              <div className="w-80 duration-700 ease-in-out">
                <div className="flex justify-center ">
                  <img className="w-96 h-80 rounded-full" src={d.img} alt="asda" />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xl font-bold">{d.title}</p>
                  <p>{d.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Tour;
