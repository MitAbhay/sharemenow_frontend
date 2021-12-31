import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";

function App() {
  return (
    <Routes>
      <Route exact path="login" element={<Login />} />
      <Route exact path="/*" element={<Home/>} />
    </Routes>
  );
}

export default App;
