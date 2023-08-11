import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Gradient from "./utilities/Gradient";
import Description from "./components/Description";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Gradient />
        <Features />
        <Gradient />
        <Description />
        <Gradient />
        <WhyUs />
        {/* <Gradient /> */}
      </div>
    </>
  );
}

export default App;
