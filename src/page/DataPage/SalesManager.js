import React from "react";
import Functionbar from "../../component/FuntionBar";
import { Link } from "react-router-dom";
import HeaderProfile from "../../component/HeaderProfile";
const SalesManager = () => {
  return (
    <div className="workpage">
      <Functionbar />
      <Link className="link-profile">
        <HeaderProfile></HeaderProfile>
        <img src="/picture/manager.png" alt="" />{" "}
      </Link>
    </div>
  );
};

export default SalesManager;
