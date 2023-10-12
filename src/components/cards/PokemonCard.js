import React from "react";
import PokemonTag from "../tags";
import useAxios from "@/hooks/useAxios";
import { formatNumber } from "@/utils/formatNumber";

const PokemonCard = ({ dataApi, className }) => {
  const { data, loading, error } = useAxios(`${dataApi.url}`);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className={`w-fit h-fit bg-white shadow-lg rounded-lg ${className}`}>
      <div className="relative w-[230px] h-[230px] bg-gradient-to-l from-red-700 to-red-600 rounded-tl-lg rounded-tr-lg">
        <img src={data.sprites.front_default} className="w-auto h-full" />
        <div className="absolute flex w-11 h-11 rounded-full bg-yellow-400 items-center justify-center -bottom-5 left-4 z-[9999]">
          <p className="text-center text-black text-sm font-normal">
            {formatNumber(data.id)}
          </p>
        </div>
      </div>
      <div className="pl-4 pt-8 pb-2 flex flex-col gap-1">
        <div className="w-[148.66px] h-[29.85px] text-neutral-800 text-lg font-bold">
          {dataApi.name.charAt(0).toUpperCase() + dataApi.name.slice(1)}
        </div>
        <div className="flex flex-row gap-1">
          {data.types.map((item, key) => (
            <PokemonTag type={item.type.name} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
