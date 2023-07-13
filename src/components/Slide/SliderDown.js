import React, { useEffect } from "react";
import TopSildeDown from "./TopSildeDown";
import { useSelector } from "react-redux";


function SliderDown() {

    const amountSum =  useSelector((state) => state.cart.amount);



    useEffect(() => {
        const container = document.querySelector('.slider-pos')
        const slider = document.querySelectorAll('.slider');
        let index = 1;
        const interval = 2000;
        // eslint-disable-next-line no-unused-vars
        let slideId;

        const firstSlide = slider[0].cloneNode(true);
        const lastSlide = slider[slider.length - 1 ].cloneNode(true);

        firstSlide.id = 'first-clone';
        lastSlide.id = 'last-clone';

        

        const slideWidth = 40;

        container.addEventListener('transitionend', () => {
            if (slider[index].id === 'first-clone') {
                
              container.style.transition = 'none';
              index = 1;
              container.style.transform = `translateY(${-slideWidth * index}px)`;
            }
          
            if (slider[index].id === 'last-clone') {
              
              container.style.transition = 'none';
              index = slider.length - 2 ;
              container.style.transform = `translateY(${-slideWidth * index}px)`;
            }
          });
          container.prepend(lastSlide);
          container.append(firstSlide);

          const moveToNextSlide = () => {
            if (index >= slider.length - 1) return;
            index++;
            container.style.transition = '.9s ease-out';
            container.style.transform = `translateY(${-slideWidth * index}px)`;
          };

          const startSlide = () => {
            setInterval(() => {
              moveToNextSlide();
            }, interval);
          };

          startSlide();

    },[2000])

    return (
      <>
        <TopSildeDown/>
        <div className="sliders">
            <div className="slider-pos">

                   
                    <div className="slider">
                        <p>ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày
                        </p>
                    </div>
                    <div className="slider"> 
                        {
                          amountSum > 499 ? (
                            <p>Bạn đã được nhận mã giảm giá
                            </p>
                          ) : (
                            <p>Thêm vào giỏ  {499 - amountSum}.000 ₫ để  miễn phí vận chuyển
                          </p>
                          )
                        }
                    </div>
                    <div className="slider"> 
                        <p>Miễn phí vận chuyển
                        </p>
                    </div>
                    <div className="slider"> 
                        <p>Mua sắm ưu đãi tại Shop
                        </p>
                    </div>
                
            </div>

        </div>
      </>
    );
}

export default SliderDown;