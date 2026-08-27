import { PokeApiService } from "./services/PokeApiService";
import { CatalogoPokemon } from "./models/CatalogoPokemon";

async function main(): Promise<void> {
  const pokeApiService = new PokeApiService();
  const catalogo = new CatalogoPokemon();

  const pikachu = await pokeApiService.buscarPokemon("pikachu");

  if (pikachu !== null) {
    catalogo.adicionar(pikachu);
  }

  console.log(pikachu);

  const charmander = await pokeApiService.buscarPokemon("charmander");

  if (charmander !== null) {
    catalogo.adicionar(charmander);
  }

  const pikachuDuplicado = await pokeApiService.buscarPokemon("pikachu");

  if (pikachuDuplicado !== null) {
    catalogo.adicionar(pikachuDuplicado);
  }

  const pokemonInexistente = await pokeApiService.buscarPokemon(
    "pokemon-inexistente",
  );

  console.log(pokemonInexistente);

  catalogo.listar();

  catalogo.remover(25);

  catalogo.listar();
}

main();
