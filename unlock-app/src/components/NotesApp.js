import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import "../styles/NoteApp.css";

const notesApp = ({ notes, handleAddNote }) => {
  const [count, setCount] = React.useState(0);
  let increment = () => setCount(count + 1);
  return (
    <>
      <h1>Note Taker</h1>
      <div className="note__container">
        {notes.map((note) => (
          <Note id={note.id} text={note.text} date={note.date} />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </>
  );
};
export default notesApp;
