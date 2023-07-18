import React, { useEffect } from 'react'
import BackgroundImage from '../commons/BackgroundImage';
import CountDownProduct from '../components/Orther/CountDownProduct';
import SliderDown from '../components/Slide/SliderDown';
import Content from '../components/Content/Content';
import { useSelector, useDispatch } from "react-redux";
import { lastResult } from '../data/dataImage';
import BackgroundNextProduct from '../commons/BackgroundNextProduct';
import { fetchAllProduct } from '../redux/product/fetchProductApi';
import { CircularProgress } from '@mui/material';
import TimeCountDown from '../components/TimeCount/TimeCountDown';
import { useState } from 'react';


const listBander = [
  {
      path: "/search?q=vay",
      src: "https://media.canifa.com/Simiconnector/list_image_tablet1687251733.webp"
  },
  {
      path: "/search?q=aophong",
      src: "https://media.canifa.com/Simiconnector/list_image_tablet1687251849.webp"
  }

]

const Home = () => {

  const dispatch = useDispatch();
  const newArrProduct = useSelector((state) => state.product.product);
  const isSuccess = useSelector((state) => state.product.isSuccess);
  const isLoading = useSelector((state) => state.product.isLoading);
  const [loading, setLoading] = useState(false);
  const [flowCodes, setFlowCodes] = useState([]);
  const handleProduct = async () => {
    await dispatch(fetchAllProduct());
  }

  const getAllProduct = async () => {
    setLoading(true);
    try {
        const listProduct = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/product/allProduct`);
        const products = await  listProduct.json();
        const flowCategory = await lastResult('category', products.allproduct);
        const lengthFlowCategory = flowCategory.length;
        const flowCode = [];
         for(let i= 0;i < lengthFlowCategory;i ++) {
          let code =  await lastResult('code',flowCategory[i]);
          flowCode.push(code);
        }
        setFlowCodes(flowCode);
        setLoading(false);
    } catch (err) {
        console.log(err);
    }
};

  const listFetch = async () => {
    await getAllProduct();
  }
  
  useEffect(() => {
    handleProduct();
    listFetch();
  },[window.location.pathname])
  return (
    <div className='wapper-home'>
      <SliderDown/>
      <BackgroundImage/>
      {/* <TimeCountDown/> */}
      <div className='padding'>

        {
         isSuccess  && isLoading === false && newArrProduct?.length > 4 ? (
              <CountDownProduct/>
          ) : (
            <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </div>
            </>
          )
        }
         {
          loading === false && flowCodes.length  > 0 ? (
            
            <>
             {
               flowCodes.map((arryCode, index) => (
                <div key={index}>
                  <BackgroundNextProduct  listFlowCode={arryCode} bander={listBander[index]}/>
                </div>
             ))
            }
            </>
          ) : (
            <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </div>
            </>
          )
        }
        
        {/* <Content/> */}
      </div>
    </div>
  )
}

export default Home;
