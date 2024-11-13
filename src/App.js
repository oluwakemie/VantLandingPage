import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Platforms from "./components/Platforms";
const App = () => {
  return (
    <div>
      <Navbar /> 
      <Hero />
      <Partners/>
      <Platforms/>
    </div>
  );
};

export default App;
