import React from "react";
import Note from "./Note";
import "../styles/NoteApp.css";

export default function About({ notes }) {
  const [count, setCount] = React.useState(0);
  let increment = () => setCount(count + 1);
  return (
    <>
      <h1>Note Taker</h1>
      <div className="note__container">
        {notes.map((note) => (
          <Note id={note.id} text={note.text} date={note.date} />
        ))}
      </div>
    </>
  );
}
