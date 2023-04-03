import React from "react";
import "./SideNav.css";
import { AiFillHome } from "react-icons/ai";
import {MdOutlineSubscriptions,MdOutlineVideoLibrary,MdHistory} from "react-icons/md";
import { BsTiktok } from 'react-icons/bs';

const SideNav = () => {
  return (
    <div className="sidenav-cont">
      <nav className="side-navbar">
        <div className="sidenav-list flexbox">
          <div>
            <div className="sidenav-list-icon flexbox">
              <AiFillHome />
            </div>
            <p className="sidenav-list-name">Home</p>
          </div>
        </div>
        <div className="sidenav-list flexbox">
          <div>
            <div className="sidenav-list-icon flexbox">
              <BsTiktok />
            </div>
            <p className="sidenav-list-name">Shorts</p>
          </div>
        </div>
        <div className="sidenav-list flexbox">
          <div>
            <div className="sidenav-list-icon flexbox">
              <MdOutlineSubscriptions />
            </div>
            <p className="sidenav-list-name">Subscription</p>
          </div>
        </div>
        <div className="sidenav-list flexbox">
          <div>
            <div className="sidenav-list-icon flexbox">
              <MdOutlineVideoLibrary />
            </div>
            <p className="sidenav-list-name">Library</p>
          </div>
        </div>
        <div className="sidenav-list flexbox">
          <div>
            <div className="sidenav-list-icon flexbox">
              <MdHistory />
            </div>
            <p className="sidenav-list-name">History</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
