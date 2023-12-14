import React from "react";
import './movieSwiper.css';

// import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
//import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

function MovieSwiper(){
return(
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
            delay:2500,
            disableOnInteraction:false,
        }}
        covertflowEffect={{
            rotate:50,
            stretch:0,
            depth:100,
            modifier:1,
            slideShadows:true,
        }}
        loop={true}
        modules={[Autoplay,EffectCoverflow]}
        className="movieSwiper"
    >
        <SwiperSlide>
            <img src="" alt="Preview Image" />
        </SwiperSlide>
    </Swiper>
);
}
export default MovieSwiper;