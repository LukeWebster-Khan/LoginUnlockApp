import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import "../styles/NoteApp.css";

const notesApp = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <>
      <h1>Note Taker</h1>
      <div className="note__container">
        {notes.map((note) => (
          <Note
            key={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </>
  );
};
export default notesApp;
