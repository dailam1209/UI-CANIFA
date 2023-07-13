import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { detailProduct } from "../../assets/cart";
import {  useSelector } from "react-redux";
import { CircularProgress } from '@mui/material';
import { ItemComeBack } from "../../hooks/comeback";
import { useDispatch } from "react-redux";
import { addBuyProduct } from "../../redux/Cart/cartbuyRedux";
import cartService from "../../redux/Cart/CartService";


const ProductBuy = ( ) => {

  const dispatch = useDispatch();
  const [size, setSize] = useState([]);
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [productId, setProductId] = useState("");
  const [sizeApi, setSizeApi] = useState("");
  const [color, setColor] = useState("");
  const [qCode, setqCode] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [listFilterImage, setListFilterImage] = useState([]);
  const [listColor, setListColor] = useState([]);
  const [ loading, setLoading] = useState(false);
  const [lengthListImage, setLengthListImage] = useState(0);
  const useRefCode = useRef("");
  const [productDetails, setProductDetails] = useState([]);
  const token = useSelector((state) => state.user.userToken);
  const userId = useSelector((state) => state.user?.userInfor?._id);

  // let productDetails = [];
  let choose ;
  let listImage = [];
  let warrperCheck;
  let idCheckSize;
  let currentNumberImageSlide = 0;
  
  let inputSmallImage = {
    "target" : {
      "id" : 0,
      "classList": ""
    }
}


  

  
  


  const handleSize = (e) => {
    if (typeof e === "undefined") {
      return;
    }
    warrperCheck = e.target.id;
    idCheckSize = warrperCheck.slice(0, warrperCheck.length - 1);
    setSizeApi(e.target.innerHTML);
    const arrSizeProductCheck = document.querySelectorAll(
      `.size${idCheckSize} `
    );

    Array.from(arrSizeProductCheck).map((_, index) => {
      _.style.border = "1px solid #d2d1d4";
      _.style.color = "#d2d1d4";
    });
    document.querySelector('p[id="' + warrperCheck + '"]').style.border =
      "2px solid #17242b";
    document.querySelector('p[id="' + warrperCheck + '"]').style.color =
      "#17242b";
    
  };

  // zoom when hover image
  // const mounse = (e) => {
  //   console.log(e);
  //   const x = e.clientX - e.target.offsetLeft;
  //   const y = e.clientY - e.target.offsetTop;

  //   document.getElementsByClassName(
  //     `img-hover-${e.target.id}`
  //   ).style.transformOrigin = `${x}px ${y}px`;
  //   document.getElementsByClassName(`img-hover-${e.target.id}`).style.transform = "scale(2)";
  // };
  // const handleHoverOut = (e) => {
  //   document.getElementsByClassName(`img-hover-${e.target.id}`).style.transformOrigin = "center";

  //   document.getElementsByClassName(`img-hover-${e.target.id}`).style.transform = "scale(1)";
  // };

  // choose color
  
  



  const lengthOfListImage = (index) => {
    let listImg = []
    for (let i = 0; i <= index; i++) {
      for(let y = 0; y < productDetails[i].img.length; y++) {
        listImg.push({
          code: productDetails[i].color[0].url.slice(-9),
          public_id: productDetails[i].img[y].public_id,
          url: productDetails[i].img[y].url
      });
      }
    }
    return listImg.length;
  }


  // slide
  const  transfromImage = (type, number) => {
    const img = document.querySelector('.img-view');
    let getImage = document.querySelector('.img-view').offsetWidth;
      if(type === "add") {

        if(currentNumberImageSlide + 1  === lengthListImage) {
          let width = lengthListImage * getImage;
          img.style = `margin-right: ${width}px`;
          currentNumberImageSlide = 0;
          inputSmallImage.target.id =  0;
          scrollImage("add",inputSmallImage);

        } 
        else {
          currentNumberImageSlide ++;
          let width = currentNumberImageSlide * getImage;
          img.style = `margin-left: -${width}px`;
          inputSmallImage.target.id =  currentNumberImageSlide;
          scrollImage("add",inputSmallImage);
        }
      }
      if(type === "incre"){
        if(currentNumberImageSlide === 0) {
          let width = (lengthListImage - 1 )* getImage;
          img.style = `margin-left: -${width}px`;
          currentNumberImageSlide = lengthListImage - 1 ;
          inputSmallImage.target.id =  currentNumberImageSlide;
          scrollImage("incre",inputSmallImage);
        } 
        else {
          currentNumberImageSlide --;
          let width = (lengthListImage - 1  - currentNumberImageSlide) * getImage;
          // img.style.transform = `translateX(${width}px)`;
          img.style = `margin-left: ${width}px`;
          inputSmallImage.target.id =  currentNumberImageSlide;
          scrollImage("incre",inputSmallImage);
        }
      }

      if(type === "small") {
         let  distance = (number - currentNumberImageSlide) * getImage;
         currentNumberImageSlide = number;
          document.querySelector('.img').style.transform = `translateX(${distance}px)`;
      }
      if(type === ""){
        if(currentNumberImageSlide > number) {
          // let width = (currentNumberImageSlide - number - 1 )* getImage;
          // img.style = `margin-left: ${width}px`;
          currentNumberImageSlide = number - 1;

          inputSmallImage.target.id =  currentNumberImageSlide;
          scrollImage("abc",inputSmallImage);
        } 
        else {
          // let width = (number - currentNumberImageSlide - 1 )* getImage;
          // img.style = `margin-left: -${width}px`;
          currentNumberImageSlide = number - 1;
          inputSmallImage.target.id =  currentNumberImageSlide;
          scrollImage("abc",inputSmallImage);
        } 
        
      }

  }

//  choose size
  const handleChoose = (e) => {
    let currentCode = '';
    if (typeof e === "string") {
      choose = e;
      
    } else {
      choose = e.target.id;
      currentCode = e.target.classList[1];
      let alt = e.target.alt;
      let slice = choose.slice(-1);
      let lenghImg = alt;
      
      inputSmallImage.target.classList = currentCode;
      transfromImage("",Number(lenghImg - alt + 1));
      useRefCode.current = currentCode;

      
      setImg(productDetails[slice].img.url);
      setSize(productDetails[slice].size);
      setColor(productDetails[slice].colortitle);

      let codeId = choose.slice(0,choose.length - 1);
      const arrColor = document.getElementsByClassName(`${codeId}`);
      Array.from(arrColor).map((_, index) => {
        _.style.padding = "0px";
        _.style.border = "0px";
      });
      
    }
    const border = document.querySelector('img[id="' + choose + '"]');
    let code = border?.classList[1].toLocaleLowerCase();
    if(border) {
      border.style.border = "1px solid #757ca6";
      border.style.padding = "3px";
    }
    currentCode = {}
    currentCode.current = code;

  };

  

  // list small image handle
  const scrollImage = (type, input) => {
    
    
    let number = input.target.id;
    const slider = document.querySelectorAll('.slider-img');
    let getImage = document.querySelector('.img-view').offsetWidth;
    let  distance = ( number ) * getImage;
    
    // remove border img color and border current
    if(type !== 'color') {
      Array.from(slider).map((_, index) => (
        document.getElementById(`${index}`).classList.remove('border-radius')
        ))
        let currentImageSmallSelect = document.getElementById(`${Number(number)}`);
        currentImageSmallSelect.classList.add('border-radius');
        document.querySelector('.img-view').style.marginLeft = `-${distance}px`;
    }

      if(type === "") {
        let  distance = ( number ) * getImage;
        document.querySelector('.img-view').style.marginLeft = `-${distance}px`;
        useRefCode.current = input.target.classList === undefined  ? input.target.classList[0] : input.target.classList[0];

       
      }

      if(type === "color") {
        console.log(useRefCode.current == input.target.classList[0].slice(5,input.target.classList[0].length));
        if(useRefCode.current === input.target.classList[0].slice(5,input.target.classList[0].length)) {
          let codeId = input.target.classList[1];
          let choose = input.target.classList[0];
          const arrColor = document.getElementsByClassName(`${codeId}`);
          Array.from(arrColor).map((_, index) => {
            _.classList.remove('border-radius-color')
          });
          
          document.getElementsByClassName(choose)[0].classList.add('border-radius-color')
  
          useRefCode.current = input.target.classList[0].slice(5,input.target.classList[0].length);
          return 0;
        } else {
          console.log(productDetails);
          setSize(productDetails[input.target.alt].size);
          Array.from(slider).map((_, index) => (
            document.getElementById(`${index}`).classList.remove('border-radius')
            ))
            let currentImageSmallSelect = document.getElementById(`${number}`);
            currentImageSmallSelect.classList.add('border-radius')
        
          let  distance = ( number ) * getImage;
          document.querySelector('.img-view').style.marginLeft = `-${distance}px`;
          let codeId = input.target.classList[1];
            let choose = input.target.classList[0];
            const arrColor = document.getElementsByClassName(`${codeId}`);
            Array.from(arrColor).map((_, index) => {
              _.classList.remove('border-radius-color')
            });
            
            
            document.getElementsByClassName(choose)[0].classList.add('border-radius-color')
            
  
            useRefCode.current = input.target.classList[0].slice(5,input.target.classList[0].length);
        }
      }

      if(type === "abc") {
        const img = document.querySelector('.img-view');
        if(currentNumberImageSlide > number) {
          let width = (number) * getImage;
          img.style = `margin-left: -${width}px`;
          useRefCode.current = input.target.classList;
          return 0;
        }
        else {
          let width = (currentNumberImageSlide - number) * getImage;
          img.style = `margin-left: ${width}px`;
          useRefCode.current = input.target.classList;
          return 0;

        }
       
      }
      currentNumberImageSlide = number;

    }

    // fetch api
  const fetchApi = async (name) => {
    setLoading(true);

    try {
      const res = await fetch (`https://vercel-nodejs.onrender.com/api/v2/product/getSingleSameProduct/${name}`);
      const data = await res.json();
      const product =  await data.productCode;
      console.log("product", product);
      setDescription(product[0].description)
      setListFilterImage(product);
      setProductDetails(product);
      setProductId(product[0]._id)
      console.log("listFilterImage", listFilterImage);
      choose = (await product[0].code) + '0';
      setqCode(product[0].code);
      setPrice(product[0].price);
      setDiscount(product[0].price);
      setColor(product[0].color.url);
      useRefCode.current = product[0]?.color[0]?.url.slice(-9);

      
      let lengthOfListProduct = product?.length;
      
      listImage = [];
      let colors = [];
      for (let i = 0; i < lengthOfListProduct; i++) {
        for(let y = 0; y < product[i].img.length; y++) {
          await listImage.push({
            code: product[i].color[0].url.slice(-9),
            public_id: product[i].img[y].public_id,
            url: product[i].img[y].url
          });
        }
      }
      let count  = 0;
      for (let i = 0; i < lengthOfListProduct; i++) {
        let lengthNew
        if(i > 0) {
          lengthNew = product[i]?.img.length + count  ;
          count = lengthNew -product[i]?.img.length;
        }
        else {
          lengthNew = count;
        }
          await colors.push({
            productId: product[i]._id,
            public_id: product[i].color[0].url.slice(-9),
            url: product[i].color[0].url,
            length: lengthNew
          });
          count = count + colors[i].length
      }
      setListColor(colors);
      setSize(product[0].size);
      setLengthListImage(listImage.length);
      setListFilterImage(listImage)
      setLoading(false);
      if(choose) {
        setTimeout(() => {
          handleChoose(choose.toString());
        }, [1000])
      }
      inputSmallImage.target.classList =  product[0].color[0].url.slice(-9);
      scrollImage("", inputSmallImage);
      document.getElementsByClassName(`color${inputSmallImage.target.classList}`)[0].classList.add('border-radius-color')
    }
    catch(error){
      console.log(error);
    }
  }

  const dispatchHandle = async () => {
    let elementImageSrc = document.querySelector('.border-radius')?.src;
    let elementColorSrc = document.querySelector('.border-radius-color').src;
    let productId = document.querySelector('.border-radius-color').classList[2];
    let dispatchProductToCart = [
      {
      userId: userId,
      productId: productId,
      orderId: "",
      productName: description,
      code: qCode,
      productImage: elementImageSrc,
      size: sizeApi,
      productColor: elementColorSrc,
      quantity: 1,
      statusCode: 1,
      inforproduct: productDetails
    }];
    
    dispatch(
      addBuyProduct(...dispatchProductToCart)
      )
      let inforCart =  dispatchProductToCart[0];
      console.log(inforCart);
      if(userId !== undefined && token !== undefined) {
        if(dispatchProductToCart.userId !== "" && dispatchProductToCart.productImage !== "" && dispatchProductToCart.productId !== "" && dispatchProductToCart.productColor !== "" && dispatchProductToCart.size !== "" ){
         await cartService.addCartIterm(inforCart,token);
      }
      dispatchProductToCart = []
    }

  }

  const handleFirst = () => {
    
    console.log("size", sizeApi);
  }
  
  useEffect( () => {
    if(window.location.pathname.split('/')[2] !== undefined) {
      fetchApi(window.location.pathname.split('/')[2]);
    }
  }, []);

  return <>
    { loading === false ? (
      <>
      
      <ItemComeBack/>
      <div className="product-buy">
      {/* List big image */}
      <div className="view-product">
        <div
          className="img-view"
        >
          {
            listFilterImage?.map((img, index) => (
                <img 
                // onMouseMove={(e) => mounse(e)}
                // onMouseLeave={(e) => handleHoverOut(e)}
                // id={`${index}`}
                key ={index}
                className={`img-hover img-hover-${index}`}
                  src={img.url}
                  alt="image"
                ></img>
            ))
          }
        </div>
        <div className="slick-arrow-left" onClick={() => transfromImage("incre", currentNumberImageSlide)}>
              <div className="slick-arrow_icon"  >
                <FontAwesomeIcon className="icon icon-left" icon={faArrowLeft} />
              </div>
        </div>
          <div className="slick-arrow-right" onClick={() => transfromImage("add", currentNumberImageSlide)}>
                
                <div className="slick-arrow_icon" >
                  <FontAwesomeIcon className="icon icon-left" icon={faArrowRight} />
                </div>
          </div>
      </div>
      {/* List small image */}
        <div className="list-img glide" id="options-swipe-threshold-input">
          <div className="list-imag-position">
            {
              listFilterImage.map((img, index) => (
                <div className="slider-img">

                  <img
                    className={`${img.code} small-image`}
                    id={`${index}`}
                    src={img.url}
                    alt="listImagSmall"
                    onClick={(e) => scrollImage("", e)}
                  ></img>
                </div>
              ))

            }
          </div>
        </div>
        {/* infor image */}
      <div className="infor-product">
        <div className="name-product">
          <h1>{description}</h1>
          <div className="code">
            <span>Mã SP:</span>
            <span>{qCode}</span>
          </div>
          <div className="price">
            <span>{String(price).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 ₫</span>
            <span>{String(discount).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 ₫</span>
          </div>
        </div>
        <div className="color-size">
          <div className="color">
            <span>Màu sắc:</span>
            <span>{color}</span>
            <div className={`check-color list-color ${qCode}color`}>

            { 
              listColor?.map((colors, index) => (
                <>
                <img
                    id={colors.length}
                    className={`color${colors.public_id} color${qCode} ${colors.productId}`}
                    onClick={(e) => scrollImage("color",e)}
                    src={colors.url}
                    alt={index}
                    key={index}
                />
                </>
              ))
            }

            {/* {newArrProduct[1].length > 3 ? (
              <div
                id={newArrProduct[1][0].code}
                // onClick={(e) => handleOverFllow(e.target.id)}
                className="color-more"
              >
                {" "}
                +{newArrProduct[1].length - 4}
              </div>
            ) : (
              <></>
            )} */}
          </div>
          </div>
          <div className="size">
            <span>Kích cỡ:</span>
            <div className="list-size">
              {
                size?.map((_, index) => (
                  <div className={`size-name`} key={index}>
                    <p
                      className={`name size${qCode}`}
                      id={`${qCode}${index}`}
                      onClick={(e) => handleSize(e)}
                    >
                      {_}
                    </p>
                  </div>
                ))
             }
            </div>
          <div className="product-size-guide">
            <a href="#">Hướng dẫn chọn size</a>
          </div>
          </div>
        </div>
        <div className="following">
          <ul className="product-service">
            <li>Miễn phí vận chuyển toàn bộ đơn hàng</li>
            <li>Đổi trả miễn phí trong vòng 30 ngày kể từ ngày mua.</li>
          </ul>
        <div className="product-options-actions">
          <div className="product-wapper-btn">
            <button
              className="action btn action-tocart"
              type="submit"
              title="Thêm vào giỏ"
              onClick={() => dispatchHandle()}
            >
              <span >Thêm vào giỏ</span>
            </button>
          </div>
          <div className="action btn action-store" type="button">
            <span>Tìm tại cửa hàng</span>
          </div>
        </div>
        <div className="product-options-actions-second">
          <div>
            <button
              className="action btn action-tocart"
              type="submit"
            >
              <img src={detailProduct?.like} alt=""></img>
              <span>Thêm vào yêu thích</span>
            </button>
          </div>
          <div className="action btn action-store" type="button">
            <img src={detailProduct?.share} alt=""></img>
            <span>Chia sẻ bạn bè</span>
          </div>
        </div>
        </div>
      </div>
      </div>
      </>
    ) : (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </div>
    )
    }
    
  </>;
};

export default ProductBuy;
