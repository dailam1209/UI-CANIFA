import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { newArrProduct } from "../../data/dataImage";
import { lastResult } from "../../data/dataImage";
import { useDispatch, useSelector } from "react-redux";
const ProductSlick = ( data) => {
  const productDetails = newArrProduct[1];
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef();
  const slider2 = useRef();

  const newListProduct = useSelector((state) => state.product.product);
  const newArrProduct = lastResult('code', newListProduct)

  // i dont seem to need this
  //useEffect(() => {
  //    setNav1(sliderEl1);
  //    setNav2(sliderEl2);
  //  }, []);

  // console.log(data.img);
  return (
    <div className="main">
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
      >
            {
            productDetails.map((img, index) => (
            // <div className="singer-img">
                <img src= {img.img} alt = ""/>
            // </div>
                ))
            }
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
         {
            productDetails.map((img) => (
        <div className="muliti-img">
          <img src= {img.img} alt = ""/>
        </div>
            ))
        }
      </Slider>
    </div>
  );
};

export default ProductSlick;
