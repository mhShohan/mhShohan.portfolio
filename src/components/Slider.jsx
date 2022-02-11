import { Container } from '@mui/material';
import React from 'react';
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
                <SwiperSlide>
                    <SlideImg src="./images/slider/1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src="./images/slider/2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src="./images/slider/3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src="./images/slider/4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src="./images/slider/5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src="./images/slider/6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src="./images/slider/7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src="./images/slider/8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src="./images/slider/9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src="./images/slider/10.jpg" />
                </SwiperSlide>
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
