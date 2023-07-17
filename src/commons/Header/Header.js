import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faClose,
  faHeart,
  faSearch,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { LayoutFixed }  from "../../components/Orther/LayoutFixed";
import Cart from "../../components/Cart/Cart";
import Login from "../../components/Authentication/Login";
import Nametitle from "../../components/Slide/Nametitle";
import { Modal, ModalCloseButton } from "@react-ui-org/react-ui";
import TopSildeDown from "../../components/Slide/TopSildeDown";

import { NavLink } from "react-router-dom";
import InputSearchHearder from "./InputSearchHearder";

import { useSelector,  useDispatch } from "react-redux";
import { fetchAllProduct } from "../../redux/product/fetchProductApi";

function Header() {


  const dispatch = useDispatch();
  const cartBuyRedux = useSelector((state) => state.cart.productbuy).filter(iterm => iterm.orderId === "");
  const iterm  = localStorage.getItem('userShop') !== "" ? JSON.parse(localStorage.getItem('userShop')):  '' 
  const token = iterm?.payload?.token;
  const userId = useSelector((state) => state.user?.userInfor?._id);
  const isSuccess = iterm?.payload?.success;
  const userImage = iterm?.payload?.user?.article_image;
  let count = cartBuyRedux.length;



  const userLog = true;
  // input search
  const inputCurrent = useRef();
  const [searchValue, setSearchValue] = useState("");
  // modal
  const [modalOpen, setModalOpen] = useState(null);
  const modalPrimaryButtonRef = useRef();
  const modalCloseButtonRef = useRef();
  const [cart, setCart] = useState(false); //show
  const [width, setWidth] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setWidth({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [width]);


  const handleClose = () => {
    setSearchValue("");
    inputCurrent.current.focus();
  };

  const hadleCart = () => {
    setCart(() => true);
    document.querySelector('.pc').style.display = 'block';
  };


  document.addEventListener("click", function(event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".pc") || event.target.closest(".close-pos") || event.target.closest(".fa-cart-shopping") ) return 0;
    // setCart(false);
    if(document.querySelector('.pc')) {

      document.querySelector('.pc').style.display = 'none';
    }

    
  })



  // dispatch logo to all product
  const dispatchAll = async () => {
    await dispatch(fetchAllProduct())
  }

  const handleCloseProfile = () => {
      document.querySelector('.profile').style.display = 'block';
  }

  // default envent when click close 
  const defaultEvent = (event) => {
    event.preventDefault()
    setModalOpen(false)
  }

  useEffect(() => {
    if(window.location.pathname == "/login") {
      setModalOpen(3)
    }
  }, [window.location.pathname])






  

  return (
    <header>
      <div className="header">
        {/* logo and detail_name */}
        <div className="header-left">
          <div className="icon-left-moblie">
           
           <div className="icon icon-shop">

            <FontAwesomeIcon
              className="icon-infor-mobile"
              icon={faStore}
              onClick={() => setModalOpen(1)}
            />
            {modalOpen === 1 && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  position: "fixed",
                  color: "black",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  backgroundColor: "rgba(51,63,72,.24)",
                  zIndex: "20",
                }}
              >
                <Modal
                  className="modal-response"
                  style={{
                    width: "auto",
                    height: "min-content",
                    color: "black",
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "calc(-50% + 26px)",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    boxShadow:
                      "0 0 32px rgb(0 0 0 / 10%), 0 0 16px rgb(0 0 0 / 10%)",
                  }}
                  closeButtonRef={modalCloseButtonRef}
                  primaryButtonRef={modalPrimaryButtonRef}
                >
                  <ModalCloseButton
                    style={{
                      width: "10%",
                      marginLeft: "90%",
                      marginTop: "2.5%",
                      paddingTop: "4px",
                      cursor: "pointer",
                      paddingBottom: "4px",
                      height: "20px",
                      color: "black",
                      position: "fixed",
                      fontSize: "36px",
                    }}
                    onClick={() => setModalOpen(false)}
                    >
                    <FontAwesomeIcon
                      icon={faClose}
                      style={{
                        fontSize: "20px",
                      }}
                    />
                  </ModalCloseButton>
                  <Login />
                </Modal>
              </div>
            )}
           </div>

           
           <div className="icon-search">

            <FontAwesomeIcon
              className="icon-infor-mobile"
              icon={faSearch}
              onClick={() => {
                setModalOpen(2);
              }}
            />
            {modalOpen === 2 && (
              <div
              
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  color: "black",
                  top: "20%",
                  left: "10%",
                  right: "10%",
                  bottom: "20%",
                }}
                >
                <Modal
                  style={{
                    width: "101%",
                    height: "101%",
                    display: "block",
                    position: "fixed",
                    color: "black",
                    top: "50%",
                    left: "50%",
                    right: "0",
                    bottom: "0",
                    backgroundColor: "rgba(51,63,72,.34)",
                  }}
                  
                  closeButtonRef={modalCloseButtonRef}
                  primaryButtonRef={modalPrimaryButtonRef}
                >

                  <ModalCloseButton
                    style={{
                      width: "10%",
                      marginLeft: "86%",
                      marginTop: "40%",
                      paddingTop: "4px",
                      cursor: "pointer",
                      paddingBottom: "4px",
                      height: "20px",
                      color: "black",
                      position: "fixed",
                      fontSize: "36px",
                      color: "white"
                    }}
                    onClick={() => setModalOpen(false)}
                  >
                    <FontAwesomeIcon  icon={faClose} />
                  </ModalCloseButton>
                    <div className="input-search-mobile">
                      <InputSearchHearder/>
                    </div>
                </Modal>
              </div>
            )}
           </div>
          </div>
          <div className="icon logo">
            {/* logo pc */}
              <NavLink to="/" onClick={() => dispatchAll()} >
                <img  alt="" className="logo"  src="https://canifa.com/assets/images/logo.svg" />
              </NavLink>
          </div>
          {/* detail_name */}
          {width.winWidth > 900 ? <Nametitle /> : <></>}
          <ul>
            <TopSildeDown />
          </ul>
        </div>
       
       {/* logo mobile */}
       <div className="logo-moblie">
          <NavLink to="/" onClick={() => dispatchAll()}>
            <img  alt=""  src="https://canifa.com/assets/images/logo.svg" ></img>
          </NavLink>
       </div>

        <div className="header-right">
          <div className="wapper">
            <InputSearchHearder/>
            <div className="icon-left">
              <div className="moblie-none">
                <FontAwesomeIcon className="icon-infor" icon={faStore} />
              </div>
              
              <div className="moblie-none">
                <NavLink to={userId ? "/profile-wishlist" : "/login"}>
                  <FontAwesomeIcon className="icon-infor" icon={faHeart} />
                </NavLink>
              </div>
              <div className="icon-infor-image__user">
                {
                  isSuccess &&  userImage !== "" ? (
                    <NavLink to="/account" onClick={() => handleCloseProfile()}>
                      <img className=" cursor-icon icon-infor icon-infor__user" src={userImage}/>
                    </NavLink>
                  ) : (
                    <></>
                  )
                }
                {
                  isSuccess  && userImage === "" &&  iterm !== undefined  ? (
                    <NavLink to="/account" onClick={() => handleCloseProfile()}>
                      <img className="cursor-icon icon-infor icon-infor__user" src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"/>
                    </NavLink>
                  ) : (
                    <></>
                  )
                }
                {
                  isSuccess === false || iterm === '' ? (
                    <>
                    <NavLink to="/login">

                    <FontAwesomeIcon
                      className="icon-infor"
                      icon={faUser}
                      onClick={() => setModalOpen(3)}
                    />
                    { modalOpen === 3 && (
                      <div
                        className="wapper-modal"
                        style={{
                          display: "block",
                          position: "fixed",
                          color: "black",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          backgroundColor: "rgba(51,63,72,.24)",
                          zIndex: "20",
                        }}
                      >
                        <Modal
                          className="modal-response"
                          style={{
                            width: "auto",
                            height: "min-content",
                            color: "black",
                            top: "50%",
                            left: "50%",
                            right: "auto",
                            bottom: "auto",
                            marginRight: "calc(-50% + 26px)",
                            borderRadius: "10px",
                            backgroundColor: "white",
                            boxShadow:
                              "0 0 32px rgb(0 0 0 / 10%), 0 0 16px rgb(0 0 0 / 10%)",
                          }}
                          closeButtocnRef={modalCloseButtonRef}
                          primaryButtonRef={modalPrimaryButtonRef}
                        >
                          <ModalCloseButton
                            style={{
                              width: "10%",
                              marginLeft: "90%",
                              marginTop: "2.5%",
                              paddingTop: "4px",
                              cursor: "pointer",
                              paddingBottom: "4px",
                              height: "20px",
                              color: "black",
                              position: "fixed",
                              fontSize: "36px",
                            }}
                            onClick={(e) => defaultEvent(e)}
                          >
                            <FontAwesomeIcon
                              style={{
                                fontSize: "20px",
                                borderRadius: "50%"
                              }}
                              icon={faClose}
                            />
                         
                          </ModalCloseButton>
                          <Login />
                        </Modal>
                      </div>
                    )}
                    </NavLink>
                    </>
                  ) : (
                    <></>
                  )
                }
              </div>
              {
                window.location.pathname === "/shopcart" ? (
                  <></>
                ) : (
                <div className="cart-icon">
                  <FontAwesomeIcon 
                    className="icon-infor"
                    icon={faCartShopping}
                    onClick={hadleCart}
                  />
                  {/* {cart ? ( */}
                    <LayoutFixed  >
                      <Cart/>
                    </LayoutFixed>
                  {/* ) : (
                    <></>
                  )} */}
                  <div className="number-cart">
                    <p>{count}</p>
                  </div>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
