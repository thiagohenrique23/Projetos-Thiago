import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";


const Routers = () => {
  return (
    <BrowserRouter>
      <Header/>     
      <Router>

        <Route path="/" element={<HomePage/>} />
        <Route path="/*" element={<ErrorPage/>} />

      </Router>
    </BrowserRouter>
  )
}

export default Routers 