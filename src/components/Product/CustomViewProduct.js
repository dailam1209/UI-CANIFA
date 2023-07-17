import React, { useState, useEffect } from "react";
import { Prices } from "../../data/dataSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import Button from '@mui/material/Button';
import { lastResult } from "../../data/dataImage";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/product/fetchProductApi";
import queryString from 'query-string';
import { useNavigate } from 'react-router-dom';


const CustomViewProduct = () => {
 

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showColor, setShowColor] = useState([]);
  const [showSize, setShowSize] = useState([]);
  const [showPrice, setShowPrice] = useState("");
  const [ loading, setLoading] = useState(false);
  const [listFilterImage, setListFilterImage] = useState([])
  const listProduct = useSelector((state) => state.product.product);
  const listColors = useSelector((state) => state.colors.colors);
  const lengthProduct = listProduct.length;
  
  

  // price
  const removeSlectedAll = (remove) => {
    remove.style.backgroundColor = "white";
    remove.style.color = "#333f48";
    remove.classList.remove("slected");
  };

  const handlePrice = (e) => {
    
    const classSlected = document.querySelectorAll(".slected");
    let nameClass = e.target.classList.value;
    if (nameClass === "") {
      Array.from(classSlected).map((_, index) => {
        removeSlectedAll(_);
      });
      e.target.style.backgroundColor = "#333f48";
      e.target.style.color = "white";
      e.target.classList.add("slected");
      setShowPrice(e.target.innerHTML?.replace(/₫/g, '').replace(/\s+/g, ''));
    } else {
      setShowPrice("");
      Array.from(classSlected).map((_, index) => {
        removeSlectedAll(_);
      });
    }
  };

  const handlePriceNone = () => {
    const classSlected = document.querySelectorAll(".slected");
    setShowPrice("");
      Array.from(classSlected).map((_, index) => {
        removeSlectedAll(_);
      });
  }

  // handle color

  const handleColor = (e) => {
    if(e === 'empty') {
      let sizeRemove = document.querySelectorAll('.option-color');
      Array.from(sizeRemove).map((_, index) => {
        _.classList.remove("border-color");
      });
      setShowColor([]);
      return 0;
    }
    let bool;
    let nextColor;
    nextColor = e;
    console.log("nextColor", nextColor);
    bool = showColor.indexOf(`${nextColor}`);
    console.log(bool)
    if (bool >= 0) {
      const update =[...showColor] ;
      update.splice(bool, 1);
      setShowColor(update);
      let colorRemove = document.querySelector('img[id="'+nextColor+'"]');
      
      colorRemove?.classList?.remove("border-color");

      // return 0;
    } else {
      let color = document.querySelector('img[id="'+nextColor+'"]');
      color?.classList?.add("border-color");

      setShowColor((pre) => [...pre, nextColor]);
    }
  };

  //handle size
  let nextSize;
  const handleSize = (e) => {
    if(e === 'empty') {
      let sizeRemove = document.querySelectorAll('.option-size');
      Array.from(sizeRemove).map((_, index) => {
        _?.classList?.remove("border-size");
      });
      setShowSize([]);
      return 0;
    }
    nextSize = e;
    let bool = showSize.indexOf(`${nextSize}`);
    if (bool >= 0) {
      let updatesize =[...showSize];
      let sizeRemove = document.querySelector('p[id="' + nextSize + '"]');
      sizeRemove?.classList?.remove("border-size");
      updatesize.splice(bool, 1);
      setShowSize(updatesize);
      return 0;
    }

    let size = document.querySelector('p[id="' + nextSize + '"]');
    size?.classList?.add("border-size");
    setShowSize((pre) => [...pre, nextSize]);
  };

  const fetchApi = async (name, search) => {
    setLoading(true);
    let mastercolor ;
    let size;
    let price;

    if(showColor?.length > 0) {
      mastercolor = queryString.stringify({mastercolor: showColor}) + '&';
    } else {
      mastercolor = '';
    }
    if(showSize.length > 0) {
      size = queryString.stringify({size: showSize})  + '&';
    } else {
      size = '';
    }
    if(showPrice !== '') {
      price = queryString.stringify({price: showPrice});
    } else {
      price = '';
    }



    let res;
    try {
      if(showColor.length > 0 || showSize.length > 0 || showPrice !== '') {
        navigate(`?${mastercolor}${size}${price}`);
      }
      if(search !== '') {
        console.log("have");
        res = await fetch (`https://vercel-nodejs.onrender.com/api/v2/product/${name}${window.location.search}`);
        console.log(`https://vercel-nodejs.onrender.com/api/v2/product/${name}?${search}`);
      } else {
        console.log("empty");
        res = await fetch (`https://vercel-nodejs.onrender.com/api/v2/product/${name}?${mastercolor}${size}${price}`);
        console.log(`https://vercel-nodejs.onrender.com/api/v2/product/${name}?${mastercolor}${size}${price}`);
      }
      const data = await res.json();
      const product =  await data.reductProduct;
      console.log(product);
      // setListFilterImage(product);
      console.log("product", product);
      dispatch(
        addProduct(product)
      )
      setLoading(false);
      
    }
    catch(error){
      console.log(error);
    }
    console.log("naviga",{
      mastercolor: mastercolor,
      size: size,
      price: price
    });
    
  }

  
  // result custom
  const handleShow = () => {
    document.querySelector('.close-options').click();
    fetchApi(window.location.pathname?.replace("/", ""));
  };

  const handleClear = () => {
    handleColor('empty');
    handleSize('empty');
    handlePriceNone();
    return 0;
  }

  
  


  // useEffect(() => {
    
  //   if(window.location.search.length > 0) {
  //     fetchApi(window.location.pathname?.replace("/", ""),window.location.search );
  //   } else {

  //     fetchApi(window.location.pathname?.replace("/", ""), '');
  //   }
    
  // }, [window.location])
    
       
  return (
    <div className="custom-product">
      <div className="click-custom">
        <div className="click price">
          <div className="price-titles">
            <span>Khoảng giá</span>
            <span>Mặc định</span>
          </div>
          <div className="price-iterm">
            <ul className="list-iterms">
              {Prices.map((price, index) => (
                <li className="iterm" onClick={(e) => handlePrice(e)} key={index}>
                  <a className="" href="javascript:void(0)">
                    {price}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="click color">
          <div className="price-titles">
            <span>Màu sắc</span>
            <span>Mặc định</span>
          </div>
          <div className="colors">
            <ul className="list-color">
              {
                listColors?.map((color, index) => (
                  <li onClick={(e) => handleColor(e.target.id)}>
                    <img
                      id={`${color[0].public_id}`}
                      className="option-color"
                      src={color[0].url}
                      alt={color[0].public_id}
                    ></img>
                  </li>
                ))
              }
              
            </ul>
          </div>
        </div>
        <div className="click size">
          <div className="price-titles">
            <span>Kích cỡ</span>
            <span>Mặc định</span>
          </div>
          <div className="size">
            <ul className="list-size">
              <li onClick={(e) => handleSize(e.target.id)}>
                <p id="S" className="option-size">
                  S
                </p>
              </li>
              <li onClick={(e) => handleSize(e.target.id)}>
                <p id="M" className="option-size">
                  M
                </p>
              </li>
              <li onClick={(e) => handleSize(e.target.id)}>
                <p id="L" className="option-size">
                  L
                </p>
              </li>
              <li onClick={(e) => handleSize(e.target.id)}>
                <p id="XL" className="option-size">
                  XL
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="result-custom">
        <ul>
          {showColor ? (
            showColor.map((title, index) => (
              <li key={index}>
                <p>{title}</p>
                <FontAwesomeIcon id={title} onClick={(e) => handleColor(e.target.id) } className={`icon ${title}icon`} icon={faClose} />
              </li>
            ))
          ) : (
            <></>
          )}
          {showSize ? (
            showSize.map((title, index) => (
              <li  key={index}>
                <p>{title}</p>
                <FontAwesomeIcon id={title} className={`icon ${title}icon`} onClick={(e) => handleSize(e.target.id) }  icon={faClose} />
              </li>
            ))
          ) : (
            <></>
          )}
          {showPrice !== "" ? (
            <li>
              <p>{showPrice}</p>
              <FontAwesomeIcon id={showPrice} className="icon" onClick={(e) =>handlePriceNone(e.target.id) } icon={faClose} />
            </li>
          ) : (
            <></>
          )}
        </ul>
        <div className="btn-custom">
          <Button className="btn"  onClick={handleClear} >Xóa tất cả</Button>
          <Button className="btn lastbtn"  onClick={handleShow} >Áp dụng</Button>
        </div>
      </div>
    </div>
  );
};

export default CustomViewProduct;
