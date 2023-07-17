import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { checkEmail, checkCodeApi, deleteCode, changePassword } from "../../redux/apiCalls";
import { Comeback } from "../../assets/profile";
import { useDispatch, useSelector } from "react-redux";
import { PhoneCheckout } from "../../redux/inforCheckoutRedux";





export default function ChangePassword() {

  const dispatch = useDispatch();
  const [forgetPassword, setForgotPassword] = useState(1);
  const [match, setMatch] = useState(false);
  const [refreshToken, setRefreshToken] = useState("");
  const [checkCode, setCheckCode] = useState(1);
  const number = useSelector( (state) => state.checkout.phone);
  const re = "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";




  // notice fail
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


  // notice success
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
 

   // timer
  function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
        console.log(minutes, seconds);
        if (minutes == '00' && seconds == '00' ) {
            let email  = localStorage.getItem("user/email")
            deleteCode(email)
            clearInterval(countdownTimer);
        }
    };
    // we don't want to wait a full second before the timer starts
        timer();
        var countdownTimer = setInterval(timer, 1000);
        
    }

    // count down timer
    const countDownTimer = () => {
        var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    }

    // check email and code to screen change password
    const handleSubmitEmail = async (event) => {
        event.preventDefault();
        const { email  } = event.target.elements;
        if(!email) {
            
            alert('Please enter your email.')
            notice('Please enter your email.')
        }
        if(checkCode === 1) {
            countDownTimer();
            if(email && email.value !== '') {
                localStorage.setItem("user/email", email.value);
                const requestCheckEmail = await checkEmail(email.value);
                if(requestCheckEmail && requestCheckEmail.success === true) {
                    setMatch(true);

                    setRefreshToken(requestCheckEmail.refreshToken);
                    
                    setCheckCode(2);
                    noticeSuccess("Have email mached.")
                }
            }
           
        }
        else {
            const { code  } = event.target.elements;
            if(code && code.value) {
                let email  = localStorage.getItem("user/email")
                const request = await checkCodeApi(code.value, email);
                if(request && request.success === true) {
                    dispatch(
                        PhoneCheckout(2)
                    )
                    setForgotPassword(2);
                    deleteCode(email)
                    window.history.pushState("object", "Title", "/resetpassword");
                    noticeSuccess("Have code mached.")
                }
                else {
                    notice(request.message)
                }
            }
        }
    }

    // submit change password
    const handleSubmitChangePassword = async (event) => {
        event.preventDefault();
        const { password, confirmpassword } = event.target.elements;
        if(password && confirmpassword && password.value && confirmpassword.value &&  password.value === confirmpassword.value ) {
            const request = await changePassword({
                "password": password.value,
                "confirPassword": confirmpassword.value
            }, refreshToken)
            if(request && request.success === true) {
                noticeSuccess("Password have changed.")
                window.location.replace("https://1d3a-113-190-58-191.ngrok-free.app/");
            }
            else {
                notice(request && request.message)
            }

        }
        else {
            alert('Please check again.')
        }
    }

    // comeback screen
    const handleBackUp = (event) => {
        event.preventDefault();
        window.history.pushState("object", "Title", "/forgot-password");
        setMatch(false);
        setCheckCode(1);
        dispatch(
            PhoneCheckout(1)
        )
      }

  return (
    <>
    {/* comeback */}
        {
             number === 2  ? (
                <div className="btn-comeback changepassword-hidden" onClick={(e) => handleBackUp(e)}>
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
        <div className="wrapper" >
            {/* element screen change password */}
            {
            forgetPassword === 1  ? (

                <>
                    <div className="title-text">
                        <div className="title checkemail" style={{
                            fontSize: "24px"
                        }} >Check Email</div>
                    </div>
                    <div style={{
                            textAlign: "center",
                            color: "red",
                            lineHeight: "22px",
                            padding: "8px 0"
                    }}><span id="time"></span></div>
                    <div className="form-container">
                        <div className="form-inner">
                            {/* check email */}
                            <form action="#" className="checkemail" onSubmit={handleSubmitEmail}>
                                <div className="field">
                                <input id="email" type="email" placeholder="Email Address" required  onClick={(event) => event.preventDefault()}/>
                                </div>
                            {
                                checkCode === 2 && match ? (
                                <div className="field">
                                    <input id="code" type="text" placeholder="Enter code" required  onClick={(event) => event.preventDefault()}/>
                                </div>
                                ) : (
                                    <></>
                                )
                            }
                            
                            {
                                checkCode === 2 ? (
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit"  value="Send Code"/>
                            </div>
                                ) :(
                                <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Check Email" />
                            </div>
                                )
                            }
                            </form>
                        
                        </div>
                    </div>
                </>
                ) : (
                    <>
                    <div className="title-text">
                        <div className="title changepassword"style={{
                            fontSize: "24px"
                        }}>Change Password</div>
                    </div>
                    <div className="form-container">
                        <div className="form-inner">
                            {/* check email */}
                            <form action="#" className="changepassword" onSubmit={handleSubmitChangePassword}>
                                <div className="field">
                                    <input id="password" type="password" placeholder="Password" required onClick={(event) => event.preventDefault()} />
                                </div>
                                <div className="field">
                                    <input id="confirmpassword" type="password" placeholder="Confirm password" required onClick={(event) => event.preventDefault()} />
                                </div>
                                
                                <div className="field btn">
                                    <div className="btn-layer"></div>
                                    <input type="submit" value="Change Password" />
                                </div>
                            </form>
                        
                        </div>
                    </div>
                    </>
                )
            }
        </div>
    </>
  );
}
