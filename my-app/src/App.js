import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
const App = (props) => {
  console.log(props)
  return (
    <>
      <Routes>
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/" element={<Navbar />} />
      </Routes>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    myname: state.name,
  };
};

export default connect(mapStateToProps)(App);
