import { React, useState, useEffect } from "react";
import {
  Grid,
  FormControl,
  Autocomplete,
  TextField,
  IconButton,
} from "@mui/material";
import { primaryColorLight, primaryColor } from "../../../styles/palette";
import { Search } from "@mui/icons-material";
import { translateSpanish } from "../../../utils";
import { getPokemon, getURLS } from "../../../services/pokemon";
import { limit } from "../../../utils";
export const PokeFilter = ({
  types,
  pokemonSearched,
  setPokemonSearched,
  offsetSearch,
  setLoading,
  setOffsetSearch,
  setCounterSearch,
}) => {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemonSearchStatus, setPokemonSearchStatus] = useState(null);
  const [pokemonFilterStatus, setPokemonFilterStatus] = useState(false);
  const [pokemonFilter, setPokemonFilter] = useState([]);
  const [filterValues, setFilterValues] = useState([]);

  useEffect(async () => {
    setLoading(true);
    let pokemons = await getURLS(
      Object.values(pokemonFilter).slice(offsetSearch, offsetSearch + limit)
    );
    let actualPokemons = pokemonSearched;
    setCounterSearch(Object.values(pokemonFilter).length);
    setPokemonSearched(actualPokemons.concat(pokemons));
    setLoading(false);
  }, [offsetSearch, pokemonFilter]);

  const handleChangePokemonSearch = (e) => {
    let value = e.target.value;
    setPokemonSearch(value);
  };
  const handleSearchPokemon = async () => {
    try {
      let pokemon;
      if (pokemonSearch != "") {
        pokemon = await getPokemon(pokemonSearch);
        pokemon = [pokemon];
      } else {
        pokemon = [];
      }
      setFilterValues([]);
      setPokemonSearched(pokemon);
      setPokemonSearchStatus();
    } catch (e) {
      setPokemonSearched([]);
      setPokemonSearch("");
      setPokemonSearchStatus(e.response.data);
    }
  };
  const handleChangeFilterType = async (event, value) => {
    setFilterValues(value);
    let pokemons = [];
    setOffsetSearch(0);
    setPokemonSearched([]);
    setPokemonFilterStatus(false);
    if (value.length) {
      pokemons = intersectTypes(value);
      if (pokemons.length == 0) setPokemonFilterStatus(true);
    }
    setPokemonFilter(pokemons);
  };
  const intersectTypes = (types) => {
    let finalPokemon = {};
    let tempFinalPokemon = {};
    let firstPokemons = types[0];
    firstPokemons.pokemon.forEach((pokemon) => {
      finalPokemon[pokemon.pokemon.name] = pokemon.pokemon.url;
    });

    for (let i = 1; i < types.length; i++) {
      let type = types[i];
      if (Object.keys(finalPokemon).length == 0) break;
      type.pokemon.forEach((pokemon) => {
        if (finalPokemon[pokemon.pokemon.name]) {
          tempFinalPokemon[pokemon.pokemon.name] =
            finalPokemon[pokemon.pokemon.name];
        }
      });
      finalPokemon = tempFinalPokemon;
    }
    return finalPokemon;
  };
  return (
    <Grid
      container
      sx={{
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
        alignItems: "center",
        backgroundColor: primaryColorLight,
        marginTop: 7,
        minHeight: 75,
      }}
    >
      <Grid item xs={12} md={4}>
        <FormControl
          variant="outlined"
          sx={{ padding: 1, borderColor: primaryColor }}
        >
          <TextField
            id="outlined-adornment"
            size="small"
            value={pokemonSearch}
            onChange={handleChangePokemonSearch}
            error={pokemonSearchStatus}
            helperText={pokemonSearchStatus}
            placeholder="Pokemon o ID"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </FormControl>
        <IconButton
          sx={{
            color: primaryColor,
            borderRadius: 6,
            borderWidth: 0.5,
            border: "solid",
          }}
          onClick={handleSearchPokemon}
        >
          <Search sx={{ color: primaryColor }} />
        </IconButton>
      </Grid>
      <Grid item xs={12} md={3}>
        <Autocomplete
          size="small"
          multiple
          limitTags={2}
          id="multiple-limit-tags"
          options={types}
          getOptionLabel={(option) => {
            if (option != undefined) {
              let o = translateSpanish([option])[0];
              return o?.name;
            }
          }}
          value={filterValues}
          onChange={handleChangeFilterType}
          renderInput={(params) => (
            <TextField
              {...params}
              error={pokemonFilterStatus}
              helperText={pokemonFilterStatus ? "No hay coincidencias" : ""}
              label="Tipos"
              placeholder="Tipo de Pokemon"
            />
          )}
        />
      </Grid>
    </Grid>
  );
};
