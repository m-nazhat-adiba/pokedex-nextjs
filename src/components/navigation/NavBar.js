import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full py-4 container mx-auto">
      <Image src="/logo.png" width={120} height={60} alt="pokemon-logo" />
      <ul className="flex gap-4 text-lg font-bold">
        <li className="self-center">Home</li>
        <li className="self-center">About</li>
      </ul>
    </nav>
  );
};

export default NavBar;
