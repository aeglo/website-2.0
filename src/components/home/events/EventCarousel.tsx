import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css/bundle';
import "swiper/css/navigation";
import { useMediaQuery, useTheme } from '@chakra-ui/react';

const EventCarousel = ({ children }) => {
  const { breakpoints } = useTheme();
  const [isGreaterThanSm] = useMediaQuery(`(min-width: ${breakpoints.sm})`);
  const [isGreaterThanXl] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  let slidesPerView = isGreaterThanSm ? isGreaterThanXl ? 3: 2 : 1;
  
  return (
    <Swiper
      navigation={true}
      loop={true}
      modules={[Navigation]}
      spaceBetween={28}
      slidesPerView={slidesPerView}>
      {children.map((child, index) => (
        <SwiperSlide key={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventCarousel;
