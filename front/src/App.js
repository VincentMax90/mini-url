import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Index from "./view/Index"
import MiniUrl from "./view/MiniUrl";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/:id" element={<MiniUrl />}></Route>

      </Routes>
    </>
  );
}

export default App;
