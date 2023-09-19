import React from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminLogin from "./pages/AdminLogin";
import JudgeLogin from "./pages/JudgeLogin";
import ShowCases from "./pages/ShowCases";
import AddNewCase from "./pages/AddNewCase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/judgelogin" element={<JudgeLogin />} />
          <Route path="/cases" element={<ShowCases />} />
          <Route path="/addnewcase" element={<AddNewCase />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
