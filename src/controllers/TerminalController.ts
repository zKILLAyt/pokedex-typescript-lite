import { CatalogoPokemon } from "../models/CatalogoPokemon";
import { PokeApiService } from "../services/PokeApiService";

export class TerminalController {
  constructor(
    private readonly pokeApiService: PokeApiService,
    private readonly catalogo: CatalogoPokemon,
  ) {}

  async executar(): Promise<void> {
    const pikachu = await this.pokeApiService.buscarPokemon("pikachu");

    if (pikachu !== null) {
      this.catalogo.adicionar(pikachu);
    }

    const charmander = await this.pokeApiService.buscarPokemon("charmander");

    if (charmander !== null) {
      this.catalogo.adicionar(charmander);
    }

    const pikachuDuplicado = await this.pokeApiService.buscarPokemon("pikachu");

    if (pikachuDuplicado !== null) {
      this.catalogo.adicionar(pikachuDuplicado);
    }

    await this.pokeApiService.buscarPokemon("pokemon-inexistente");

    this.catalogo.listar();

    this.catalogo.remover(25);

    this.catalogo.listar();
  }
}
