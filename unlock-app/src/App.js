import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/about":
      Component = About;
      break;
    case "/contact":
      break;
  }
  return (
    <div className="App">
      <Nav />
      <Component />
    </div>
  );
}

export default App;
