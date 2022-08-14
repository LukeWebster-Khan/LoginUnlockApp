import React from "react";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <div>Navicon</div>
        <div>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
