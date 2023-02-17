import React from "react";

function CardPokemon(props) {
  return (
    <div className="flex justify-center text-center">
      <div className="block p-6 rounded-lg shadow-lg bg-black max-w-sm">
        <img
          className="inline-block mt-24 md:mt-0 p-8 md:p-0"
          src={props.pokeImg}
        />

        <h1 className="flex justify-center content-center text-2xl md:text-6xl p-5 text-white-300">
          {props.pokeName}
        </h1>
      </div>
    </div>
  );
}

export default CardPokemon;
