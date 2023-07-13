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


const Home = () => {

  const dispatch = useDispatch();
  const handleProduct = async () => {
    await dispatch(fetchAllProduct());
  }
  useEffect( () => {
    let pathname = window.location.pathname?.split("/")?.[1];
    if(pathname === "/" || pathname === "" && window.location.href === "" ) {

    }
  },[])
  
  
  let filterProduct = [];
  const newArrProduct = useSelector((state) => state.product.product);
  const isLoading = useSelector((state) => state.product.isLoading);
  useEffect(() => {
    handleProduct()
    filterProduct =[];
    filterProduct = lastResult('code', newArrProduct);

  }, [])
  return (
    <div className='wapper-home'>
      <SliderDown/>
      <BackgroundImage/>
      {/* <TimeCountDown/> */}
      <div className='padding'>

        {
         isLoading === false &&  newArrProduct?.length > 4 ? (
            <>
              <CountDownProduct/>
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
          isLoading === false && newArrProduct?.length > 4 ? (
            <>
              <BackgroundNextProduct/>
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
