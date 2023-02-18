import React from "react";

function CardPokemon(props) {
  return (
    <div className="">
      <div className="flex flex-col text-center">
        <img
          className="object-contain h-80 sm:h-60"
          src={props.pokeImg}
        />

        <h1 className="text-5xl text-yellow-500">
          {props.pokeName}
        </h1>
      </div>
    </div>
  );
}

export default CardPokemon;
