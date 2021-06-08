import React from "react";

const FuntionBar = () => {
  return (
    <div className="functionBar">
      <div className="img-bar">
        <img src="/picture/WEB13.png" alt="" />
      </div>
      <p>main</p>
      <div className="box_bar">
        <i class="fas fa-briefcase"></i>
        <p>Work</p>
      </div>
      <div className="box_bar">
        <i class="fas fa-cart-arrow-down"></i>
        <p>Product</p>
      </div>
      <div className="box_bar">
        <i class="fas fa-portrait"></i>
        <p>Customer</p>
      </div>
    </div>
  );
};

export default FuntionBar;
