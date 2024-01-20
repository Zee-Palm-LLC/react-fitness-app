import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";
import Offer from "./Components/Offer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}

export default App;
