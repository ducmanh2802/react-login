import React from "react";

export default function TopHeader({ signIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container px-5">
        <a className="navbar-brand" href="#page-top">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login" onClick={signIn}>
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
