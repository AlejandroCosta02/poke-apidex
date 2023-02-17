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
    <section>
      <div className="bg-black text-white h-screen font-sans">
        <div className="container mx-auto flex flex-col  items-center py-20 ">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              PokeApi
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Find your pokemon by ID
            </h2>
            <form>
              <input
                className="peer w-full rounded-r-lg rounded-l-lg border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none mb-3"
                onChange={handleChange}
                placeholder="poke"
              />
              <button
                className="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-r-lg rounded-l-lg  hover:bg-green-600 duration-100 ease-in-out"
                onClick={getPokeId}
              >
                check
              </button>
            </form>
          </div>

          <CardPokemon pokeName={pokemonName} pokeImg={pokemonImg} />
        </div>
      </div>
    </section>
  );
}

export default App;
