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


const Home = () => {

  const dispatch = useDispatch();
  const [filterProduct , setFilterProduct ] = useState([]);
  const [flowCode, setFlowCode] = useState([]);
  const handleProduct = async () => {
    await dispatch(fetchAllProduct());
  }
  // useEffect( () => {
  //   let pathname = window.location.pathname?.split("/")?.[1];
  //   if(pathname === "/" || pathname === "" && window.location.href === "" ) {

  //   }
  // },[])
  
  
  // let filterProduct = [];
  const newArrProduct = useSelector((state) => state.product.product);
  const isSuccess = useSelector((state) => state.product.isSuccess);
  useEffect(() => {
    handleProduct()
    setFilterProduct(lastResult('code', newArrProduct));
    let flowCategory = lastResult('category', newArrProduct);
    let lengthFlowCategory = flowCategory.length;
    console.log("length",lengthFlowCategory );
    const flowCode = [];
    for(let i=0;i < lengthFlowCategory;i ++) {
      let code = lastResult('code',flowCategory[i]);
      flowCode.push(code);
    }
    console.log(flowCode);
    setFlowCode(flowCode);
   

  }, [window.location])
  return (
    <div className='wapper-home'>
      <SliderDown/>
      <BackgroundImage/>
      {/* <TimeCountDown/> */}
      <div className='padding'>

        {
         isSuccess === true &&  newArrProduct?.length > 4 ? (
            <>
              <CountDownProduct listCode={flowCode[0]}/>
            </>
          ) : (
            <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </div>
            </>
          )
        }
         {
          isSuccess === true && newArrProduct?.length > 4 ? (
            
            <>
             {
              flowCode?.map((arryCode, index) => (
                <BackgroundNextProduct  listFlowCode={arryCode}/>
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
