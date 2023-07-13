import React from "react";

function Price(price) {
  return (
    <>
      <p className="description">{price.infor.description}</p>
      <p className="price">{String(price.infor.price).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 ₫</p>
      <p className="stock">{String(price.infor.price).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 ₫</p>
      {
        price.show ? (

          <div className="sale-onday">Ưu đãi trong ngày</div>
        ) : (
          <></>
        )
      }
    </>
  );
}

export default Price;
