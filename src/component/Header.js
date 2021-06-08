import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header_page">
      <img src="/picture/WEB12.png" alt="" />
      <div className="header_left">
        <Link className="link-header">Home Page</Link>
        <Link className="link-header">About SalesHelp.vn</Link>
        <Link className="link-header">publication</Link>
        <Link className="link-header">Activity</Link>
        <Link className="link-header">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
