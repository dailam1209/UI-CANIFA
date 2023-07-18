import { useDispatch, useSelector } from "react-redux";
import { lastResult } from "../data/dataImage";
import NextPreProduct from "../components/Product/NextPreProduct";
import CountDownProduct from "../components/Product/CustomViewProduct";
import { useState } from "react";

function BackgroundNextProduct (listFlowCode) {
    const PerViewDetail = [2,2,3,3];
    return (
        
        <div className="block">
            <h2 className="title">{listFlowCode.listFlowCode[0][0].category}</h2>
            <div className="wrapper-background-nextproduct">
                <div className="background-image" >
                    <img className="image" src="https://canifa.com/nu/vay.html" alt=""></img>
                </div>
                <div className="list-product">
                    <NextPreProduct products={listFlowCode.listFlowCode} PerView={PerViewDetail} progressbuy={false}/>
                </div>
            </div>
        </div>
    )
}

export default BackgroundNextProduct;