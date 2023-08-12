import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Gradient from "./utilities/Gradient";
import Description from "./components/Description";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

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
        <Footer />
      </div>
    </>
  );
}

export default App;
