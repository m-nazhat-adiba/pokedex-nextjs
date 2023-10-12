import React from "react";
const TYPES = {
  btn: "button",
  sub: "submit",
};

const Button = ({ children, type }) => {
  return (
    <button
      type={`${TYPES[type]}`}
      className="w-[231px] h-[66px] left-0 top-0 bg-gradient-to-l from-green-400 to-green-500 rounded-[11px] shadow-lg text-center text-white text-2xl font-bold"
    >
      {children}
    </button>
  );
};

export default Button;
