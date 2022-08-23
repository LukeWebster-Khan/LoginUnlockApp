import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Note({ id, text, date }) {
  return (
    <>
      <div className="note__wrapper">
        <div className="note__top">
          <p>{text}</p>
        </div>
        <div className="note__footer">
          <small>{date}</small>
          <MdDeleteForever size={30} />
        </div>
      </div>
    </>
  );
}
