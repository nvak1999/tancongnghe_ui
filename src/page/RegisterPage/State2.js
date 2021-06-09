import React from "react";
import { Link } from "react-router-dom";
const State2 = () => {
  return (
    <div className="register-state">
      <div className="header_login">
        <img src="/picture/WEB12.png" alt="" />
      </div>
      <div class="box-register">
        <div className="mother-box">
          <div id="state-box1">
            {" "}
            <div className="state-name">
              <p>Tài khoản</p>
              <p>Thông tin</p>
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
            </div>
          </div>
        </div>

        <h1>THÔNG TIN</h1>
        <div>
          <label id="label1">
            <i class="fas fa-user-tag"></i> Vị trí công việc
          </label>
        </div>
        <div id="label2">
          <label class="select" for="slct2">
            <select id="slct2" required="required">
              <option value="" disabled="disabled" selected="selected">
                Chuyên viên kinh doanh
              </option>
              <option value="#">Chuyên viên kinh doanh</option>
              <option value="#">Trưởng nhóm kinh doanh</option>
              <option value="#">Quản lí vùng</option>
              <option value="#">Trưởng phong kinh doanh </option>
              <option value="#">Giám đốc kinh doanh </option>
              <option value="#">Sales admin </option>
              <option value="#">Khác </option>
            </select>
          </label>
        </div>
        <div id="role2">
          <label id="label1">
            <i class="fas fa-briefcase"></i>Lĩnh vực bán hàng
          </label>
        </div>
        <div id="label2">
          <label class="select" for="slct2">
            <select id="slct2" required="required">
              <option value="" disabled="disabled" selected="selected">
                Chọn lĩnh vực
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
        <div id="role2">
          <label id="label1">
            <i class="fas fa-user-tie"></i>Đối tượng khách hàng
          </label>
        </div>
        <div id="label2">
          <label class="select" for="slct2">
            <select id="slct2" required="required">
              <option value="" disabled="disabled" selected="selected">
                Chọn đối tượng
              </option>
              <option value="#">Cá nhân</option>
              <option value="#">Doanh nghiệp</option>
              <option value="#">Nhà nước</option>
              <option value="#">Khác</option>
            </select>
          </label>
        </div>
        <Link to="/login">
          <button type="button" className="btn" id="button2">
            Sử dụng Saleshelp.vn
          </button>
        </Link>
      </div>
    </div>
  );
};

export default State2;
