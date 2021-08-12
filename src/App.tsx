import React from "react";

import "./styles/global.scss";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;
