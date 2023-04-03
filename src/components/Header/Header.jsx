import React from "react";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMicrophone } from "react-icons/hi";
import { BsThreeDotsVertical, BsPersonCircle } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { InputGroup, Form } from "react-bootstrap";

const Header = () => {
  
  return (
    <div className="header">
      <div className="hamburger-and-logo">
        <div className="hamburger-cont flexbox">
          <div className="hamburger-icon-cont flexbox">
            <RxHamburgerMenu className="hamburger-icon" />
          </div>
        </div>
        <div className="logo-cont">
          <div className="logo-icon-cont flexbox">
            <img src={require("../../../src/assets/img/funtube-icon.png")} />
            <p className="logo-text">FunTube</p>
          </div>
        </div>
      </div>

      <div className="search-cont flexbox">
        <div className="search-input-cont">
          <form>
            <InputGroup>
              <Form.Control
                placeholder="Search"
                aria-label="search"
                aria-describedby="funtube-search"
                id="search-input"
              />
              <InputGroup.Text id="search-button" className="flexbox">
                <GoSearch />
              </InputGroup.Text>
            </InputGroup>
          </form>
        </div>
        <div className="voice-input-cont">
          <div className="voice-input flexbox">
            <HiMicrophone className="microphone" />
          </div>
        </div>
      </div>

      <div className="setting-and-signin flexbox">
        <div className="setting-cont flexbox me-3">
          <div className="threedot-cont flexbox">
            <BsThreeDotsVertical className="threedot-icon" />
          </div>
        </div>
        <div className="signin-cont flexbox">
          <div className="oijhuuhui">
          <div className="sigin-icons flexbox">
            <div className="person-icon-cont flexbox">
                <BsPersonCircle className="person-icon" />
            </div>
            <div className="sigin-text flexbox">
                <span>Sign in</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
