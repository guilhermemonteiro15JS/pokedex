import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/main" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
