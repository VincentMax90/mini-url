import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Index from "./view/Index"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </>
  );
}

export default App;
