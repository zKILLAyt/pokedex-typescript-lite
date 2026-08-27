import { PokeApiService } from "./services/PokeApiService";

async function main(): Promise<void> {
  const pokeApiService = new PokeApiService();

  const pikachu = await pokeApiService.buscarPokemon("pikachu");

  console.log(pikachu);

  const pokemonInexistente = await pokeApiService.buscarPokemon(
    "pokemon-inexistente",
  );

  console.log(pokemonInexistente);
}

main();
