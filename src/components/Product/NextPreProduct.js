import React, { useRef, useCallback, useState } from "react";
import Products from "../Product/ViewProduct/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



function NextPreProduct(productsInf) {

  return (
    <>
        <Swiper
          loop={false}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            375: {
              slidesPerView: productsInf.PerView[0],
            },

            640: {
              slidesPerView: productsInf.PerView[0],
            },
            768: {
              slidesPerView: productsInf.PerView[1],
            },
            1000: {
              slidesPerView: productsInf.PerView[3],
            },
          }}
        >
          {productsInf.products.map((product, index) => (
            <SwiperSlide key={index}>
              <Products img={product} show={productsInf.progressbuy} />
            </SwiperSlide>
          ))}
        </Swiper>
       
    </>
  );
}

export default NextPreProduct;
