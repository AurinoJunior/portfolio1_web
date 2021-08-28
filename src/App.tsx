import React from "react";

import "./styles/global.scss";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Career } from "./components/Career";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Career />
      <Footer />
    </>
  );
}

export default App;
