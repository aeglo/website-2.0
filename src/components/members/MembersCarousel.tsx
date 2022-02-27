import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import "swiper/css/navigation";

const MembersCarousel = ({ children }) => {
    return (
        <Swiper 
          navigation={true} 
          loop={true} 
          autoplay={{
              delay: 2500, 
              disableOnInteraction: false}} 
              modules={[EffectFade, Navigation, Autoplay]} 
              effect="fade" 
              spaceBetween={0} 
              slidesPerView={1}>
            {children.map((child, index) => (
                <SwiperSlide key={index}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MembersCarousel;