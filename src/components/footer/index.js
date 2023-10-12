import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 xl:gap-32 container mx-auto">
        <div className="flex flex-col md:w-[35%]">
          <h1 className="font-bold text-xl">MyPokedex</h1>
          <p className="py-6">
            Explore the Pokémon universe with our Pokédex website. Dive into
            vivid descriptions, captivating illustrations, and fascinating facts
            about each species. Your ultimate guide to the world of Pokémon
            awaits. Catch 'em all here!
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold text-lg pb-5 text-center md:text-start">
            Join our community
          </p>
          <div className="flex gap-6 text-6xl text-red-600">
            <Icon icon="basil:instagram-solid" />
            <Icon icon="basil:facebook-solid" />
            <Icon icon="basil:twitter-solid" />
            <Icon icon="akar-icons:discord-fill" />
          </div>
        </div>
      </div>
      <div className="flex bg-gray-900 py-2">
        <ul className="flex gap-4 container mx-auto text-sm text-white">
          <li>
            <a>What is Pokemon?</a>
          </li>
          <li>
            <a>Term of Service</a>
          </li>
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
