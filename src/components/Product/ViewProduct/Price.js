import React from "react";

function Price(price) {
  return <>
    <p className="description">{price.infor.description}</p>
    <p className="price">{String((price.infor.price).toFixed(3)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</p>
    <p className="stock">{String((price.infor.price - (price.infor.price * price.infor.discount / 100)).toFixed(3)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</p>
    {
      price.show ? (

        <div className="sale-onday">Ưu đãi trong ngày</div>
      ) : (
        <></>
      )
    }
  </>;
}

export default Price;
