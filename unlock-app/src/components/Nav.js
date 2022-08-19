import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "../styles/Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <div>
          <h1>UnlockApp</h1>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
