import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>     
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/*" element={<ErrorPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router 