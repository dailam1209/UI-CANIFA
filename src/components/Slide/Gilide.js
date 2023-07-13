import { SwiperSlide } from 'swiper/react';
import { Swiper as SwiperComponent } from 'swiper/react';
import React, { useRef, useCallback } from 'react';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';

const MyComponent = (props) => {
    
    const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <SwiperComponent
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
     onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
     }}
    >
     
      
      {
            props.image.map((product, index) => (
                <SwiperSlide>
              <img 
              key ={index}
              className="img-hover"
                src={product.img}
                alt={product.desc}
              ></img>
              </SwiperSlide>
            ))

          }
      <div ref={navigationPrevRef} />
      <div ref={navigationNextRef} />
    </SwiperComponent>
  )
  }

export default MyComponent;