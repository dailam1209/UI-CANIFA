import Cart from "../Cart/Cart";
import CartView from "./CartView";
import { useSelector } from "react-redux";


function StepOne () {
    const amountTotal = useSelector((state) => state?.cart?.amount);
    return (

        <div className="checkout-container--left">
            <div className="check-cart-promotion-notification">
                <div className="icon-freeship"></div>
                <div className="title">
                    { amountTotal > 399.000 ? (
                            <>
                        Bạn đủ điều kiện để nhận miễn phí vận chuyển
                            </>
                    ) : (
                        <>
                            Bạn cần mua thêm ${399.000 - amountTotal} đủ điều kiện để nhận miễn phí vận chuyển
                        </>
                    )
                    }
                </div>
            </div>
            <CartView/>
        </div>
    )
}

export default StepOne;