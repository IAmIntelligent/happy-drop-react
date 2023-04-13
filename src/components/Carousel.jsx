import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
// import "swiper/modules/navigation/navigation";
// import "swiper/modules/pagination/pagination.min.css";
import "swiper/css/navigation"
import "swiper/css/pagination"
SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      className="my-8 max-w-4xl mx-auto"
    >
      <SwiperSlide>
        <img
          src="https://images.indianexpress.com/2021/02/fruit-juice-1200.jpg"
          alt="Juice 1"
          className="w-full h-64 object-cover"
        />
        {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
        {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div> */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-3xl font-semibold mb-4">Fresh Juices</h2>
            <p className="text-lg">Made with 100% natural fruits</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://c.ndtvimg.com/2019-06/dpbuga6o_fruit-juice-_625x300_25_June_19.jpg"
          alt="Juice 2"
          className="w-full h-64 object-cover"
        />
        {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
        {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div> */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-3xl font-semibold mb-4">Refreshing Drinks</h2>
            <p className="text-lg">Perfect for hot summer days</p>
          </div>
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default Carousel;
