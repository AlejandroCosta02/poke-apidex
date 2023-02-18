import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import CardPokemon from "./components/CardPokemon";
function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState({});
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImg, setPokemonImg] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const getPokeId = (e) => {
    e.preventDefault();
    axios.get(url + input).then((response) => {
      setShowResult(response.data);
      setPokemonName(response.data.forms[0].name);
      setPokemonImg(
        response.data.sprites.other["official-artwork"].front_default
      );
      setShowResult("");
    });
  };

  return (
    <div className="container mx-auto h-screen bg-black">
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-center sm:space-x-8 sm:py-40">
        <div className="h-96 bg-black flex flex-col justify-center text-center">
          <h1 className="text-5xl text-yellow-500">PokeApi</h1>
          <h2 className="text-lg text-white">Find your pokemon by ID</h2>
          <form className="space-x-2">
            <input className="flex-1 p-4 pl-10 text-xl font-bold text-white border border-gray-300 rounded-lg bg-gray-500" onChange={handleChange} placeholder="poke" />
            <button className="text-white font-bold bg-blue-500 rounded-lg px-4 py-2" onClick={getPokeId}>
              check
            </button>
          </form>
        </div>
        <div className="bg-black object-center" >
          <CardPokemon pokeName={pokemonName} pokeImg={pokemonImg} />
        </div>
      </div>
    </div>
  );
}

export default App;
