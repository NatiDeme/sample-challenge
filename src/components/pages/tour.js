import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTours } from '../../redux/tour/tour';

function Tour() {
  const allTours = useSelector((store) => store.tours);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTours());
  }, []);
  return (
    <div className="w-full">
      <div className="text-center mt-5">
        <p className="text-3xl font-black"> Reserve your Tour</p>
      </div>
      <div className="pt-32">
        <Swiper
          className="lg:w-[95rem] lg:h-[35rem] h-[30rem]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={3}
          grabCursor="true"
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            850: {
              slidesPerView: 2
            }
          }}>
          {allTours.map((d) => (
            <SwiperSlide key={d.id}>
              <Link to="/detail" state={d.id}>
                <div className="flex justify-center ">
                  <img className="w-80 h-80 rounded-full" src={d.image} alt="asda" />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xl font-bold">{d.city}</p>
                  <p className="px-40">{d.description.substring(0, 100)}</p>
                  <p>{d.name}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Tour;
