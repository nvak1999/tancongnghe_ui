import React from "react";
import { Link } from "react-router-dom";
const HeaderProfile = () => {
  return (
    <div className="header-profile">
      <div className="Profile-left">
        <Link className="link-profile">
          <i class="fas fa-angle-left" id="icon-i"></i>
        </Link>
        <Link className="link-profile">
          <i class="fas fa-search"></i>
        </Link>
      </div>
      <div className="Profile-right">
        <Link className="link-profile">
          <i class="fas fa-shopping-cart">
            <p id="icon1">5</p>
          </i>
        </Link>
        <Link className="link-profile">
          <i class="fas fa-envelope">
            <p id="icon2">4</p>
          </i>
        </Link>
        <Link className="link-profile">
          <i class="fas fa-bell">
            <p id="icon3">7</p>
          </i>
        </Link>
        <Link className="link-profile">
          <i class="fas fa-file-alt">
            <p id="icon4">6</p>
          </i>
        </Link>
        <Link className="link-profile">
          <i class="fas fa-cog"></i>
        </Link>
        <Link className="link-profile">
          <img src="/picture/avatar.jpg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderProfile;
