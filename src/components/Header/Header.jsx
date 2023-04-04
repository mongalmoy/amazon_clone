import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <header>
        <div className="header_navbelt">
          <div className="navbelt_left flexbox">
            <div className="logo_container">
              <a href="" className="flexbox">
                <span>
                  <img src={require("../../assets/img/logo1.png")} alt="" />
                </span>
                <span className="logo_dotin">.in</span>
              </a>
            </div>
            <div className="address_picker">
              <a href="#">
                <div className="address_logo"></div>
                <div className="address_text">
                  <span>Hello</span>
                  <span>Select your address</span>
                </div>
              </a>
            </div>
          </div>
          <div className="navbelt_middle"></div>
          <div className="navbelt_right"></div>
        </div>
        <div className="header_nav_buttons"></div>
      </header>
    </div>
  );
};

export default Header;
