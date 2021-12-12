import { React, useState, useEffect } from "react";
import { getPokemons } from "../../services/pokemon";
import { getTypes } from "../../services/type";
import { PokeFilter } from "./components/PokeFilter";
import { PokeGroup } from "./components/PokeGroup";
import { getStats } from "../../services/stats";
import { limit } from "../../utils";
const PokeHome = () => {
  const [offsetPokemon, setOffsetPokemon] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState({});
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const [pokemonSearched, setPokemonSearched] = useState([]);
  const [offsetSearch, setOffsetSearch] = useState(0);
  const [counterStandar, setCounterStandar] = useState(0);
  const [counterSearch, setCounterSearch] = useState(0);

  useEffect(async () => {
    //Types
    let typesData = await getTypes();
    let statsData = await getStats();
    let saveTypes = {};
    let saveStats = {};
    typesData = typesData.results;
    typesData.forEach((type) => {
      saveTypes[type.name] = type;
    });
    statsData = statsData.results;
    statsData.forEach((stat) => {
      saveStats[stat.name] = stat;
    });
    //Save
    setTypes(saveTypes);
    setStats(saveStats);
  }, []);
  useEffect(async () => {
    setLoading(true);
    let data = await getPokemons(limit, offsetPokemon);
    let pokemonCopy = pokemon;
    pokemonCopy = pokemonCopy.concat(data.results);
    setPokemon(pokemonCopy);
    setCounterStandar(data.count);
    setLoading(false);
  }, [offsetPokemon]);

  return (
    <>
      <PokeFilter
        types={Object.values(types)}
        setLoading={setLoading}
        offsetSearch={offsetSearch}
        setOffsetSearch={setOffsetSearch}
        pokemonSearched={pokemonSearched}
        setPokemonSearched={setPokemonSearched}
        setCounterSearch={setCounterSearch}
      />
      {pokemonSearched.length == 0 ? (
        <PokeGroup
          id="n"
          pokemons={pokemon}
          counter={counterStandar}
          loading={loading}
          offsetPokemon={offsetPokemon}
          setOffsetPokemon={setOffsetPokemon}
          types={types}
          stats={stats}
        />
      ) : (
        <PokeGroup
          id="s"
          counter={counterSearch}
          pokemons={pokemonSearched}
          loading={loading}
          offsetPokemon={offsetSearch}
          setOffsetPokemon={setOffsetSearch}
          types={types}
          stats={stats}
        />
      )}
    </>
  );
};

export default PokeHome;
