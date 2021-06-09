import React from "react";
import { Link } from "react-router-dom";
const State2 = () => {
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
            <h3 id="green1">
              <i class="fas fa-check"></i>
            </h3>
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
        <div>
          <label id="label1">
            <i class="fas fa-user-tag"></i>Vai trò hiện tại của bạn là gì?
          </label>
        </div>
        <div id="label2">
          <label class="select" for="slct2">
            <select id="slct2" required="required">
              <option value="" disabled="disabled" selected="selected">
                Vai trò của bạn
              </option>
              <option value="#">Đại diện bán hàng</option>
              <option value="#">Quản lí kinh doanh</option>
              <option value="#">VP / Giám đốc điều hành </option>
              <option value="#">Quản trị viên </option>
              <option value="#">Tài chính </option>
              <option value="#">Người tiếp thị </option>
              <option value="#">Khác </option>
            </select>
          </label>
        </div>
        <div id="role2">
          <label id="label1">
            <i class="fas fa-tools"></i>Kinh nghiệm của bạn với các công cụ bán
            hàng là gì?
          </label>
        </div>
        <div id="label2">
          <label class="select" for="slct2">
            <select id="slct2" required="required">
              <option value="" disabled="disabled" selected="selected">
                Kinh nghiệm của bạn
              </option>
              <option value="#">
                Tôi chưa sử dụng bất kì công cụ bán hàng nào trước đây
              </option>
              <option value="#">
                Tôi sử dụng bảng tính để theo giỏi dữ liệu bán hàng của mình
              </option>
              <option value="#">Tôi đã sử dụng các công cụ trước đây</option>
            </select>
          </label>
        </div>
        <Link to="/register/state3">
          <button type="button" className="btn" id="button2">
            Bước tiếp theo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default State2;
