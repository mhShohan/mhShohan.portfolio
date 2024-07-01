import { Container } from '@mui/material';
import React from 'react';

import { styled } from '@mui/material/styles';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

// import required modules
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { slider } from '@/data';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '@/styles/slideCSS.css';

export default function Slider() {
  SwiperCore.use([Autoplay]);

  return (
    <Container maxWidth='md' sx={{ position: 'relative', width: '100%' }}>
      <Swiper
        effect={'coverflow'}
        spaceBetween={0}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 10,
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
        className='mySwiper'
      >
        {slider.map((images) => (
          <SwiperSlide key={images.id}>
            <SlideImg src={images.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

const SlideImg = styled('img')({
  width: '300px !important',
});

const ContainerWrapper = styled(Container)({
  position: 'relative',
  height: '100%',
});
