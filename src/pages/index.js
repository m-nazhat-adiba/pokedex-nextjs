import Button from "@/components/button/Base";
import Layout from "@/components/layout";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div>
      <Layout>
        <div className="container mx-auto my-10">
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
        </div>
      </Layout>
    </div>
  );
}

export default Home;
