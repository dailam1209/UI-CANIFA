import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { format, set } from 'date-fns'

export const CartProfile = () => {

    const iterm  = localStorage.getItem('userShop') !== undefined ? JSON.parse(localStorage.getItem('userShop')):  '' 
    const token = iterm?.payload?.token;
    const id = iterm?.payload?.user?._id;
    const [listOrder, setListOrder] = useState([]);
    const [lengthPage, setLengthPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    function pageChangeHandler(event, pageNumber)  {
        setCurrentPage(pageNumber);

    }

    const getAllOrder = async () => {
        try {
            const cart = await  fetch(`https://vercel-nodejs.onrender.com/order/getallorder/?page=${currentPage}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            const jsonCart  = await cart.json();
            setListOrder(jsonCart.lastItermOrder);
            setLengthPage(jsonCart.lengthPage)
            console.log("jsonCart",jsonCart);
            return jsonCart
        } catch (err) {
            console.log(err);
        }
      };

    useEffect(() => {
        getAllOrder();
    },[currentPage])

      console.log("listOrder", listOrder);


    return (
        <div className="wrapper-cartprofile">
            <div className="invoice-of-you">
                <p>Đơn hàng của tôi</p>
            </div>
            <div className="all">
                <span>Tất cả đơn hàng</span>
            </div>
            <div className="row-cart">
                <div className="row-cart-text">
                    <span>Đơn hàng</span>
                </div>
                <div className="row-cart-text">
                    <span>Ngày mua</span>
                </div>
                <div className="row-cart-text">
                    <span>Số lượng</span>
                </div>
                <div className="row-cart-text">
                    <span>Tổng tiền</span>
                </div>
            </div>
            {
                listOrder?.map((iterm, index) => (
                    iterm !== null ? (

                    <div className="carts-detail">
                        <div className="wrapper-img">
                            <img src={iterm?.productImage}  alt=""></img>
                        </div>
                        <div className="date">
                            <span>{iterm?.createdAt !== undefined ? format(new Date(iterm?.createdAt), "dd/MM/yyyy") : ''}</span>
                        </div>
                        <div className="count">
                            <span>x{iterm?.quantity}</span>
                        </div>
                        <div className="total">
                            <div>
                                <span>{iterm?.inforproduct[0].price !==undefined ? iterm?.inforproduct[0].price : iterm?.inforproduct.price}</span>
                            </div>
                            <div className='status-order'>
                                <p>Đang chờ xác nhận</p>
                            </div>
                        </div>
                    </div>
                    ) : (
                        <></>
                    )
                ))
            }
            {
                lengthPage > 1 ? (
                    <div className='pagination'>
                        <Stack className='stack'  spacing={2}>
                            <Pagination count={lengthPage} onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)} />
                        </Stack>
                    </div>
                ) : (
                    <></>
                )
            }
     
        </div>
    )
}