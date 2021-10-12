import "./App.css";
import { useState, useEffect } from "react";

// Assets
import logoPokemon from "../assets/imgs/logo-pokemon.png";
import loadingPokebola from "../assets/imgs/loading-pokebola.png";

// Components
import Card from "./Card/Card";

// Util Functions
import trataObjeto from "../utils/trataObjeto";
import getColor from "../utils/getColor";
import requestPokemon from "../utils/requestPokemon";

const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(false);
  const [bgColor, setBgColor] = useState();

  const handlePokemon = async () => {
    setLoading(true);

    let pokemonAux = await requestPokemon();
    pokemonAux = trataObjeto(pokemonAux);

    setTimeout(() => {
      setPokemon(pokemonAux);
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    handlePokemon();
  }, []);

  useEffect(() => {
    const handleBackground = () => {
      if (!pokemon) return;

      let bgColorString = getColor(pokemon.tiposPoderes);

      setBgColor(bgColorString);
    };
    handleBackground();
  }, [pokemon]);

  return (
    <div className="App" style={{ background: bgColor }}>
      <div className="header">
        <img src={logoPokemon} alt="logo-pokemon" />
        <button onClick={handlePokemon} className="buttonGetPokemon">
          Get a random pokémon
        </button>
      </div>
      <div className="container">
        {!loading && pokemon ? (
          <Card pokemon={pokemon}></Card>
        ) : (
          <img className="loading" src={loadingPokebola} alt="carregando"></img>
        )}
      </div>
    </div>
  );
};

export default App;
