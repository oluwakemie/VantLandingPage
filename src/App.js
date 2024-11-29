import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Business from "./components/Business";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Business />
      <Footer/>
    </div>
  );
};

export default App;
