import React, { useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import NotesApp from "./components/NotesApp";
import "./App.css";

function App() {
  function changeTheme() {
    console.log("mode is ", mode);
    setMode((mode) => !mode);
  }
  const [mode, setMode] = useState(true);
  return (
    <div className={mode ? "App light" : "App dark"}>
      <Nav />
      <button onClick={changeTheme}>MODE</button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NotesApp" element={<NotesApp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
