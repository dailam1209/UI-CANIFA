import React, { useState, useRef} from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faSearch,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "0px solid #000",
    boxShadow: 24,
    p: 4
  };

export default function BasicModal() {
  


    const codeSale = false;
    const [searchValue, setSearchValue] = useState("");
    const inputCurrent = useRef();
    const handerSearch = (e) => {
        const searchChangeValue = e.target.value;
        if(!searchChangeValue.startsWith(' ')){
            setSearchValue(searchChangeValue);
        }
      };
    
      const handleClose = () => {
        setSearchValue("");
        inputCurrent.current.focus();
      };

      const handleCloseModel = () => {
          document.querySelector('.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop').click();
      }
  return (
        <>
          <Box sx={style}>
            <div className="title-code">
                <h2>Mã ưu đãi</h2>
            </div>
            <div className="enter-input-code">
                <div className="append">
                    <div className="input-code">
                        <input
                            className="input-text"
                            ref={inputCurrent}
                            spellCheck="false"
                            type="text"
                            value={searchValue}
                            onChange={handerSearch}
                            ></input>
                            {
                                searchValue.length > 0 ? (
                                    <FontAwesomeIcon className="icon-code" onClick={handleClose} icon={faClose} />
                                ) : ( 
                                    <></>
                                )

                            }
                    </div>
                    <button className="btn">Sử dụng</button> 
                </div>
                { codeSale ? (
                  <div className="checkout-coupon-form-error">
                  Mã ưu đãi không chính xác
                  </div>
                ) : (
                  <></>
                )

                }
            </div>
            <button className="btn-append-code" onClick={handleCloseModel}>Tiếp tục</button>
          </Box>
        </>
  );
}

