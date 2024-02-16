import React, { Component } from "react";
import "../css/nav.css"
function Nav() {
  return (
  <header className="header">
    <a
      style={{ "margin-left": "27px", cursor: "pointer" }}
      href="../HTML/home.html"
      className="logo"
    >
      <img
        src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
        alt=""
      />
    </a>
    <nav>
      <ul className="menu-items">
        <li>
          <a href="../HTML/newbatches.html" className="menu-item-1">
            HOME
          </a>
        </li>
        <li>
          <a href="../HTML/Women.html" className="menu-item-2">
            NEW BATCHES
          </a>
        </li>
        <li>
          <a href="../HTML/Kids.html" className="menu-item-3">
            ADMIT CARD/EXAMS
          </a>
        </li>
        <li>
          <a href="../HTML/Home&Living.html" className="menu-item-4">
            INSTITUTES
          </a>
        </li>
        <li>
          <a href="#" className="menu-item-5">
            RESULTS
          </a>
        </li>
        <li>
          <a href="#" className="menu-item-5">
            ABOUT
          </a>
        </li>
      </ul>
    </nav>
    <div className="search-div">
      <img
        id="searchpng"
        src="https://image.flaticon.com/icons/png/128/49/49116.png"
        alt=""
      />

      <input type="text" placeholder="Search for Institute, Results and more" />
    </div>

    <div className="dropbtn">
      <button>Login</button>
    </div>
  </header>
);
}
export default Nav;
