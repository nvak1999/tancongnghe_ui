import React from "react";
import { Link } from "react-router-dom";
const State3 = () => {
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
            <h3 id="green1">
              <i class="fas fa-check"></i>
            </h3>
          </div>
          <hr />
          <div className="state-box1">
            <h3>3</h3>
          </div>
        </div>
        <h1>GIỚI THIỆU VỀ CÔNG TY</h1>
        <div className="input-container">
          <input type="text" required="" id="input1" />
          <label id="label1">
            <i class="far fa-building"></i>Tên công ty
          </label>
        </div>
        <div>
          <label id="label1">
            <i class="fas fa-user-tag"></i>Số năm hoạt động
          </label>
        </div>
        <div id="label2">
          <label class="select" for="slct2">
            <select id="slct2" required="required">
              <option value="" disabled="disabled" selected="selected">
                Năm
              </option>
              <option value="#">1-2</option>
              <option value="#">2-5</option>
              <option value="#">5-10 </option>
              <option value="#">10-20 </option>
              <option value="#">20-50 </option>
              <option value="#">+50 </option>
              <option value="#">Mới hoạt động </option>
            </select>
          </label>
        </div>
        <div id="role2">
          <label id="label1">
            <i class="fas fa-tools"></i>lĩnh vực của công ty của bạn
          </label>
        </div>
        <div id="label2">
          <label class="select" for="slct2">
            <select id="slct2" required="required">
              <option value="" disabled="disabled" selected="selected">
                Lĩnh vực
              </option>
              <option value="#">Phần mềm phát triển ứng dụng</option>
              <option value="#">Sức khoẻ</option>
              <option value="#">Giáo dục và đào tạo</option>
              <option value="#">Địa ốc</option>
              <option value="#">Công ty quảng cáo</option>
              <option value="#">Dịch vụ tài chính hoặc tính dụng</option>
              <option value="#">
                Tin tức phương tiện truyền thông ấn phẩm
              </option>
              <option value="#">Chế tạo</option>
              <option value="#">Dịch vụ IT</option>
              <option value="#">Tư vấn</option>
              <option value="#">Xây dựng</option>
              <option value="#">Thương mại</option>
              <option value="#">Khác</option>
            </select>
          </label>
        </div>
        <Link to="/register/state3">
          <button type="button" className="btn" id="button2">
            Bắt đầu sử dụng Saleshelp
          </button>
        </Link>
      </div>
    </div>
  );
};

export default State3;
