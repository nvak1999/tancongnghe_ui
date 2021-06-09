import React from "react";
import { Link } from "react-router-dom";
const State1 = () => {
  return (
    <div className="register-state">
      <div className="header_login">
        <img src="/picture/WEB12.png" alt="" />
      </div>
      <div class="box-register">
        <div className="state-name">
          <p>Tài khoản</p>
          <p>Thông tin</p>
          <p>Công ty</p>
        </div>
        <div className="state-box">
          <div className="state-box1">
            <h3 id="green1">1</h3>
          </div>
          <hr />
          <div className="state-box1">
            <h3>2</h3>
          </div>
          <hr />
          <div className="state-box1">
            <h3>3</h3>
          </div>
        </div>
        <h1>TÀI KHOẢN</h1>
        <div className="input-container">
          <input type="mail" required="" id="input1" />
          <label id="label1">
            <i class="fas fa-envelope"></i>Email
          </label>
        </div>
        <div className="input-container">
          <input type="text" required="" id="input1" />
          <label id="label1">
            <i class="fas fa-user"></i>Họ & Tên
          </label>
        </div>
        <div className="input-container">
          <input type="password" required="" id="input1" />
          <label id="label1">
            <i class="fas fa-key"></i>Mật khẩu
          </label>
        </div>
        {/* ------ */}
        <div className="phone-number">
          <label class="select" for="slct" id="label3">
            <select id="slct" required="required">
              <option value="" disabled="disabled" selected="selected">
                Chọn vùng
              </option>
              <option value="#">Canada &#160;&#160;&#160; +1</option>
              <option value="#">Mỹ &#160;&#160;&#160; +1</option>
              <option value="#">Nga &#160;&#160;&#160;+7</option>
              <option value="#">Ai Cập&#160;&#160;&#160; +1</option>
              <option value="#">Đức&#160;&#160;&#160; +49</option>
              <option value="#">Anh&#160;&#160;&#160; +44</option>
              <option value="#">Nhật Bản&#160;&#160;&#160; +81</option>
              <option value="#">Hàn Quốc&#160;&#160;&#160; +82</option>
              <option value="#">Trung Quốc&#160; +86</option>
              <option value="#">Việt Nam&#160;&#160;&#160; +84</option>
            </select>
          </label>
          <div className="input-container" id="phone">
            <input
              type="text"
              required=""
              id="input1"
              placeholder="Số điện thoại"
            />
          </div>
        </div>

        {/* ------ */}
        <div className="checkbox-container">
          <input type="checkbox" required="" id="checkbox1" />
          <label id="checkbox2">
            Nhận tin tức và mẹo bán hàng thường xuyên từ SalesHelp
          </label>
        </div>
        <Link to="/register/state2">
          <button type="button" className="btn" id="button1">
            Bước tiếp theo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default State1;
