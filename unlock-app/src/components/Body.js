import React from "react";
import "../styles/Body.css";

export default function Body() {
  return (
    <>
      <div className="header">
        <h1>Luke Webster-Khan</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="desc">
        <p>
          I am a fullstack software enginner working with PHP, JavaScript,
          React, Node etc.
        </p>
        <ul class="link-list">
          <li>
            <a href="https://www.linkedin.com/in/luke-webster-khan-624829213/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/LukeWebster-Khan">Github</a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/lukewebsterkhan">
              FreeCodeCamp
            </a>
          </li>
          <li>
            <a href="https://www.theodinproject.com/users/sign_in">
              The Odin Project
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
