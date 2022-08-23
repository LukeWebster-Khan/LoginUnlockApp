import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Note() {
  return (
    <>
      <div className="note__wrapper">
        <div className="note__top">
          <p>Hello world, this is the first note on the app</p>
        </div>
        <div className="note__footer">
          <small>23/08/2022</small>
          <MdDeleteForever size={30} />
        </div>
      </div>
    </>
  );
}
