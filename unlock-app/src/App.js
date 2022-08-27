import React, { useState } from "react";
import { nanoid } from "nanoid";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import NotesApp from "./components/NotesApp";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (text) => {
    setNotes([
      ...notes,
      {
        id: nanoid(),
        text,
        date: new Date().toLocaleDateString(),
        key: nanoid(),
      },
    ]);
    console.log(text);
  };
  const deleteNotes = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  function changeTheme() {
    console.log("mode is ", mode);
    setMode((mode) => !mode);
  }
  const [mode, setMode] = useState(true);

  return (
    <div className={mode ? "App light" : "App dark"}>
      <Nav />
      <button className="theme-button" onClick={changeTheme}>
        Mode
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/NotesApp"
            element={
              <NotesApp
                handleAddNote={addNote}
                handleDeleteNote={deleteNotes}
                notes={notes}
              />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
