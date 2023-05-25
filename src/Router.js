import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginJia from "./pages/jia/LoginJia/LoginJia";
import MainJia from "./pages/jia/MainJia/MainJia";
import LoginJunyoung from "./pages/junyoung/LoginJunyoung/LoginJunyoung";
import MainJunyoung from "./pages/junyoung/MainJunyoung/MainJunyoung";
import LoginKeonrok from "./pages/keonrok/LoginKeonrok/LoginKeonrok";
import MainKeonrok from "./pages/keonrok/MainKeonrok/MainKeonrok";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-jia" element={<LoginJia />} />
        <Route path="/main-jia" element={<MainJia />} />
        <Route path="/login-junyoung" element={<LoginJunyoung />} />
        <Route path="/" element={<MainJunyoung />} />
        <Route path="/login-keonrok" element={<LoginKeonrok />} />
        <Route path="/main-keonrok" element={<MainKeonrok />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
