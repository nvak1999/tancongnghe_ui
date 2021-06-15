import React from "react";
import Functionbar from "../../component/FuntionBar";
import { Link } from "react-router-dom";
import HeaderProfile from "../../component/HeaderProfile";
const Nhantuvan = () => {
  return (
    <div className="workpage">
      <Functionbar />
      <Link to="/profile" className="link-profile">
        <HeaderProfile />
        <img src="/picture/nhan.png" alt="" />
      </Link>
    </div>
  );
};

export default Nhantuvan;
