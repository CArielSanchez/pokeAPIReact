import axios from "axios";

export async function getTypes() {
  try {
    const pokemonInfo = (url) => {
      return axios.get(url).then(res => res)
    }
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL
      }/type`
    );
    let types = []
    for (let i = 0; i < response.data.count; i++) {
      let url = response.data.results[i].url
      let type = await pokemonInfo(url)
      types.push(type.data)
    }
    response.data.results = types
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
