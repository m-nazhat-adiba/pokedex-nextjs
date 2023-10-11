import React from "react";
const TYPES = {
  btn: "button",
  sub: "submit",
};

const Button = ({ children, type }) => {
  return (
    <button
      type={`${TYPES[type]}`}
      className="w-[231px] h-[66px] left-0 top-0 bg-green-400 rounded-[11px] shadow-[0px_-6px_0px_0px_rgba(0,0,0,0.18)_inset] text-center text-neutral-800 text-2xl font-bold"
    >
      {children}
    </button>
  );
};

export default Button;
