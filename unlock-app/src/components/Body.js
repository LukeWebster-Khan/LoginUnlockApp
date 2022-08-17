import React, { useState, useEffect } from "react";
import "../styles/Body.css";

export default function Body() {
  const [data, setData] = useState({});
  useEffect(
    function() {
      fetch("https://api.github.com/users/LukeWebster-Khan")
        .then((res) => res.json())
        .then((data) => setData(data));
    },
    [1]
  );
  return (
    <>
      <div className="body-container">
        <div className="body-container__img-wrapper">
          <img
            src="https://avatars.githubusercontent.com/u/85649986?v=4"
            alt="profile"
          ></img>
        </div>
        <div className="body-text">
          <div className="header">
            <h1>Luke Webster-Khan</h1>
            <h2>Software Engineer</h2>
          </div>
          <div className="desc">
            <p>
              I am a fullstack software enginner working with PHP, JavaScript,
              React, Node etc.
            </p>
            <ul className="link-list">
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
        </div>
      </div>
    </>
  );
}
