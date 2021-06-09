import React from "react";
import { Link } from "react-router-dom";
const Loginpage = () => {
  return (
    <div className="login_page">
      <div className="header_login">
        <img src="/picture/WEB12.png" alt="" />
        <div className="register">
          <p>Bạn chưa có tài khoản?</p>
          <Link to="/register/state1" className="register_link">
            Đăng kí
          </Link>
        </div>
      </div>
      <div className="box">
        <form>
          <span className="text-center">login</span>
          <div className="input-container">
            <input type="mail" required="" />
            <label>Email</label>
          </div>
          <div className="input-container">
            <input type="password" required="" />
            <label>Mật khẩu</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" required="" />
            <label>Nhớ Mật khẩu</label>
          </div>
          <button type="button" className="btn">
            Đăng nhập
          </button>
        </form>
      </div>
      <div className="space"></div>
      <div className="fooder-login">
        <div className="fooder-left">
          <h1>Dự án Tân Công Nghệ</h1>
          <div className="fooder-box">
            <i className="fas fa-phone"></i>
            <p>0939 877 024</p>
          </div>
          <div className="fooder-box">
            {" "}
            <i className="fas fa-envelope"></i>
            <p>saleshelp.vn@gmail.com</p>
          </div>
          <div className="fooder-box">
            {" "}
            <i className="fas fa-link"></i>
            <p>saleshelp.vn</p>
          </div>
        </div>

        <div className="fooder-right">
          <img src="/picture/WEB12.png" alt="" />
          <p>Copyright © 2021 Saleshelp. All Rights Reserved</p>
          <div className="fooder-box2">
            <p>Policy</p>
            <span>|</span> <p>Privacy</p>
            <span>|</span>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
