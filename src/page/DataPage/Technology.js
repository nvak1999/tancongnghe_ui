import React from "react";
import Functionbar from "../../component/FuntionBar";
import { Link } from "react-router-dom";
const Technology = () => {
  return (
    <div className="workpage">
      <Functionbar />
      <Link to="/profile" className="link-profile">
        <img src="/picture/technology.jpg" alt="" />{" "}
      </Link>
    </div>
  );
};

export default Technology;
