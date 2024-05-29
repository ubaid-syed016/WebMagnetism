import React, { useState, useRef, useEffect } from 'react';
import SwiperCore, { Swiper } from 'swiper';
import 'swiper/swiper-bundle.css';

import { WorkShow } from '../constants/index.js';
import '../style/swiper.css';

SwiperCore.use([Swiper]);

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const sliderContent = WorkShow; // Assuming this is where your slide data is coming from

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slideTo(currentIndex, 0); // Slide to the current index when the component mounts
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderContent.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderContent.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="custom-slider-container relative  pt-5">
      <Swiper
        ref={sliderRef}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {sliderContent.map((item, index) => (
          <div key={index} className="swiper-slide">
            <div className=" flex justify-start flex-col">
              <img src={item.imgUrl} alt={item.label} className=" h-[350px] sm:w-[300px]   object-cover rounded-lg" />
              <h3 className=" uppercase font-inter font-medium  pt-3 pb-2  ">{item.label}</h3>
              <p className=" text-text-color font-inter text-[13px] ">{item.bio}</p>
            </div>
          </div>
        ))}
      </Swiper>
      <div className=' flex gap-3 custom-slider-controls'>
        <div className=" cursor-pointer" onClick={handlePrev}>1</div>
        <div className=" h-10 w-10 rounded-full">...</div> {/* Pagination outside Swiper container */}
        <div className=" cursor-pointer" onClick={handleNext}>2</div>
      </div>
    </div>
  );
};

export default CustomSlider;
