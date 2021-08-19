import React from "react";

import "./styles/global.scss";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;
