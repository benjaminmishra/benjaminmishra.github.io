import React from "react";

function Logo() {
  const handleOnClick = () => {
    window.location.href = "/";
  };

  return (
    <button onClick={handleOnClick}>
      <img src="/favicon.svg" alt="Logo" />
    </button>
  );
}

export default Logo;