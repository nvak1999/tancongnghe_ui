import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const FuntionBar = () => {
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const [count, setCount] = useState("t2");
  const [county, setCounty] = useState("y2");
  const [countu, setCountu] = useState("u2");

  const change = () => {
    setCount2(count2 + 1);
    if (count2 % 2 == 0) setCount("t3");
    else setCount("t2");
  };
  const change2 = () => {
    setCount3(count3 + 1);
    if (count3 % 2 == 0) setCounty("y3");
    else setCounty("y2");
  };
  const change3 = () => {
    setCount4(count4 + 1);
    if (count4 % 2 == 0) setCountu("u3");
    else setCountu("u2");
  };
  return (
    <div className="functionBar">
      <div className="img-bar">
        <img src="/picture/WEB13.png" alt="" />
      </div>
      <Link to="/dashboard" className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-tachometer-alt"></i>
            <p>Dashboard</p>
          </div>
        </div>
      </Link>
      <div className="functionBar-box2">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-users"></i>
            <div className="drop1">
              <Link to="/expert" className="box3">
                <p>Tư vấn bán hàng</p>
              </Link>
              <Link to="/nhan" className="box3">
                <p className={count} id="tt2">
                  Nhận Tư vấn
                </p>
              </Link>
              <Link to="/expert" className="box3">
                <p className={count} id="tt3">
                  Tư vấn
                </p>
              </Link>
            </div>
          </div>
          <Link className="box3">
            <i onClick={() => change()} class="fas fa-angle-left"></i>
          </Link>
        </div>
      </div>

      <Link to="/technology" className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-shopping-basket"></i>
            <p>Đề xuất công nghệ</p>
          </div>
        </div>
      </Link>
      <div className="functionBar-box2">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-users"></i>
            <div className="drop1">
              <Link to="/salesManager" className="box3">
                <p>Quản lí dữ liệu</p>
              </Link>
              <Link to="/canhan" className="box3">
                <p className={county} id="tt2">
                  KH Cá nhân
                </p>
              </Link>
              <Link to="/doanhnghiep" className="box3">
                <p className={county} id="tt3">
                  KH Doanh nghiệp
                </p>
              </Link>
            </div>
          </div>
          <Link className="box3">
            <i onClick={() => change2()} class="fas fa-angle-left"></i>
          </Link>
        </div>
      </div>

      <div className="functionBar-box2">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-book"></i>
            <div className="drop1">
              <Link to="/referral" className="box3">
                <p>Referral</p>
              </Link>
              <Link to="/referral" className="box3">
                <p className={countu} id="tt2">
                  Nhận referral
                </p>
              </Link>
              <Link to="/Trao" className="box3">
                <p className={countu} id="tt3">
                  Trao referral
                </p>
              </Link>
            </div>
          </div>
          <Link className="box3">
            <i onClick={() => change3()} class="fas fa-angle-left"></i>
          </Link>
        </div>
      </div>
      <Link to="/report" className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-shopping-bag"></i>
            <p>Báo cáo</p>
          </div>
        </div>
      </Link>
      <Link to="/profile" className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fab fa-wpforms"></i>
            <p>Hồ sơ cá nhân</p>
          </div>
        </div>
      </Link>
      <Link to="/seting" className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-bell"></i>
            <p>Thiết lập chung</p>
          </div>
        </div>
      </Link>
      <Link to="/profile" className="functionBar-box">
        <div className="box_bar">
          <div className="i_left">
            <i class="fas fa-tablet-alt"></i>
            <p>Nâng cấp tài khoản</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FuntionBar;
