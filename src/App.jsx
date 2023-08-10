import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Features from './components/Features';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Features/>
      </div>
    </>
  );
}

export default App;
