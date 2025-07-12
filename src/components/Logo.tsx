import React from "react";
function Logo() {
  return (
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      height="40"
      width="40"
    >
      <title>Logo</title>
      <polygon
        points="50,5 95,50 50,95 5,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontSize="30"
        fontFamily="Arial"
      >
        S
      </text>
    </svg>
  );
}

export default Logo;