import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, fetchLogin  } from "../../redux/user/fetchUserApi";
import wishListService from "../../redux/WishList/wishListService";
import { addWish } from "../../redux/WishList/wishListRedux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import cartService from "../../redux/Cart/CartService";
import { addCart } from "../../redux/Cart/cartbuyRedux";
import { useNavigate } from 'react-router-dom';
import ChangePassword from "./ChangePassword";
import { Comeback } from "../../assets/profile";
import { PhoneCheckout } from "../../redux/inforCheckoutRedux";




export default function Login() {

  const [forgotPassword, setForgotPassword] = useState(1);



  const notice = (text) => {
    toast.warning(text, {
      height: "100%",
      borderLeft: "5px solid green",
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      minHeight: "200px",
      theme: "light",
    });
  }

  const noticeSuccess = (text) => {
    toast.success(text, {
      height: "100%",
      borderLeft: "5px solid green",
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      minHeight: "200px",
      theme: "light",
    });
  }
 

  const re = "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";
    const dispatch = useDispatch();
    const isSuccess = useSelector((state) => state.user.isSuccess)
    const number = useSelector( (state) => state.checkout.phone)
    

    const handleSubmitSign = async (event) => {
      event.preventDefault()
      const {email, password, confirmpassword } = event.target.elements;
      if(email.value.toLowerCase().match(re) === false) {
        notice('Please check email again!');
        return 0;
      }
      if(password.value.toLowerCase() === confirmpassword.value.toLowerCase() ) {

        const res = await dispatch(
          fetchRegister({
            "username": email.value.slice(0,-10),
            "email": email.value  ,
            "password": password.value,
            "article_image": ""
          })
        )
        console.log("res", res);
        if(res.payload.success && res.payload.token !== undefined ) {
          noticeSuccess("Account have sign up success!");
        }
        else {
            notice(res.payload.message);
        }
      }
      else {
        notice("Please check password or confirmpassword again!")
      }
      
    };

    const handleSubmitLogin = async (event) => {
      event.preventDefault()
      const {email, password } = event.target.elements;
      
      const user = await dispatch(
        fetchLogin({
          "email": email.value ,
          "password": password.value
        })
        )
       localStorage.setItem('userShop', JSON.stringify(user));

      
      if(user.payload.success) {

        noticeSuccess("Login success.");
        const userId = JSON.parse(localStorage?.getItem('userShop'))?.payload.user._id;
        const token = JSON.parse(localStorage?.getItem('userShop'))?.payload.token;
          if(userId !== undefined && token !== undefined) {
           await wishListService.getAllWishListIterm(userId, token).then(data => {
              console.log(data);
              dispatch(
                addWish(data.flowCode)
              )
          });
                
          await cartService.getAllCartOfUser(userId, token).then(data => {
            dispatch(
              addCart(data.cartData)
              )
            });
            window.location.replace(window.location);
           
        }
      } else  {
        notice(user.payload.message);
      }

    }


  const signupBtn = () => {
    document.querySelector(".title-text .login").style.marginLeft = "-50%";
    document.querySelector("form.login").style.marginLeft = "-50%";
  };

  const loginBtn = () => {
    document.querySelector(".title-text .login").style.marginLeft = "0%";
    document.querySelector("form.login").style.marginLeft = "0%";
  };

  const signupLink = () => {
    signupBtn();
    return false;
  };

  // to screen check email
  const showCheckEmail = (event) => {
    event.preventDefault()
    setForgotPassword(2);
    dispatch(
      PhoneCheckout(1)
    )
    window.history.pushState("object", "Title", "/forgot-password");

  }

  // come back
  const handleBackUp = (event) => {
    event.preventDefault()
    if(window.location.pathname === '/resetpassword') {
      setForgotPassword(1)
    }
    setForgotPassword(1)
    window.history.pushState("object", "Title1", "/login");
    dispatch(
      PhoneCheckout(1)
    )

  }
  
  return (
    <div className="wrapper" >
      {
        forgotPassword === 1 ? (
          <>
            <div className="title-text">
              <div className="title login" >Login</div>
              <div className="title signup">Signup</div>
            </div>
            <div className="form-container">
              <div className="slide-controls">
                <input type="radio" name="slide" id="login" />
                <input type="radio" name="slide" id="signup" />
                <label for="login" className="slide login" onClick={loginBtn}>
                  Login
                </label>
                <label for="signup" className="slide signup" onClick={signupBtn}>
                  Signup
                </label>
                <div className="slider-tab"></div>
              </div>
              <div className="form-inner">
                {/* login */}
                <form action="#" className="login" onSubmit={handleSubmitLogin}>
                  <div className="field">
                    <input id="email" type="email" placeholder="Email Address" required  onClick={(event) => event.preventDefault()}/>
                  </div>
                  <div className="field">
                    <input id="password" type="password" placeholder="Password" required onClick={(event) => event.preventDefault()} />
                  </div>
                  <div className="pass-link" onClick={(e) => showCheckEmail(e)} >
                    Forgot password?
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Login" />
                  </div>
                  <div  className="signup-link" onClick={signupLink}>
                    Not a member? <a href="/">Signup now</a>
                  </div>
                </form>
                {/* sign up */}
                <form action="#" className="signup" onSubmit={handleSubmitSign}>
                  <div className="field">
                    <input id="email" type="email" placeholder="Email Address" required  onClick={(event) => event.preventDefault()}/>
                  </div>
                  <div className="field">
                    <input id="password" type="password" placeholder="Password" required onClick={(event) => event.preventDefault()} />
                  </div>
                  <div className="field">
                    <input id="confirmpassword" type="password" placeholder="Confirm password" required onClick={(event) => event.preventDefault()} />
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Signup" />
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            {
              number === 1 ? (
                <div  className="btn-comeback login-hidden" onClick={(e) => handleBackUp(e)}>
                  <div className="comeback">
                      <Comeback/>
                  </div>
                  <div className="title">
                  <h3>Trở lại</h3>
                  </div>
              </div>
              ) : (
                <></>
              )
            }
            <ChangePassword number={forgotPassword}/>
          </>
        )
      }
    </div>
  );
}
