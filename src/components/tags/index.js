import React from "react";

const VARIANTS = {
  bug: ["Bug", "bg-[#A8B820]"],
  normal: ["Normal", "bg-[#A8A878]"],
  fire: ["Fire", "bg-[#F08030]"],
  water: ["Water", "bg-blue-500"],
  grass: ["Grass", "bg-green-400"],
  electric: ["Electric", "bg-[#F8D030]"],
  ice: ["Ice", "bg-[#98D8D8]"],
  fighting: ["Fighting", "bg-[#C03028]"],
  poison: ["Poison", "ng-[#A040A0]"],
  ground: ["Grounf", "bg-[#E0C068]"],
  flying: ["Flying", "bg-[#A890F0]"],
  psychic: ["Psychic", "bg-[#F85888]"],
  rock: ["Rock", "bg-[#B8A038]"],
  ghost: ["Ghost", "bg-[#705898]"],
  dark: ["Dark", "bg-[#705848]"],
  dragon: ["Dragon", "bg-[#7038F8]"],
  steel: ["Steel", "bg-[#B8B8D0]"],
  fairy: ["Fairy", "bg-[#F0B6BC]"],
};

const PokemonTag = ({ type }) => {
  const data = VARIANTS[type];
  return (
    <div className="w-16 h-5 left-0">
      <div
        className={`w-[59.79px] h-[16.94px] left-0 top-0 ${data[1]} rounded-[11px] shadow-inner text-center text-white text-xs font-normal`}
      >
        {`${data[0]}`}
      </div>
    </div>
  );
};

export default PokemonTag;
