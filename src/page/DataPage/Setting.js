import React from "react";
import Functionbar from "../../component/FuntionBar";
import { Link } from "react-router-dom";
const Setting = () => {
  return (
    <div className="workpage">
      <Functionbar />
      <Link to="/profile" className="link-profile">
        <img src="/picture/dashboard.jpg" alt="" />{" "}
      </Link>
    </div>
  );
};

export default Setting;
