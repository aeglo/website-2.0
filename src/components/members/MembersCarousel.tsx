import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css/bundle';
import "swiper/css/navigation";

const MembersCarousel = ({ children }) => {
    return (
        <Swiper 
          navigation={true} 
          loop={true} 
          autoplay={{
              delay: 2500, 
              disableOnInteraction: false}} 
              modules={[Navigation, Autoplay]} 
              spaceBetween={0} 
              slidesPerView={1}>
            {children.map((child, index) => (
                <SwiperSlide key={'membersSlide' + index}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MembersCarousel;