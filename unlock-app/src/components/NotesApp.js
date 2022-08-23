import React from "react";
import Note from "./Note";
import "../styles/NoteApp.css";

export default function About() {
  const [count, setCount] = React.useState(0);
  let increment = () => setCount(count + 1);
  return (
    <>
      <h1>Note Taker</h1>
      <div className="note__container">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </>
  );
}
