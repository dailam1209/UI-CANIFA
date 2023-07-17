import React from "react";
import Image from "./Image";

function Products(product) {
  return (
    <>
    {
      product.img ? (
        <div className="product">
        <Image image={product?.img} show={product?.show} />
      </div>
      ) : (
        <></>
      )
    }
     
    </>
  );
}

export default Products;
