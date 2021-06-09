import React from "react";
import { Link } from "react-router-dom";
const FuntionBar = () => {
  return (
    <div className="functionBar">
      <div className="img-bar">
        <img src="/picture/WEB13.png" alt="" />
      </div>
      <Link className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-tachometer-alt"></i>
            <p>Dashboard</p>
          </div>
        </div>
      </Link>
      <Link className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-users"></i>
            <p>Quản lí bán hàng</p>
          </div>

          <i class="fas fa-angle-left"></i>
        </div>
      </Link>
      <Link className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-shopping-basket"></i>
            <p>Referral</p>
          </div>
          <i class="fas fa-angle-left"></i>
        </div>
      </Link>
      <Link className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-shopping-cart"></i>
            <p>Tư vấn chuyên gia</p>
          </div>
          <i class="fas fa-angle-left"></i>
        </div>
      </Link>
      <Link className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-book"></i>
            <p>Đề xuất công nghệ</p>
          </div>
          <i class="fas fa-angle-left"></i>
        </div>
      </Link>
      <Link className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-shopping-bag"></i>
            <p>Báo cáo</p>
          </div>
          <i class="fas fa-angle-left"></i>
        </div>
      </Link>
      <Link className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fab fa-wpforms"></i>
            <p>Thiết lập chung</p>
          </div>
          <i class="fas fa-angle-left"></i>
        </div>
      </Link>
      <Link className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-bell"></i>
            <p>Thông báo</p>
          </div>
          <i class="fas fa-angle-left"></i>
        </div>
      </Link>
      <Link className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-tablet-alt"></i>
            <p>Nâng cấp tài khoản</p>
          </div>
          <i class="fas fa-angle-left"></i>
        </div>
      </Link>
    </div>
  );
};

export default FuntionBar;
