import React from "react";
import Functionbar from "../../component/FuntionBar";
import { Link } from "react-router-dom";
import HeaderProfile from "../../component/HeaderProfile";
const Dashboard = () => {
  return (
    <div className="workpage">
      <Functionbar />
      <div className="content-tag">
        <HeaderProfile />
        <img src="/picture/dashboard.jpg" alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
