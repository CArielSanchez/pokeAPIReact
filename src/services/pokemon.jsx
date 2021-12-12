import axios from "axios";

export async function getPokemons(limit, offset) {
  try {
    const pokemonInfo = (url) => {
      return axios.get(url).then(res => res)
    }
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL
      }/pokemon?limit=${limit}&offset=${offset}`
    );
    let pokemons = []
    for (let i = 0; i < limit; i++) {
      let url = response.data.results[i].url
      let pokemon = await pokemonInfo(url)
      pokemons.push(pokemon.data)
    }
    response.data.results = pokemons
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPokemon(name) {
  name = name.toLowerCase()
  const response = await axios.get(
    `${import.meta.env.VITE_APP_API_URL
    }/pokemon/${name}`
  );
  return response.data;

}

export async function getURLS(urls) {
  const info = (url) => {
    return axios.get(url).then(res => res)
  }
  let pokemons = []
  for (let i = 0; i < urls.length; i++) {
    let url = urls[i]
    let pokemon = await info(url)
    pokemons.push(pokemon.data)
  }
  return pokemons
}