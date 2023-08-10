import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Features from './components/Features';
import Hero from "./components/Hero";
import Gradient from "./utilities/Gradient";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Features/>
        <WhyUs/>
        <Gradient />
      </div>
    </>
  );
}

export default App;
