import React from "react";
import Functionbar from "../../component/FuntionBar";
import { Link } from "react-router-dom";
import HeaderProfile from "../../component/HeaderProfile";
const Technology = () => {
  return (
    <div className="workpage">
      <Functionbar />
      <Link to="/profile" className="link-profile">
        <HeaderProfile></HeaderProfile>
        <img src="/picture/technology.png" alt="" />{" "}
      </Link>
    </div>
  );
};

export default Technology;
