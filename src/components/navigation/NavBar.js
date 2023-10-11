import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full">
      <Image src="/logo.png" width={152} height={90} alt="pokemon-logo" />
      <ul className="flex gap-2">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default NavBar;
