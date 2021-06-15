import React from "react";
import Functionbar from "../../component/FuntionBar";
import { Link } from "react-router-dom";
import HeaderProfile from "../../component/HeaderProfile";
const Referral = () => {
  return (
    <div className="workpage">
      <Functionbar />
      <Link to="/profile" className="link-profile">
        <HeaderProfile></HeaderProfile>
        <img src="/picture/Referral.png" alt="" />
      </Link>
    </div>
  );
};

export default Referral;
