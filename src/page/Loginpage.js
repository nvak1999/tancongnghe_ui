import React from "react";
import { Link } from "react-router-dom";
const Loginpage = () => {
  return (
    <div class="login_page">
      <div className="header_login">
        <img src="/picture/WEB12.png" alt="" />
        <div className="register">
          <p>Bạn chưa có tài khoản?</p>
          <Link to="/register" className="register_link">
            Đăng kí
          </Link>
        </div>
      </div>
      <div class="box">
        <form>
          <span class="text-center">login</span>
          <div class="input-container">
            <input type="mail" required="" />
            <label>Email</label>
          </div>
          <div class="input-container">
            <input type="password" required="" />
            <label>Mật khẩu</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" required="" />
            <label>Nhớ Mật khẩu</label>
          </div>
          <button type="button" class="btn">
            Đăng nhập
          </button>
        </form>
      </div>
      <div className="space"></div>
      <div className="fooder-login">
        <div className="fooder-left">
          <h1>Dự án Tân Công Nghệ</h1>
          <div className="fooder-box">
            <i class="fas fa-phone"></i>
            <p>0939 877 024</p>
          </div>
          <div className="fooder-box">
            {" "}
            <i class="fas fa-envelope"></i>
            <p>saleshelp.vn@gmail.com</p>
          </div>
          <div className="fooder-box">
            {" "}
            <i class="fas fa-link"></i>
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
