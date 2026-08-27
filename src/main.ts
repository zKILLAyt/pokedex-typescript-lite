import { TerminalController } from "./controllers/TerminalController";
import { CatalogoPokemon } from "./models/CatalogoPokemon";
import { PokeApiService } from "./services/PokeApiService";

async function main(): Promise<void> {
  const pokeApiService = new PokeApiService();
  const catalogo = new CatalogoPokemon();

  const terminalController = new TerminalController(
    pokeApiService,
    catalogo,
  );

  await terminalController.executar();
}

main();