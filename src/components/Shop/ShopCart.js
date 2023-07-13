
import React, { useState, useEffect } from "react";
import DefaultLayout from "../../Layout/Defaulayout/DefaultLayout";
import StepOne from "./StepOne";
import SliderDown from "../Slide/SliderDown";
import Modal from "@mui/material/Modal";
import BasicModal from "./Modal";
import StepSecond from "./StepSecond";
import { useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch } from "react-redux";
import cartService from "../../redux/Cart/CartService";
import { addCart, removeAllCart } from "../../redux/Cart/cartbuyRedux";


const steps = [
    { label: 'Giỏ hàng' },
    { label: 'Xác nhận' },
    { label: 'Hoàn tất' }
  ];
  
  function DoneIcon() {
    return "✓";
  }
  
  function StepContent({ done, index }) {
    return done ? <DoneIcon /> : index + 1;
  }
  
  function renderStep({ label }, key) {
    const { current } = this;
    const done = key < current;
    const currentStep = key === current;
    const currentClassName = currentStep ? ' stepper__step--current' : '';
    const doneClassName = done ? ' stepper__step--done' : '';
    const className = `stepper__step${currentClassName}${doneClassName}`;
  
    return (
      <li className={className} key={key}>
        <span className="stepper__step__index">
          <StepContent done={done} index={key} />
        </span>
        <h6 className="stepper__step__label">{label}</h6>
      </li>
    )
  }
  
  function Stepper({ current, steps }) {
    return (
      <ul className="stepper">
        {steps.map(renderStep, { current })}
      </ul>
    )
  }
  
function ShopCart () {

  const dispatch = useDispatch();
  const iterm  = localStorage.getItem('userShop') !== undefined ? JSON.parse(localStorage.getItem('userShop')):  '' 
  const token = iterm?.payload?.token;
  const id = iterm?.payload?.user?._id;
  const amountSum =  useSelector((state) => state.cart.amount);
  const stock =  useSelector((state) => state.cart.stock);
  let checkoutInfor = false;
  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  }

  const [orderID, setOrderID] = useState(false);
  const [success, setSuccess] = useState(false);
  const paymentMethod = useSelector( (state) => state?.payment?.payment);
  const amountTotal = useSelector((state) => state?.cart?.amount);
  const total = (amountTotal / 23).toFixed(1);



  // creates a paypal order
  const createOrder = async (data, actions) => {
    
    return actions.order.create({
        purchase_units: [
            {
                description: "Shopping in Canifa",
                amount: {
                    currency_code: "USD",
                    value:  total,
                },
            },
        ],
    }).then((orderID) => {
            setOrderID(orderID);
            return orderID;
        });
};

const updateFetch = async (inforUser, token) => {
  try {
      const user = await fetch("https://vercel-nodejs.onrender.com/api/v2/auth/updateprofile",
      {
          method: 'POST',
          headers: {
              Authorization: `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
         
          body: JSON.stringify(inforUser)
      });
      const jsonUser  = await user.json();
      return jsonUser
  } catch (err) {
      console.log(err);
  }
};

const getUser = async (id) => {
  try {
      const user = await fetch(`https://vercel-nodejs.onrender.com/api/v2/auth/user/${id}`,
      {
          method: 'GET',
          headers: {
              Authorization: `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      });
      const jsonUser  = await user.json();
      return jsonUser
  } catch (err) {
      console.log(err);
  }
};

const checkInforhandle = async (username, phone, province, distric, ward, address, noteAddress) => {
  if(username === "") {
    alert("Please check name.")
    checkoutInfor = false
    return 0;
  }
  if(phone === "") {
    alert("Please check phone.")
    checkoutInfor = false
    return 0;
  }
  if(province === "") {
    alert("Please check province.")
    checkoutInfor = false
    return 0;
  }

  if(distric === "") {
    alert("Please check distric.")
    checkoutInfor = false
    return 0;
  }
  
  if(ward === "") {
    alert("Please check ward.")
    checkoutInfor = false
    return 0;
  }
  if(address === "") {
    alert("Please check address.")
    checkoutInfor = false
    return 0;
  }

  const profileCheckout = {
    "username": username,
    "phone": phone,
    "province": province,
    "distric": distric,
    "wards": ward,
    "address": address,
    "noteAddress": noteAddress,
    "payment": paymentMethod
  }

  checkoutInfor = true;
  const response =  updateFetch(profileCheckout, token);
  if(response && response.success === true) {
    alert('Update Profile success!')
 }

 const user = await getUser(id);
  if(user !== undefined) {
      localStorage.setItem('userShop', JSON.stringify({

          "payload" : {
              "success": user.success,
              "token": token,
              "user": user.user
          }
          
      }));
  }



  
}

const pay = () => {
  const username = document.querySelector('#checkout-name').value;
  const phone = document.querySelector('#checkout-phone').value;
  const province = document.querySelector('#province').value;
  const distric = document.querySelector('#distric').value;
  const ward = document.querySelector('#wards').value;
  const address = document.querySelector('#checkout-address').value;
  const noteAddress = document.querySelector('#checkout-noteAddress').value;
  checkInforhandle(username, phone, province, distric, ward, address, noteAddress)

  
}



const createOrderApi = async () => {
  try {
      const cart = await  fetch("https://vercel-nodejs.onrender.com/order/create-order",
      {
          method: 'POST',
          headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
         
          body: JSON.stringify({
            "userId": id,
            "amount": amountSum,
            "payment": paymentMethod
          })
      });
      const jsonCart  = await cart.json();
      return jsonCart
  } catch (err) {
      console.log(err);
  }
};

// check Approval
const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
        const { payer } = details;
        setSuccess(true);
    });
};

  const [current, setCurrent] = useState(0);
  
  const handleNext = () => {
    setCurrent(Math.min(current + 1, steps.length));
    console.log("current", current);
  }

  const handlePrevious = () => {
    setCurrent(Math.max(current - 1, 0));
  }

  const payment = async () => {
    await  pay();
    if(checkoutInfor) {
      dispatch(
        removeAllCart([])
      )
      handleNext();
    }
    
  }

  

  useEffect(() => {
    if (success) {
      createOrderApi();
      dispatch(
        removeAllCart([])
      )
      alert("Payment successful!!");
    }
  },[success]);

    return (
      <PayPalScriptProvider options={{ "client-id": "AUvCwyDw5CrmXbmPE9BMieP6qbR3nHFJ7_1GdD2ZQK-CX5r7dGcNXng95tskcRhyMMbwByyIjWjsxPPL" }}>
        <div className="shop-cart">
            <SliderDown/>
            <div className="checkout-progress-bar">
            <Stepper steps={steps} current={current} />
            </div>
            <div className="checkout-all">
              <div className="checkout-view">
                {
                  current === 0 ? (
                    <StepOne/>
                  ) : (
                    <></>
                  )
                }
                                {
                  current === 1 || current === 2 ? (
                    <StepSecond/>
                  ) : (
                    <></>
                  )
                }
                
                
              </div>
              <div className="checkout-to-payment">
                <div className="checkout-coupon">
                  {
                    current === 1 ? (
                      <>
                    <div className="checkout-step-title">
                      <h2>Mã ưu đãi</h2>
                      <div className="action-show" onClick={handleOpen}>
                        <span>Chọn hoặc nhập mã</span>
                      </div>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          >
                            <BasicModal/>
                        </Modal>
                    </div>
                  <div className="checkout-step-title">
                    <h2>Dùng C-point</h2>
                    <div className="point" >
                    <span>0</span>
                  </div>
                  </div>
                  <div className="enter-input-code">
                    <div className="append-point">
                      <div className="input-point">
                          <input
                              className="input-point"
                              // ref={inputCurrent}
                              placeholder="Nhập số C-point"
                              spellCheck="false"
                              type="text"
                              // value={searchValue}
                              // onChange={handerSearch}
                              ></input>
                      </div>
                      <button className="btn">Sử dụng</button> 
                  </div>
              </div>
                      </>
                    ) : (
                      <></>
                    )
                  }
                  
               
                </div>
                  <div className="checkout-step-title">
                      <h2>Chi tiết sản phẩm</h2>
                  </div>
                  <div className="checkout-total">
                    <table>
                      <tbody>
                        <tr>
                          <th>Giá trị đơn hàng</th>
                          <td>{String(amountSum.toFixed(3)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}₫</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <th>Giảm giá</th>
                          <td className="sale">-{String(stock.toFixed(3)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="cpoint">
                          <th>C-point tích lũy</th>
                          <td>+0</td>
                        </tr>
                        <tr className="khtt">
                          <th>Điểm KHTT</th>
                          <td>+0</td>
                        </tr>
                        <tr>
                          <th>
                            Tổng tiền thanh toán   
                            <small>(Đã bao gồm thuế VAT)</small>
                          </th>
                          <td>{String(amountSum.toFixed(3)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</td>
                        </tr>
                        
                      </tfoot>
                    </table>

                </div>
                <button className="comback-page-checkout" onClick={handlePrevious}>Aterior</button>
                {
                  current === 0 ? (
                    <div className="checkout-proceed-checkout">
                      <button onClick={handleNext}>Đặt hàng</button>
                    </div>
                  ) : (
                    <></>
                  )
                }
                {
                  current === 1  ? (
                      <div className="checkout-proceed-checkout">
                      <button onClick={() => payment()} >Xác nhận thông tin</button>
                    </div>
                  ) : (
                    <></>
                  )
                }
                {
                  current === 2 && paymentMethod === 'Thanh toán bằng Paypal' ? (
                    <PayPalButtons 
                      style={{ layout: "vertical" }}
                      createOrder={createOrder}
                      onApprove={onApprove}
                      >
                    </PayPalButtons>
                  ) : (
                   <></>
                  )
                }

                {
                  current === 2 &&  paymentMethod !== 'Thanh toán khi nhận hàng' ? (
                      <div className="checkout-proceed-checkout">
                      <button onClick={() => payment()} >Thanh Toán</button>
                    </div>
                  ) : (
                    <></>
                  )
                }
              </div>
            </div>
        </div>
      </PayPalScriptProvider>
    );
}

export default ShopCart;