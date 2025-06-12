import { PokemonClient } from "pokenode-ts";

const fetchPokemon = async (id: number) => {
  const api = new PokemonClient();

  await api.getPokemonById(id).then((data) => console.log(data));
};

fetchPokemon(1);
