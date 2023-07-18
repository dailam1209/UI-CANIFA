import { useDispatch, useSelector } from "react-redux";
import { lastResult } from "../data/dataImage";
import NextPreProduct from "../components/Product/NextPreProduct";
import CountDownProduct from "../components/Product/CustomViewProduct";
import { useState } from "react";
import { NavLink } from "react-router-dom";


function BackgroundNextProduct (listFlowCode) {
    const PerViewDetail = [2,2,3,3];
    return (
        
        <div className="block">
            <h2 className="title">{listFlowCode.listFlowCode[0][0].category}</h2>
            <div className="wrapper-background-nextproduct">
                        <div className="background-image" >
                            <NavLink to={listFlowCode?.bander.path}>
                                <img className="image" src={listFlowCode?.bander.src} alt=""></img>
                            </NavLink>
                        </div>
                <div className="list-product">
                    <NextPreProduct products={listFlowCode.listFlowCode} PerView={PerViewDetail} progressbuy={false}/>
                </div>
            </div>
        </div>
    )
}

export default BackgroundNextProduct;