import React from "react";
import "./Navbar.css";
import logo from "./assets/images/white.png";
import lord from "./assets/images/Rectangle 59 (1).png";
import mapimg from "./assets/images/Rectangle 60.png";
import { Routes, Route, NavLink as Link } from "react-router-dom"
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="col-md-3 logo">
          <img src={logo} alt="" />
        </div>
        <div className="col-md-6 no-p">
          <div className="middle">
            <img src={lord} alt="" />
          </div>
        </div>
        <div className="col-md-3 right-map no-p">
          <div className="right">
          <Link to="/map" >
          <img src={mapimg} alt="" />
            </Link>
          
          </div>
        </div>
      </div>
    </>
  );
}
