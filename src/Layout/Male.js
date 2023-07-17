import React, { useEffect, useState, Fragment } from "react";
import BackgroundImage from "../commons/BackgroundImage";
import Sidebar from "../commons/SideBar/Sidebar";
import TopSildeDown from "../components/Slide/TopSildeDown";
import { CustomSidebar } from "../commons/SideBar/Sidebar";
import { arrDetail } from "../data/dataSidebar";
import Products from "../components/Product/ViewProduct/Products";
import { filterProduct } from "../assets/cart";
import CustomViewProduct from "../components/Product/CustomViewProduct";
import Background from "../commons/Background";

import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import SliderDown from "../components/Slide/SliderDown";
import { addProduct } from "../redux/product/fetchProductApi";
import { changeColor } from "../redux/colors";


const icon  = (
  <Paper sx={{ m: 1 }} elevation={4} style={{
    position: 'absolute',
    zIndex: '10',
    width: '100%',
    height: 'auto',
  }}>
  <Box>
    <Box>
    <CustomViewProduct/>
    </Box>
  </Box>
  </Paper>
);



    


const Male = () => {

  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false);
  const newListProduct = useSelector((state) => state.product.product);
  const listColors = useSelector((state) => state.colors.colors);
  const isLoading = useSelector((state) => state.product.isLoading);
  const lengthProduct = newListProduct.length;
  const [product, setProduct] = useState([]);
  const [colors, setColors] = useState([]);
  const [isSort, setIsSort] = useState(false);
  const [ loading, setLoading] = useState(false);
  const dec = [];


  //dispatch list color customview
    if(listColors  && newListProduct){
      
      const listColor = [];
        const indexId = [];
        for(let i= 0; i < lengthProduct;i ++) {
          Array.from(newListProduct[i]).map((color,index) => {
            if(indexId.indexOf(color.color[0].public_id) === -1){
              indexId.push(color.color[0].public_id)
              listColor.push(color.color);
            }
        })
      }
        dispatch(
          changeColor(
            listColor
          )
        )
    }

  const handleChange = () => {
    document.querySelector('.custom-product').style.display = 'block';
    setChecked((prev) => !prev);
  };

  const handleSort = () => {

    const newArray = newListProduct.reduceRight((accumulator, value) => {
      accumulator.push(value);
      return accumulator;
    }, []);
    setProduct(newArray)
    setIsSort(!isSort);
  }

  const background = {
    src: "https://media.canifa.com/Simiconnector/banner_name_tablet1686977659.webp",
    alt: ""
  }

  const fetchApi = async (name, search) => {
    try {
     
      
      const res = await fetch (`https://vercel-nodejs.onrender.com/api/v2/product/${name}${window.location.search}`);
        
      const data = await res.json();
      const product =  await data.reductProduct;
      dispatch(
        addProduct(product)
        )
      setLoading(false);
      return product;
      
    }
    catch(error){
      console.log(error);
    }
  }


  useEffect(() => {
    
    setColors([]);
    let product;
    if(window.location.search.length > 0) {
      product = fetchApi(window.location.pathname?.replace("/", ""),window.location.search );
    } else {
      product = fetchApi(window.location.pathname?.replace("/", ""), '');
    }
  }, [window.location.pathname])
  

  return (
    <>
      <div className="male-distance">
            <SliderDown/>
            {
              window.innerWidth < 900 ? (
                <></>
              ) : (
                <Sidebar/>
              )
              
            }
            <div className="background">
              <Background background={background}/>
            </div>
        <div className="male">
          <div className="wapper-male">
            <div className="sidebar-left">
              <CustomSidebar title={arrDetail} />
            </div>
            <div className="content">
              <div className="filters">

              {
                !checked ? (
              <>
              <div onClick={handleChange} className="filter filter-product">
                  <span >Bộ lọc</span>
                  <img src={filterProduct.filter} alt=""></img>
                </div>
                <div className="filter filter-sort" onClick={() => handleSort()}>
                  <span>Sắp xếp</span>
                  <img src={filterProduct.sort} alt=""></img>
                </div>
              </>
                ) : (
                  <div onClick={handleChange} className="filter filter-product">
                    <span className="close-options" >Đóng</span>
                </div>
                )
              }
              </div>
              <div className="content-products">
              <Box>
                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "100ms" : "0ms",
                  transform: 'translateX(-10px)' }}
                >
                  {<Paper sx={{ m: 1 }} elevation={4} style={{
                    position: 'absolute',
                    zIndex: '10',
                    width: '100%',
                    height: 'auto',
                  }}>
                  <Box>
                    <Box>
                    <CustomViewProduct/>
                    </Box>
                  </Box>
                  </Paper>}
                </Zoom>
              </Box>

              {
              isSort === false && isLoading === false && newListProduct.length > 0 ? (

                newListProduct?.map((product, index) => (
                    <Products img={product} key={index} />
                  ))
                ) : (
                  <Fragment/>
                  
                )
              }
              {
              isSort === true && isLoading === false && product.length > 0 ? (

                product?.map((product, index) => (
                    <Products img={product} key={index} />
                  ))
                ) : (
                  <Fragment/>
                )
              }
              {
                isLoading === false && newListProduct.length === 0  && product.length === 0 ? (
                  <>
                  <h2>Không tìm thấy sản phẩm!</h2>
                    <div>Vui lòng thay đổi tiêu chí tìm kiếm của bạn và thử lại. Nếu vẫn không tìm thấy bất kỳ điều gì có liên quan, vui lòng truy cập Trang chủ và thử một phần bán chạy nhất của chúng tôi!
                  </div>
                  </>
                ) : (
                  <Fragment/>
                )
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Male;
