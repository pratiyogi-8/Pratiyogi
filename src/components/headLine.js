import React from "react";
import "../css/home.css";
function HeadLine() {
  return (
    <div className="heading-link">
      <marquee behavior="scroll" direction="left" scrollamount="3">
        <a href="#">● Upcoming UPSC 2024 Results</a>
        <a href="#">● Admit Card SSC 2024</a>
        <a href="#">● JEE Admit Card 2024</a>
      </marquee>
    </div>
  );
}

export default HeadLine;
