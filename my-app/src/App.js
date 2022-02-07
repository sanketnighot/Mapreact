import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import { Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/map" element={<Map/>} />
        <Route exact path="/" element={<Navbar/>} />
      </Routes>
    </>
  );
};

export default App;
