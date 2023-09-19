import React from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ShowCases from "./pages/ShowCases";
import AddNewCase from "./pages/AddNewCase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cases" element={<ShowCases />} />
          <Route path="/addnewcase" element={<AddNewCase />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
