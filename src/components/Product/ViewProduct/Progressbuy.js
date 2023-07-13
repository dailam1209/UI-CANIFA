import React from "react";

const Progressbuy = () => {
  return (
    <>
      <div className="progress-buy">
        <div style={{ width: "9%" }} className="progress"></div>
      </div>
      <div className="progress-buy-text">
        Đã bán:
        <span className="value"> 8 sp</span>
      </div>
    </>
  );
};

export default Progressbuy;
