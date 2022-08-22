import React from "react";

export default function About() {
  const [count, setCount] = React.useState(0);
  let increment = () => setCount(count + 1);
  return (
    <>
      <h1>NotesApp</h1>
      <p>This is the NotesApp component</p>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <p>You clicked {count} times</p>
    </>
  );
}
