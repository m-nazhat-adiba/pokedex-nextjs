import Button from "@/components/button/Base";
import PokemonCard from "@/components/cards/PokemonCard";
import Layout from "@/components/layout";
import useAxios from "@/hooks/useAxios";
import Image from "next/image";
import React from "react";

function Home() {
  const { data, loading, error } = useAxios(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <Layout>
        <div className="container mx-auto my-10 flex flex-col gap-28 py-10">
          {/* Header */}
          <header className="flex justify-between">
            <div className="flex flex-col gap-12 w-[40%] justify-center">
              <h1 className="text-6xl font-semibold">
                Find all your favorite Pokemon
              </h1>
              <h2 className="text-2xl">
                Learn all the types of Pokemon, their strengths, weaknesses and
                abilities
              </h2>
              <Button type="btn">See Pokemon</Button>
            </div>
            <Image src="/header-bg.png" width={792} height={680} alt="bg" />
          </header>
          {/* End of Header */}

          {/* Search field */}
          <form className="flex flex-col gap-6">
            <h3 className="text-5xl text-center">
              Thousands Pokemons for you to know about
            </h3>
            <label className="hidden">Search</label>
            <input
              placeholder="Search Pokemon"
              className="w-full py-2 px-4 rounded-full shadow-md"
            />
          </form>
          {/* End of Search Field */}

          {/* Content */}
          <div className="grid grid-cols-5 gap-10 px-5">
            {data.results.map((item, key) => (
              <PokemonCard dataApi={item} key={key} className="mx-auto" />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
