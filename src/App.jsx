import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gradient from "./utilities/Gradient";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Gradient />
      </div>
    </>
  );
}

export default App;
