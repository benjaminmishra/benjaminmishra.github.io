import React from "react";

export default function Logo() {
  const handleOnClick = () => {
    window.location.href = "/";
  };

  return (
    <button>
      <svg width="100" height="30" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg"
        onClick={handleOnClick}
      >
        <style>
          {`
          .comment {
            font-family: 'Courier New', monospace;
            font-size: 16px;
            fill: #888; /* Grey color for comments */
          }
          .initials {
            font-family: 'Courier New', monospace;
            font-size: 20px;
            fill: #888;
          }
          `}
        </style>
        <text x="25" y="20" className="initials">[BM]</text>
      </svg>
    </button>
  );
}