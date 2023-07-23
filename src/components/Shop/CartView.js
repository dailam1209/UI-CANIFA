import React, { useState, useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faClose,
  faSubtract,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incProduct } from "../../redux/Cart/cartbuyRedux";
import { removeItem } from "../../redux/Cart/cartbuyRedux";
import { decProduct } from "../../redux/Cart/cartbuyRedux";
import cartService from "../../redux/Cart/CartService";

function CartView() {

  const dispatch = useDispatch();
  const cartBuyRedux = useSelector((state) => state.cart.productbuy).filter(iterm => iterm.orderId === "");
  const amountSum =  useSelector((state) => state.cart.amount);
  const token = useSelector((state) => state.user?.userToken);
  const userId = useSelector((state) => state.user?.userInfor?._id);
  let lengthCart = cartBuyRedux.length;
 
  
  
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
        count = count +  iterm.quantity * iterm.price ;
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
    if(quantity > 1) {
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
  }

  const handleBuy = () => {
    const token = JSON.parse(localStorage.getItem('userShop'));
    if(!token) {
    }
  }

  function formatCash(str) {
    return str.reverse().reduce((prev, next, index) => {
      return ((index % 3) ? next : (next + ',')) + prev
    })
 }


  useEffect(() => {
    total();
},[lengthCart])
  
  
  return <>
  <div className="check-review">
              <div className="checkout-step-title">
                  <h2>({lengthCart}) sản phẩm</h2>
              </div>
              <table className="checkout-cart-iterms">
                  <thead>
                      <tr>
                          <th className="col iterm">
                              <span>Sản phẩm</span>
                          </th>
                          <th className="col price">
                              <span>Giá tiền</span>
                          </th>
                          <th className="col qty">
                              <span>Số lượng</span>
                          </th>
                          <th className="col subtotal">
                              <span>Tổng tiền</span>
                          </th>
                          <th className="col action">
                              <span></span>
                          </th>
                      </tr>
                  </thead>
              </table>
    </div>
  <div className="cart-view">
    <div className="cart-padding">
            {/* product detail */}
            <div className="warrper">
              {
                cartBuyRedux.map((_, index) => (
                  <div className="cart-detail">
                    <div className="col cart-image">
                      <NavLink to="/product">
                        <img
                          className="img-product"
                          src={_.productImage}
                          alt={_.productImage}
                        />
                      </NavLink>
                      {/* show title cart to checkout */}
                      <div className="title-close-checkout">
                          <NavLink
                          to="/product"
                          className="navlink-checkout"
                          style={{ textDecoration: "none" }}
                          >
                          <p className="title-checkout">Ao phong dai tay nu co hinh in</p>
                          </NavLink>
                      
                          <div className="cart-size-checkout">
                          <p className="size">{_.size}</p>
                          <p>/</p>
                          <img
                              className="img-checkout"
                              src={_.productColor}
                              alt=""
                          />
                          </div> 
                      {/* end check title */}
                      </div>
                    </div>
                    <div className="col cart-infor">
                      <div className="cart-price">
                        <p>{String(((_?.inforproduct?.price !== undefined ? _?.inforproduct?.price : _?.inforproduct[0]?.price) - ((_?.inforproduct?.price !== undefined ? (_?.inforproduct?.price * _?.inforproduct?.discount / 100) : (_?.inforproduct[0]?.price * _?.inforproduct[0]?.discount)/100))).toFixed(3)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}₫</p>
                        
                      </div>
                      <div className="cart-price none-stock">
                        <p>{String((_?.inforproduct?.price !== undefined ? _?.inforproduct?.price : _?.inforproduct[0]?.price).toFixed(3)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</p>
                      </div>
                    </div>
                    {/* start tongle count  */}
                    <div className="col tongle-checkout">
                          <FontAwesomeIcon
                            className="cart-icon-checkout"
                            icon={faSubtract}
                            onClick={() => dispatchDecProduct(`${_.id}`, `${_.productImage}`, `${_.size}`, {index}, `${_.productId}`, `${_.quantity}`)}
                          />
                          <p>{_.quantity}</p>
                          <FontAwesomeIcon 
                          className="cart-icon-checkout cart-icon-checkout--add"
                          icon={faAdd} 
                          onClick={() => dispatchIncrProduct(`${_.id}`, `${_.productImage}`, `${_.size}`, `${_.productId}`, `${_.quantity}` )}/>
                    </div>
                    <div className="col tongle-checkout-shipping">
                          <p>x{_.quantity}</p>
                    </div>
                    <div className="col cart-infor">
                      <div className="cart-price">
                        <p>{String(((_?.inforproduct?.price !== undefined ? _?.inforproduct?.price : _?.inforproduct[0]?.price) - ((_?.inforproduct?.price !== undefined ? (_?.inforproduct?.price * _?.inforproduct?.discount / 100) : (_?.inforproduct[0]?.price * _?.inforproduct[0]?.discount)/100))).toFixed(3)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}₫</p>
                        
                      </div>
                    </div>
                    <div className="col close">
                      <FontAwesomeIcon className="close-pos" icon={faClose} onClick={() => dispatchRemoveProduct({index} ,`${_.productId}`, `${_.size}`, `${_._id}`)} />
                    </div>
                  </div>
                ))
              }
            </div>
    </div>
  </div>
  </>;
}

export default CartView;
