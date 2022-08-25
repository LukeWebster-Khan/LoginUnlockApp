import React, { useState } from "react";
import "../styles/NoteApp.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const updateNoteText = (e) => {
    setNoteText(e.target.value);

    console.log(200 - e.target.value.length);
  };
  const updateRemainingCharacters = () => {};
  const saveNote = () => {
    handleAddNote(noteText);
    setNoteText("");
  };
  return (
    <div className="note__wrapper new">
      <textarea
        onChange={updateNoteText}
        value={noteText}
        rows="8"
        cols="10"
        placeholder="Add a new note"
      >
        {noteText}
      </textarea>
      <div className="note__new-footer">
        <small>{200 - noteText.length} characters remaining</small>
        <button onClick={saveNote} className="save">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNote;
