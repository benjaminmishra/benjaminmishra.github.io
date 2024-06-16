import React from "react";

export default function Logo() {

  const handleOnClick = () => {
    window.location.href = "/";
  };

  return (
    <button>
      <span className="sr-only">Benjamin Logo</span>
      <img
        alt="logo"
        className="h-8 w-auto sm:h-10"
        onClick={handleOnClick}
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      />
    </button>
  );
}
