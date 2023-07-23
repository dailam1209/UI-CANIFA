import React, { useEffect, useState } from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Avatar from '@mui/joy/Avatar';
import CartView from "./CartView";
import { useDispatch, useSelector } from "react-redux";
import { changeMethodPayment } from "../../redux/PaymentMethod";
import { Province } from "../../redux/apiCalls";
import { Comeback } from "../../assets/profile";
import { UserCheckout, PhoneCheckout, ProvinceCheckout, DistricCheckout, WardCheckout, AddressCheckout, NoteAddressCheckout } from "../../redux/inforCheckoutRedux";
const axios = require('axios');


function StepSecond () {


  const dispatch = useDispatch();
  const iterm  = localStorage.getItem('userShop') !== undefined ? JSON.parse(localStorage.getItem('userShop')):  '' ;
  const token = iterm?.payload?.token;
  const id = iterm?.payload?.user?._id;
  const [email, setEmail] = useState(iterm?.payload?.user?.email);
   
  // list
   const [provinces, setProvinces] = useState([]);
   const[districs, setDistrics] = useState([]);
   const [wards, setWards] = useState([]);
   
   // name
   const [name, setName] = useState(iterm?.payload?.user?.username);
   const [phone, setPhone] = useState(iterm?.payload?.user?.phone);
   const [address, setAddress] = useState(iterm?.payload?.user?.address);
   const [note, setNote] = useState("");
   const [province, setProvince] = useState(iterm?.payload?.user?.province);
   const[distric, setDistric] = useState(iterm?.payload?.user?.distric);
   const [ward, setWard] = useState(iterm?.payload?.user?.wards);
   const paymentMethod = useSelector( (state) => state?.payment?.payment);


    const handlePay = (e) => {
        dispatch(changeMethodPayment(e.target.value))
      };

    const handleBack = () => {
      document.querySelector('.comback-page-checkout').click();
    }

    const provincess = async () => {
    
      try {
          const product = await  fetch(`https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1`);
          const jsonProduct = await  product.json();
          setProvinces(jsonProduct.data.data)
      } catch (err) {
          console.log(err);
      }
  };

  const districss = async (code) => {
    try {
        const product = await  fetch(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${code}&limit=-1`);
        const jsonProduct = await  product.json();
        setDistrics(jsonProduct.data.data)
    } catch (err) {
        console.log(err);
    }
};

const wardss = async (code) => {
    
  try {
      const product = await  fetch(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${code}&limit=-1`);
      const jsonProduct = await  product.json();
      setWards(jsonProduct.data.data)
  } catch (err) {
      console.log(err);
  }
};

    const onChangeProvince =  () => {
      provincess();
      let elementDistric = document.getElementById("province")?.value;
      let codeDistric = elementDistric?.split("-")[1];
      let codeProvinceName = elementDistric?.split("-")[0];
      dispatch(
        ProvinceCheckout(codeProvinceName)
      )
      districss(codeDistric);
      

    }

    const onChangeDistric = () => {
      let elementDistric = document.getElementById("distric")?.value;
      let codeDistric = elementDistric?.split("-")[1];
      let codeDistricName = elementDistric?.split("-")[0];
      dispatch(
        DistricCheckout(codeDistricName)
      )
      wardss(codeDistric);
    }

    const onChangeWards = () => {
      let elementWards = document.getElementById("wards")?.value;
      let codeWard = elementWards?.split("-")[0];
      dispatch(
        WardCheckout(codeWard)
      )
    }

  //   const getUser = async (id) => {
  //     try {
  //         const user = await fetch(`https://vercel-nodejs.onrender.com/api/v2/auth/user/${id}`,
  //         {
  //             method: 'GET',
  //             headers: {
  //                 Authorization: `Bearer ${token}`,
  //                 'Accept': 'application/json',
  //                 'Content-Type': 'application/json'
  //             }
  //         });
  //         const jsonUser  = await user.json();
  //         return jsonUser
  //     } catch (err) {
  //         console.log(err);
  //     }
  // };

  //   const updateFetch = async (inforUser, token) => {
  //     try {
  //         const user = await fetch("https://vercel-nodejs.onrender.com/api/v2/auth/updateprofile",
  //         {
  //             method: 'POST',
  //             headers: {
  //                 Authorization: `Bearer ${token}`,
  //                 'Accept': 'application/json',
  //                 'Content-Type': 'application/json'
  //             },
             
  //             body: JSON.stringify(inforUser)
  //         });
  //         const jsonUser  = await user.json();
  //         return jsonUser
  //     } catch (err) {
  //         console.log(err);
  //     }
  // };

  //   const checkInforhandle = async () => {
  //     if(name === "") {
  //       alert("Please check name.")
  //       return 0;
  //     }
  //     if(phone === "") {
  //       alert("Please check phone.")
  //       return 0;
  //     }
  //     if(province === "") {
  //       alert("Please check province.")
  //       return 0;
  //     }

  //     if(distric === "") {
  //       alert("Please check distric.")
  //       return 0;
  //     }
      
  //     if(ward === "") {
  //       alert("Please check ward.")
  //       return 0;
  //     }
  //     if(address === "") {
  //       alert("Please check address.")
  //       return 0;
  //     }

  //     const profileCheckout = {
  //       "username": name,
  //       "phone": phone,
  //       "province": province,
  //       "distric": distric,
  //       "wards": ward,
  //       "address": address,
  //       "noteAddress": note,
  //       "payment": paymentMethod
  //     }

  //     const response =  updateFetch(profileCheckout, token);
  //     if(response && response.success === true) {
  //       alert('Update Profile success!')
  //    }

  //    const user = await getUser(id);
  //     if(user !== undefined) {
  //         localStorage.setItem('userShop', JSON.stringify({

  //             "payload" : {
  //                 "success": user.success,
  //                 "token": token,
  //                 "user": user.user
  //             }
              
  //         }));
  //     }


  //     console.log('bb');

      
  //   }

    useEffect(() => {
      // document.getElementById('province98').selected = true;
    })

    return (
        <>
            <div className="checkout-form">
                <div className="checkout-shiping">
                    <div className="checkout-step-title">
                        <div className="checkout-infor">
                            <h2>Thông tin giao hàng</h2>
                        </div>
                        <div className="checkout-comback" onClick={handleBack}>
                          <div className="comeback">
                              <Comeback/>
                          </div>
                          <div className="title">
                            <h3>Trở lại</h3>
                          </div>
                        </div>
                    </div>
                    <div className="checkout-step-content">
                        <div className="checkout-shipping-form">
                            <div className="form-group">
                                <label>Họ tên</label>
                                <input id="checkout-name" value={name} name="first-name" type="text" className="form-control" onChange={(e) => setName(e.target.value) }></input>
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <input id="checkout-phone" value={phone} name="first-name" type="telepone" className="form-control" onChange={(e) => setPhone(e.target.value) }></input>
                            </div>
                            <div className="form-group">
                                <label>Tỉnh / Thành phố</label>
                                <select id="province" className="form-control"  onClick={() => onChangeProvince()}>
                                    <option>{province?.split("-")[0]}</option>
                                    {
                                      provinces?.map((province, index) => (
                                        <option value={province.name + "-" + province.code}>{province.name}</option>
                                      ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Quận / Huyện</label>
                                <select id="distric"  className="form-control"  onClick={() => onChangeDistric()}  >
                                    <option>{distric?.split("-")[0]}</option>
                                    {
                                      districs?.map((iterm, index) => (
                                        <option  value={iterm.name + "-" + iterm.code}>{iterm.name}</option>
                                      ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Xã /Phường</label>
                                <select id="wards" className="form-control"  onClick={() => onChangeWards()} >
                                    <option>{ward}</option>
                                    {
                                      wards?.map((iterm, index) => (
                                        <option  value={iterm.name}>{iterm.name}</option>
                                      ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Nhập địa chỉ</label>
                                <input id="checkout-address" value={address} name="note" type="text" className="form-control" onChange={(e) => setAddress(e.target.value) } ></input>
                            </div>
                            <div className="form-group">
                                <label>Ghi chú</label>
                                <input id="checkout-noteAddress" value={note} name="note" type="text" className="form-control" onChange={(e) => setNote(e.target.value) }></input>
                            </div>
                            
                        </div>
                    </div>

                    <div className="checkout-payment-method">
                        <div className="checkout-step-title">
                            <div className="title">
                                <h2>Phương thức thanh toán</h2>
                            </div>
                        </div>
                        <div className="checkout-step-content">
                            <div className="checkout-payment-method-section">
                            <RadioGroup aria-label="Your plan" name="people" defaultValue="Individual">
                              <List
                                sx={{
                                  minWidth: 240,
                                  "--List-gap": "0.5rem",
                                  "--ListItem-paddingY": "1rem",
                                  "--ListItem-radius": "8px",
                                  "--ListItemDecorator-size": "32px"
                                }}
                              >
                                {["Thanh toán khi nhận hàng (COD)", "Thanh toán bằng Paypal"].map((item, index) => (
                                  <ListItem
                                    variant="outlined"
                                    key={item}
                                    sx={{ boxShadow: "sm", bgcolor: "background.body" }}
                                  >
                                    <ListItemDecorator>
                                      {/* <img src= "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png"></img> */}
                                    </ListItemDecorator>
                                    <Radio
                                      overlay
                                      value={item}
                                      label={item}
                                      onClick={handlePay}
                                      sx={{ flexGrow: 1, flexDirection: "row-reverse" }}
                                      slotProps={{
                                        action: ({ checked }) => ({
                                          sx: (theme) => ({
                                            ...(checked && {
                                              inset: -1,
                                              border: "2px solid rgba(99,177,188,.2)",
                                              borderColor: "rgba(99,177,188,.2)"
                                            })
                                          })
                                        })
                                      }}
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </RadioGroup>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-view-product">
                      <CartView/>
                    </div>
                </div>
            </div>
            {/* <button className="checkout-infor" style={{
              
            }} onClick={() => checkInforhandle()}>Check</button> */}
        </>
    )
}

export default StepSecond;