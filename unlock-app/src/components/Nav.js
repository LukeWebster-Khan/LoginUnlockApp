import React from "react";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <div>
          <h1>UnlockApp</h1>
        </div>
        <div className="nav__item-container">
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/NotesApp">NotesApp</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}
