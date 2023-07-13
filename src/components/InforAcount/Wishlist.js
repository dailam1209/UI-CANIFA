import React, { useEffect, useState } from "react";
// import Male from "../../Layout/Male";
import { useDispatch, useSelector } from "react-redux";
import { lastResult } from "../../data/dataImage";
import Products from "../Product/ViewProduct/Products";
import { addWish, fetchAllWishList } from "../../redux/WishList/wishListRedux";

function Wishlist () {

  const dispatch = useDispatch();
  const arrayWishList = useSelector((state) => state.wishlist.wishList)

  // const userId = JSON.parse(localStorage?.getItem('userShop'))?.payload.user._id;
  // const token = JSON.parse(localStorage?.getItem('userShop'))?.payload.token;
  const [listWish, setListWish] = useState([]);
  
  // useEffect(() => {
  //   if(userId !== undefined && token !== undefined) {
  //     dispatch(
  //       fetchAllWishList(userId, token)
  //     )
  // }
  // const getAllWishListIterm = async () => {
  //   try {
  
  //     const response = await fetch('https://vercel-nodejs.onrender.com/api/v2/wishlist/get-list/6489929f6eb74798f3e444ca', {
  //       method: 'GET',
  //       headers: {
  //         // set Accept header to application/json
  //         Accept: 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }
  
  //     const result = await response.json();
  //     return result;
       
     

  // } catch (err) {
  //   console.log(err)
  // }
  // }

  // getAllWishListIterm().then(data => {
  //   console.log(data);
  //   dispatch(
  //     addWish(data.flowCode)
  //   )
  // });

  // },[userId, token])


    return (
        <div className="content-wishlist">
          <div className="wishlist-title">
            <span>Sản phẩm yêu thích</span>
          </div>
          <div className="content-products">

            {arrayWishList?.map((product, index) => (
              <Products img={product} key={index} />
            ))}
          </div>
        </div>
    )
};


export default Wishlist;