import './App.css';
import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from '../src/commons/Header/Header';
import { publicRouter } from './router';

import { fetchAllProduct } from './redux/product/fetchProductApi';
import wishListService from './redux/WishList/wishListService';
import { useDispatch } from "react-redux";
import { fetchAllWishList } from './redux/WishList/wishListRedux';
import Footer from './commons/Header/Footer';



function App() {

  const dispatch = useDispatch();
  
  // const handleProduct = async () => {
  //   await dispatch(fetchAllProduct());
  // }
  // useEffect( () => {
  //   let pathname = window.location.pathname?.split("/")?.[1];
  //   if(pathname === "/" || pathname === "" && window.location.href === "" ) {

  //     handleProduct()
  //   }
  // },[])


  


  return (
    <>
        <ToastContainer
            position="top-right"
            top= '50%'
            autoClose={100000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />

      <Router> 
        <div className="App">
        <Routes>
          { publicRouter.map((route,index) => {
            const Page = route.component;
            return (
              <Route
                key = {index}
                path = {route.path}
                element = {
                  <>
                    <div  className='wrapper-all'>

                      <Header/>
                      <Page/>
                      <Footer/>
                    </div>
                  </>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  </>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default App;
