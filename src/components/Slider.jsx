import { Container } from '@mui/material';
import React from 'react';
import { slider } from '../data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './slideCSS.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

export default function Slider() {
  SwiperCore.use([Autoplay]);

  console.log(slider);
  return (
    <ContainerWrapper>
      <Swiper
        effect={'coverflow'}
        spaceBetween={0}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {slider.map((images) => (
          <SwiperSlide key={images.id}>
            <SlideImg src={images.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerWrapper>
  );
}

const SlideImg = styled.img`
  width: 300px;
`;
const ContainerWrapper = styled(Container)`
  position: relative;
  height: 100%;
`;
