import React from "react";

import "./styles/global.scss";

import { Menu } from "./components/Menu";
import { Home } from "./components/Home";
import { About } from "./components/About";
// import { Projects } from "./components/Projects";
import { Career } from "./components/Career";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Menu />
      <Home />
      <About />
      {/* <Projects /> */}
      <Career />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
