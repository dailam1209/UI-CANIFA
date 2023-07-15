import React, { useState, useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faChevronCircleRight,
  faChevronLeft,
  faClose,
  faSubtract,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { empty_product } from "../../assets/cart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incProduct } from "../../redux/Cart/cartbuyRedux";
import { removeItem } from "../../redux/Cart/cartbuyRedux";
import { decProduct } from "../../redux/Cart/cartbuyRedux";
import cartService from "../../redux/Cart/CartService";
import { ItemComeBack } from "../../hooks/comeback";
import { useNavigate} from "react-router-dom";

function Cart() {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const cartBuyRedux = useSelector((state) => state.cart.productbuy).filter(iterm => iterm.orderId === "");
  const amountSum =  useSelector((state) => state.cart.amount);
  const token = useSelector((state) => state.user?.userToken);
  const userId = useSelector((state) => state.user?.userInfor?._id);
  let lengthCart = cartBuyRedux.length;
 
  

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  
  const handleClose = () => {
    document.querySelector(".cart").parentNode.style.display = "none";
  };
  
  
  
  const hadleFetchCart = (productId, quantity,size) => {
    let inforCartAndUser = {
      "userId": userId,
      "productId": productId,
      "quantity": quantity,
      "size": size
    }
    cartService.updateCartIterm(inforCartAndUser, token);
  }

  const hadleFetchRemoveCart = (productId, size) => {
    let inforCartAndUser = {
      "userId": userId,
      "productId": productId,
      "size": size
    }
    cartService.removeCartIterm(inforCartAndUser, token);
  }

  const dispatchIncrProduct = (id , src, size, productId, quantity) => {
    dispatch(
      incProduct([{
        id: id,
        productImage: src,
        size: size
      }])
    )
    total();
    if(userId !== undefined && token !== undefined) {
      hadleFetchCart(productId, Number(quantity) + 1, size);
    }
  }

  const total =  () => {
    let count = 0;
    if(cartBuyRedux) {
      cartBuyRedux.map((iterm) => {
        count = count +  iterm.quantity * iterm?.inforproduct[0]?.price ;
      })
    }
  }


  
  const dispatchRemoveProduct = (index, productId, size, id) => {
    dispatch(
      removeItem([{
        index: index
      }])
    )
    total();
    if(userId !== undefined && token !== undefined) {
      hadleFetchRemoveCart(productId, size);
    }
  }

  const dispatchDecProduct = (id , src, size, index, productId, quantity) => {
    dispatch(
      decProduct([{
        id: id,
        productImage: src,
        size: size
      }])
      )
      total();
      console.log("Number(quantity) - 1", Number(quantity) - 1);
      if( Number(quantity) - 1 === 0 && userId  && token ) {
        hadleFetchRemoveCart(productId, size);
      } else if(userId !== undefined && token !== undefined) {
        hadleFetchCart(productId, Number(quantity) - 1, size)
      } 
  }

  const handleBuy = () => {
    console.log("typeof token", typeof token);
    console.log("window.location.pathname", window.location.pathname);
    if(window.location.pathname == "/login") {
      document.querySelector('.icon-infor-image__user').click()
      // document.querySelector('.icon-infor-image__user').click()
    }
    // document.querySelector('.pc').style.display = 'none';
    // if( typeof (JSON.parse(localStorage.getItem('userShop'))) !== Object) {
    //   navigate('http://localhost:3000/login')
    // }
  }

  


  useEffect(() => {
    total();
},[lengthCart])
  
  
  return (
    <div className="cart">
      <div className="cart-padding">
        {lengthCart > 0 ? (
          <>
            <div className="cart-count-check">
              <FontAwesomeIcon
                className="icon-check-out"
                icon={faChevronLeft}
                onClick={handleClose}
              />
              <p className="cart-count">({lengthCart}) sản phẩm trong giỏ hàng</p>
              <p className="cart-count">Giỏ hàng ({cartBuyRedux.length})</p>
            </div>

            <div className="wapper-scroll">
              {/* product detail */}
              <div className="warrper">
                {
                  cartBuyRedux.map((_, index) => (
                    <>
                    <div className="cart-detail">
                      <div className="cart-image">
                        <NavLink to="/product">
                          <img
                            className="img-product"
                            src={_.productImage}
                            alt={_.productImage}
                          />
                        </NavLink>
                        
                        {/* end check title */}
                      </div>
                      <div className="cart-infor">
                        {/* click icon cart */}
                        <div className="title-close">
                          <NavLink
                            to="/product"
                            className="navlink"
                            style={{ textDecoration: "none" }}
                          >
                            <p className="title">Ao phong dai tay nu co hinh in</p>
                          </NavLink>
                        </div>
                        {/* color cart */}
                        <div className="cart-size">
                          <p>{_.size}</p>
                          <p>/</p>
                          <img
                            className="img"
                            src={_.productColor}
                            alt=""
                          />
                        </div>
                        {/* end color cart */}
                        <div className="cart-price">
                          <p>{String(_?.inforproduct?.price !== undefined ? _?.inforproduct?.price : _?.inforproduct[0]?.price ).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 ₫</p>
                          <div className="tongle">
                            <FontAwesomeIcon
                              className="cart-icon"
                              icon={faSubtract}
                              onClick={() => dispatchDecProduct(`${_.id}`, `${_.productImage}`, `${_.size}`, {index}, `${_.productId}`, `${_.quantity}`)}
                            />
                            <p>{_.quantity}</p>
                            <FontAwesomeIcon 
                            className="cart-icon"
                            icon={faAdd} 
                            onClick={() => dispatchIncrProduct(`${_.id}`, `${_.productImage}`, `${_.size}`, `${_.productId}`, `${_.quantity}` )}/>
                          </div>
                        </div>
                      </div>
                      
                      <FontAwesomeIcon className="close-pos" icon={faClose} onClick={() => dispatchRemoveProduct({index} ,`${_.productId}`, `${_.size}`, `${_._id}`)} />
                    </div>
                    </>
                  ))
                }
                

                {/* suggesst */}
              </div>
              <div className="suggest">
                <p className="suggest-title">Có thể bạn sẽ thích</p>
                <div className="product-suggest">
                  <div className="products">
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="chech-out-and-total">
              <p className="sum-mobile">Tổng:{String(amountSum).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 ₫</p>
              {/* check all */}
              <NavLink to={userId ? "/shopcart" : "/login"}>
                <button className="check-cart" onClick={() => handleBuy()}>Đặt hàng</button>
              </NavLink>
              {/* total */}
              <p className="sum">Tổng: {String(amountSum).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 ₫</p>
            </div>
          </>
        ) : (
            <div className="empty-cart">
              <p>Giỏ hàng(0)</p>
              <div className="empty-cart-margin">
                <img src={empty_product} alt="empty"></img>
                <p>Chưa có sản phẩm</p>
                <p>trong giỏ hàng của bạn.</p>
                <FontAwesomeIcon
                  className="close-cart"
                  icon={faClose}
                  onClick={handleClose}
                />
                <FontAwesomeIcon
                  className="close-cart-mobile"
                  icon={faChevronLeft}
                  onClick={handleClose}
                />
              </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
