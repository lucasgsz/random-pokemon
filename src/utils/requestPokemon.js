import api from "../services/api";

const requestPokemon = async () => {
  let idPokemon = Math.floor(Math.random() * (898 - 0 + 1) + 0).toString();

  try {
    let response = await api.get(idPokemon);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default requestPokemon;
