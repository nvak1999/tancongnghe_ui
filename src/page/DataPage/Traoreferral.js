import React from "react";
import Functionbar from "../../component/FuntionBar";
import { Link } from "react-router-dom";
import HeaderProfile from "../../component/HeaderProfile";
const Traoreferral = () => {
  return (
    <div className="workpage">
      <Functionbar />
      <Link to="/profile" className="link-profile">
        <HeaderProfile></HeaderProfile>
        <img src="/picture/TraoReferral.png" alt="" />
      </Link>
    </div>
  );
};

export default Traoreferral;
