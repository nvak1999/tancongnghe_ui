import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header_page">
      <img src="/picture/WEB12.png" alt="" />
      <div className="header_left">
        <Link className="link-header">Trang chủ</Link>
        <Link to="/homepage" className="link-header">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default Header;
