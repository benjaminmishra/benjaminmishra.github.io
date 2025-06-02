import React from "react";
import logo from "../public/favicon.svg";

export default function Logo() {
  const handleOnClick = () => {
    window.location.href = "/";
  };

  return (
    <button onClick={handleOnClick}>
      <img src="/favicon.svg" alt="Logo" />
    </button>
  );
}