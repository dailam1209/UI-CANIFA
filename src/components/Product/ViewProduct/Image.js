import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Price from "./Price";
import Progressbuy from "./Progressbuy";

import { useDispatch, useSelector } from "react-redux";
import { addBuyProduct } from "../../../redux/Cart/cartbuyRedux";
import {  useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { fetchSameProduct } from "../../../redux/product/fetchProductApi";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import cartService from "../../../redux/Cart/CartService";
import wishListService from "../../../redux/WishList/wishListService";
import { changeWish } from "../../../redux/WishList/wishListRedux";

const Image = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.product.status);
  const token = useSelector((state) => state.user.userToken);
  const userId = useSelector((state) => state.user?.userInfor?._id);

  
  const [img, setImg] = useState("");
  const [size, setSize] = useState([]);
  const [productId, setProductId] = useState("");

  let choose ;
  let currentSizeCheck;
  let idBlock;
  let idCheckSize;
  let warrperCheck;

  let code;
  let imgCurrent;
  let color;
  let sizeCurrent;
  let idCurrent;
 

  

  


  // heart
  const heart = {
    src: "http://antonandirene.com/build/images/about/snow-small.png",
    white_src:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMiAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjUzMDMgMTYuODY0TDE5LjEyNzEgOS4yNjcyQzIwLjk5MzcgNy40MDA2IDIxLjI2OTEgNC4zMjk3NiAxOS41MDI3IDIuMzY4MTFDMTkuMDYwMiAxLjg3NTMzIDE4LjUyMiAxLjQ3Nzg2IDE3LjkyMDggMS4xOTk5N0MxNy4zMTk3IDAuOTIyMDY4IDE2LjY2ODIgMC43Njk1NjUgMTYuMDA2MiAwLjc1MTc2MkMxNS4zNDQxIDAuNzMzOTU5IDE0LjY4NTQgMC44NTEyMjkgMTQuMDcwMiAxLjA5NjQyQzEzLjQ1NSAxLjM0MTYxIDEyLjg5NjIgMS43MDk1NyAxMi40Mjc5IDIuMTc3ODZMMTEgMy42MDU3MUw5Ljc2NzIgMi4zNzI5QzcuOTAwNiAwLjUwNjMwMSA0LjgyOTc2IDAuMjMwOTEzIDIuODY4MTEgMS45OTczNUMyLjM3NTMzIDIuNDM5ODEgMS45Nzc4NiAyLjk3ODA0IDEuNjk5OTcgMy41NzkxOUMxLjQyMjA3IDQuMTgwMzQgMS4yNjk1NiA0LjgzMTgxIDEuMjUxNzYgNS40OTM4NEMxLjIzMzk2IDYuMTU1ODggMS4zNTEyMyA2LjgxNDYgMS41OTY0MiA3LjQyOTgxQzEuODQxNjEgOC4wNDUwMyAyLjIwOTU3IDguNjAzODQgMi42Nzc4NiA5LjA3MjE1TDEwLjQ2OTcgMTYuODY0QzEwLjYxMDMgMTcuMDA0NiAxMC44MDExIDE3LjA4MzYgMTEgMTcuMDgzNkMxMS4xOTg5IDE3LjA4MzYgMTEuMzg5NyAxNy4wMDQ2IDExLjUzMDMgMTYuODY0VjE2Ljg2NFoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
    black_src:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjU3NzUgMjAuNTc5N0wyMC4zOTM4IDEyLjc2MzRDMjIuMzE0NCAxMC44NDI4IDIyLjU5NzcgNy42ODMyMyAyMC43ODAyIDUuNjY0ODhDMjAuMzI1IDUuMTU3ODYgMTkuNzcxMiA0Ljc0ODkgMTkuMTUyNyA0LjQ2Mjk3QzE4LjUzNDEgNC4xNzcwNCAxNy44NjM4IDQuMDIwMTMgMTcuMTgyNyA0LjAwMTgxQzE2LjUwMTUgMy45ODM1IDE1LjgyMzcgNC4xMDQxNiAxNS4xOTA3IDQuMzU2NDNDMTQuNTU3NyA0LjYwODcxIDEzLjk4MjggNC45ODczMSAxMy41MDA5IDUuNDY5MTNMMTIuMDMxOCA2LjkzODI1TDEwLjc2MzQgNS42Njk4MUM4Ljg0MjgzIDMuNzQ5MjYgNS42ODMyMyAzLjQ2NTkxIDMuNjY0ODggNS4yODM0QzMuMTU3ODUgNS43Mzg2NiAyLjc0ODkgNi4yOTI0NCAyLjQ2Mjk3IDYuOTEwOTZDMi4xNzcwNCA3LjUyOTQ5IDIuMDIwMTMgOC4xOTk3OSAyLjAwMTgxIDguODgwOTZDMS45ODM1IDkuNTYyMTMgMi4xMDQxNSAxMC4yMzk5IDIuMzU2NDMgMTAuODcyOUMyLjYwODcgMTEuNTA1OSAyLjk4NzMxIDEyLjA4MDggMy40NjkxMyAxMi41NjI3TDExLjQ4NjIgMjAuNTc5N0MxMS42MzA5IDIwLjcyNDQgMTEuODI3MiAyMC44MDU3IDEyLjAzMTggMjAuODA1N0MxMi4yMzY1IDIwLjgwNTcgMTIuNDMyOCAyMC43MjQ0IDEyLjU3NzUgMjAuNTc5N1oiIHN0cm9rZT0iIzMzM0Y0OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
    active_src:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAzMCAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljc5NTUgMjQuNzk2TDI3LjE5MDcgMTMuNDAwOEMyOS45OTA2IDEwLjYwMDkgMzAuNDAzNiA1Ljk5NDY0IDI3Ljc1NCAzLjA1MjE3QzI3LjA5MDMgMi4zMTI5OSAyNi4yODI5IDEuNzE2OCAyNS4zODEyIDEuMjk5OTVDMjQuNDc5NSAwLjg4MzEwMiAyMy41MDIzIDAuNjU0MzQ3IDIyLjUwOTIgMC42Mjc2NDNDMjEuNTE2MiAwLjYwMDkzOCAyMC41MjgxIDAuNzc2ODQ0IDE5LjYwNTMgMS4xNDQ2M0MxOC42ODI1IDEuNTEyNDEgMTcuODQ0MyAyLjA2NDM2IDE3LjE0MTggMi43NjY3OUwxNSA0LjkwODU2TDEzLjE1MDggMy4wNTkzNkMxMC4zNTA5IDAuMjU5NDUxIDUuNzQ0NjUgLTAuMTUzNjMgMi44MDIxNyAyLjQ5NjAzQzIuMDYyOTkgMy4xNTk3MiAxLjQ2NjggMy45NjcwNiAxLjA0OTk1IDQuODY4NzhDMC42MzMxMDIgNS43NzA1MSAwLjQwNDM0NyA2Ljc0NzcxIDAuMzc3NjQzIDcuNzQwNzZDMC4zNTA5MzggOC43MzM4MiAwLjUyNjg0MyA5LjcyMTkgMC44OTQ2MjYgMTAuNjQ0N0MxLjI2MjQxIDExLjU2NzUgMS44MTQzNiAxMi40MDU4IDIuNTE2NzkgMTMuMTA4MkwxNC4yMDQ1IDI0Ljc5NTlDMTQuNDE1NSAyNS4wMDY5IDE0LjcwMTYgMjUuMTI1NSAxNSAyNS4xMjU1QzE1LjI5ODQgMjUuMTI1NSAxNS41ODQ1IDI1LjAwNjkgMTUuNzk1NSAyNC43OTZaIiBmaWxsPSIjREEyOTFDIi8+Cjwvc3ZnPgo=",
  };

  const clickLike = (e, code, allInfor) => {
    if (
      e.target.src === heart.src ||
      e.target.src === heart.white_src ||
      e.target.src === heart.black_src
    ) {
      e.target.src = heart.active_src;
    } else if (e.target.src === heart.active_src) {
      e.target.src = heart.white_src;
    } else {
      e.target.src = heart.black_src;
    }

    // infor to dispatch
    if(window.location.pathname === '/profile-wishlist') {
      toast.success("Đã được xóa khỏi yêu thích.", {
        height: "100%",
        borderLeft: "5px solid green",
        position: "top-right",
        autoClose: 5000,
        top: "50%",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        minHeight: "200px",
        theme: "light",
      });
    } else {
      toast.success("Sản phẩm đã được thêm vào yêu thích.", {
        height: "100%",
        borderLeft: "5px solid green",
        position: "top-right",
        autoClose: 5000,
        top: "50%",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        minHeight: "200px",
        theme: "light",
      });
    }
    dispatch(
      changeWish(
        allInfor
      )
    )

    if(userId !== undefined && token !== undefined && allInfor[0].code ) {
          wishListService.changeWishListIterm({userId: userId, code: allInfor[0].code}, token)
    }

    
  };

  const handleHover = (e) => {
    if(window.location.pathname === '/profile-wishlist') {
      return 0;
    } else if (
      e.target.src === heart.src ||
      e.target.src === heart.white_src ||
      e.target.src === heart.black_src
    ) {
      e.target.src = heart.white_src;
    }
    
  };

  const handleHoverOut = (e) => {
    if(window.location.pathname === '/profile-wishlist') {
      return 0;
    } else if (e.target.src === heart.src || e.target.src === heart.white_src) {
      e.target.src = heart.black_src;
    }

    }
    

  // end heart

  // choose img(color)
  const handleChoose = (e) => {
    if (typeof e === "string") {
      choose = e;
      setImg(props.image[e.slice(-1)].img[0].url);
      setSize(props.image[e.slice(-1)].size);
      setProductId(props.image[e.slice(-1)]._id);
    } else {
      choose = e.target.id;
      let slice = choose.slice(-1);
      let changeImg = document.querySelectorAll('img[id="' + choose + '"]');

      // setColor(e.target.src) ;
      color =e.target.src;
      
      setImg(props.image[slice].img[0].url)
      Array.from(changeImg).map((_, index) => (
        _.click()
      ));
      setSize(props.image[slice].size);
      const arrColor = document.querySelectorAll(
        'img[class="' + e.target.classList + '"]'
      );
      Array.from(arrColor).map((_, index) => {
        _.style.padding = "0px";
        _.style.border = "0px";
      });

    }
    const border = document.querySelectorAll('img[id="' + choose + '"]');
    Array.from(border).map((_, index) => {
      _.style.border =
      "1px solid #757ca6";
      _.style.padding = "3px";
      
    });
    
  };

  
  

  const handleSize = (e) => {
    if (typeof e === "undefined") {
      return;
    }
    warrperCheck = e.target.id;
    idCheckSize = warrperCheck.slice(0, warrperCheck.length - 1);
    currentSizeCheck = e.target.innerHTML;
    // setSizeCurrent(currentSizeCheck) ;
    sizeCurrent = currentSizeCheck
    const arrSizeProductCheck = document.querySelectorAll(
      `.size${idCheckSize} `
    );

    Array.from(arrSizeProductCheck).map((_, index) => {
      _.style.border = "1px solid #d2d1d4";
      _.style.color = "#d2d1d4";
    });
    let borderSize = document.querySelectorAll('p[id="' + warrperCheck + '"]');
    let btnCss = document.querySelectorAll(`.btn${idCheckSize}`);
    Array.from(borderSize).map((_, index) => {
      _.style.border = "2px solid #17242b";
      _.style.color = "#17242b";
    });
    Array.from(btnCss).map((_, index) => {
      _.style.backgroundColor = "#4c5054";
      _.style.color = "white";
    });
  };

  const handleSizeOut = (e) => {
    if (!e) {
      return 0;
    }
    idCheckSize = e.slice(0, e.length - 1);
    const arrSizeProductCheck = document.querySelectorAll(
      `.size${idCheckSize} `
    );
    document.querySelector(`.btn${idCheckSize}`).style.backgroundColor =
      "#a7b2ba";
    document.querySelector(`.btn${idCheckSize}`).style.color = "#c8c7cc";
    document.querySelector(`.btn${idCheckSize}`).disabled = "false";
    Array.from(arrSizeProductCheck).map((_, index) => {
      _.style.border = "1px solid #d2d1d4";
      _.style.color = "#d2d1d4";
    });
  };


  // display check size
  const handleDisplay = (id) => {
    currentSizeCheck = "";
    idBlock = id;
    let blockSize = document.querySelectorAll(`.${idBlock}`);
    Array.from(blockSize).map((_, index) => {
      _.style.display = "flex";
    });
  };
  const handleDisplayNone = () => {
    if (document.querySelector(`.${idBlock}`)) {
      let blockSize = document.querySelectorAll(`.${idBlock}`);
      Array.from(blockSize).map((_, index) => {
        _.style.display = "none";
      });
      handleSizeOut(warrperCheck);
    }
    return 0;
  };

  const handleOverFllow = (e) => {
    const element = document.getElementsByClassName(`check-color ${e}color`)
    Array.from(element).map((iterm, index) => {
      iterm.style.overflowX = "none";
      iterm.style.width = "100%";
      iterm.lastChild.style.display = "none";
    })
  };


  const firstDispatch = (id) => {
    // let idImg = id.slice(5,id.length);
    // if(color != "") {
    //   let colorCurrent = document.getElementsByClassName(`${idImg}color`)[1].src;
    //   setColor(colorCurrent) ;
    // }
    // setIdCurrent(idImg);
    // let srcCurrent = document.getElementsByClassName(`${idImg}img`);
    // setCode(idImg);
    // setImgCurrent(srcCurrent[1].src);

    let idImg = id.slice(5,id.length);
    if(color != "") {
      let colorCurrent = document.getElementsByClassName(`${idImg}color`)[1].src;
      // setColor(colorCurrent) ;
      color = colorCurrent;
    }
    // setIdCurrent(idImg);
    idCurrent = idImg;
    let srcCurrent = document.getElementsByClassName(`${idImg}img`);
    // setCode(idImg);
    code = idImg;

    // setImgCurrent(srcCurrent[1].src);
    
    if(srcCurrent[1]) {
      imgCurrent = srcCurrent[1].src;
    }
    else {
      imgCurrent = srcCurrent[0].src;
    }
  }
  

  // dispatch 
  const dispatchHandle = async (id) => {
    firstDispatch(id);
    let dispatchProductToCart = [
      {
      userId: userId,
      productId: productId,
      orderId: "",
      productName: props.image[0].slug,
      id :idCurrent,
      code: code,
      productImage: imgCurrent,
      size: sizeCurrent,
      productColor: color,
      quantity: 1,
      statusCode: 1,
      inforproduct: props.image
    }];
    
    dispatch(
      addBuyProduct(...dispatchProductToCart)
      )
      let inforCart =  dispatchProductToCart[0];
      if(userId !== undefined && token !== undefined) {
        if(dispatchProductToCart.productImage !== "" && dispatchProductToCart.id !== "" && dispatchProductToCart.color !== "" && dispatchProductToCart.size !== "" ){
         await cartService.addCartIterm(inforCart,token);
      }
      dispatchProductToCart = []
    }

  }

  const dispatchProductCode = (e) => {
    let nameCode = e.target.className.slice(0, -3);
    dispatch(fetchSameProduct(nameCode));
    if(nameCode) {
      
      navigate(`/product/${nameCode}`, { replace: true });
    }
    
    
  }

  useEffect(() => {
    
      if(props.image.length > 0) {
        choose = props?.image[0]?.code + "0";
          handleChoose(choose);
      }
  }, []);
  return (
    <>
      {
         props?.image[0]?.color[0]?.url !== undefined  ? (
          <div onMouseLeave={() => handleDisplayNone()}>
            <div className="product-image-pos">
              <img className={`${props?.image[0]?.code}img`} src={img} alt="" onClick={(e) => dispatchProductCode(e)}/>
              <button
                id={`sizes${props?.image[0]?.code}`}
                onClick={(e) => handleDisplay(e.target.id)}
                className={`btn`}
              >
                Thêm vào giỏ hàng
              </button>

              <div
                id="1"
                name="dailam"
                className="like"
               
                onMouseMove={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverOut(e)}
                onClick={(e) => clickLike(e, props.image[0].code, props.image)}
              >
                <p id={`like-1`}>Yêu thích</p>
                <img
                  id="1"
                  className={`like-1`}
                  src={window.location.pathname === '/profile-wishlist' ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAzMCAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljc5NTUgMjQuNzk2TDI3LjE5MDcgMTMuNDAwOEMyOS45OTA2IDEwLjYwMDkgMzAuNDAzNiA1Ljk5NDY0IDI3Ljc1NCAzLjA1MjE3QzI3LjA5MDMgMi4zMTI5OSAyNi4yODI5IDEuNzE2OCAyNS4zODEyIDEuMjk5OTVDMjQuNDc5NSAwLjg4MzEwMiAyMy41MDIzIDAuNjU0MzQ3IDIyLjUwOTIgMC42Mjc2NDNDMjEuNTE2MiAwLjYwMDkzOCAyMC41MjgxIDAuNzc2ODQ0IDE5LjYwNTMgMS4xNDQ2M0MxOC42ODI1IDEuNTEyNDEgMTcuODQ0MyAyLjA2NDM2IDE3LjE0MTggMi43NjY3OUwxNSA0LjkwODU2TDEzLjE1MDggMy4wNTkzNkMxMC4zNTA5IDAuMjU5NDUxIDUuNzQ0NjUgLTAuMTUzNjMgMi44MDIxNyAyLjQ5NjAzQzIuMDYyOTkgMy4xNTk3MiAxLjQ2NjggMy45NjcwNiAxLjA0OTk1IDQuODY4NzhDMC42MzMxMDIgNS43NzA1MSAwLjQwNDM0NyA2Ljc0NzcxIDAuMzc3NjQzIDcuNzQwNzZDMC4zNTA5MzggOC43MzM4MiAwLjUyNjg0MyA5LjcyMTkgMC44OTQ2MjYgMTAuNjQ0N0MxLjI2MjQxIDExLjU2NzUgMS44MTQzNiAxMi40MDU4IDIuNTE2NzkgMTMuMTA4MkwxNC4yMDQ1IDI0Ljc5NTlDMTQuNDE1NSAyNS4wMDY5IDE0LjcwMTYgMjUuMTI1NSAxNSAyNS4xMjU1QzE1LjI5ODQgMjUuMTI1NSAxNS41ODQ1IDI1LjAwNjkgMTUuNzk1NSAyNC43OTZaIiBmaWxsPSIjREEyOTFDIi8+Cjwvc3ZnPgo=" : "http://antonandirene.com/build/images/about/snow-small.png"}
                  alt=""
                ></img>
              </div>
              {/* size */}
              <div className={`sizes sizes${props?.image[0]?.code}`}>
                <label className="label">Vui lòng chọn size</label>
                <div className={`size`}>
                  {size.length > 0 ? (
                    size.map((_, index) => (
                      <div className={`size-name`} key={index}>
                        <p
                          className={`name size${props.image[0].code}`}
                          id={`${props.image[0].code}${index}`}
                          onClick={(e) => handleSize(e)}
                        >
                          {_}
                        </p>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
                <button
                  id={`imgId${props.image[0].code}`}
                  className={`add-to-card btn${props.image[0].code}`}
                  onClick={(e) => dispatchHandle(e.target.id)}
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
            <div className="radio-depcription">
              {/* add */}
              {/* color */}
              {/* {
                code ? ( */}

              <div className={`check-color ${props.image[0].code}color`}>
                { 
                    props.image.map((iterm, index) => (
                      <div key={index}>
                        <img
                          id={props?.image[0]?.code + index}
                          className={`${props?.image[0]?.code}color`}
                          onClick={(e) => handleChoose(e)}
                          src={iterm.color[0].url}
                          alt={iterm?.color[0]?.public_id}
                        ></img>
                        </div>
                        )
                      )
                }

                {props.image.length > 3 ? (
                  <div
                  style={{
                    cursor: "pointer"
                  }}
                    id={props.image[0].code}
                    onClick={(e) => handleOverFllow(e.target.id)}
                    className="color-more"
                  >
                    {" "}
                    +{props.image.length - 3}
                  </div>
                ) : (
                  <></>
                )}
              </div>
             
            </div>
            <div className="infor">
              <Price show={props.show} infor={props.image[0]} />
              {
                props.show ? (
                  <Progressbuy />
                ) : (
                  <></>
                )
              }
            </div>
          </div>
        ) : (
          <>
           
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </div>
            </>
        )
      }
    </>
  );
};

export default Image;
