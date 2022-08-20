import React from "react";
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
              <a href="/">Home</a>
            </li>
            <CustomLink href="/about">About</CustomLink>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
