import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "../styles/NoteApp.css";

export default function Note({ id, text, date, handleDeleteNote }) {
  return (
    <>
      <div className="note__wrapper">
        <div className="note__top">
          <p>{text}</p>
        </div>
        <div className="note__footer">
          <small>{date}</small>
          {/* create delete function */}
          <div class="note__delete">
            <MdDeleteForever
              size={30}
              onClick={() => {
                handleDeleteNote(id);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
