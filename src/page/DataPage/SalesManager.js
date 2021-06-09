import React from "react";
import Functionbar from "../../component/FuntionBar";
import { Link } from "react-router-dom";
const SalesManager = () => {
  return (
    <div className="workpage">
      <Functionbar />
      <Link className="link-profile">
        <img src="/picture/manager.jpg" alt="" />{" "}
      </Link>
    </div>
  );
};

export default SalesManager;
