import React from "react";

function Logo() {
  const handleOnClick = () => {
    window.location.href = "/";
  };

  return (
    <button onClick={handleOnClick} className="transition-transform hover:scale-125 duration-300">
      <img src="/favicon.svg" alt="Logo" className="w-11 h-11 dark:filter dark:brightness-200" />
    </button>
  );
}

export default Logo;