import React, { useEffect, Fragment } from 'react';
// import { useMotionValue } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '../Util/card/card';

const Events = () => {
  useEffect(() => {
    const deviceWidth =
      window.innerWidth > 0 ? window.innerWidth : screen.width;
    console.log(deviceWidth);
  }, []);

  return (
    <Fragment>
      <section id="section-events">
        <h2>Upcoming Events</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card>1</Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>2</Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>3</Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>4</Card>
          </SwiperSlide>
        </Swiper>
      </section>
      <style>
        {`
        .events__container {
          display: flex;
          
        }
      `}
      </style>
    </Fragment>
  );
};

export default Events;
