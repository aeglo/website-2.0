import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css/bundle';
import "swiper/css/navigation";
import { useMediaQuery, useTheme } from '@chakra-ui/react';

const MembersSectionCarousel = ({ children }) => {
  const { breakpoints } = useTheme();
  const [isGreaterThanSm] = useMediaQuery(`(min-width: ${breakpoints.sm})`);
  const [isGreaterThanXl] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  let slidesPerView = isGreaterThanSm ? isGreaterThanXl ? 5: 3 : 2;
  
  return (
    <Swiper
      navigation={true}
      loop={true}
      autoplay={{
        delay: 2500, 
        disableOnInteraction: false}} 
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={slidesPerView}>
      {children.map((child, index) => (
        <SwiperSlide key={'membersSectionSlide' + index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MembersSectionCarousel;