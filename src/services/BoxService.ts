import { readFile, writeFile } from "node:fs/promises";
import { PokemonResumo } from "../models/Pokemon";

export class BoxService {
  private readonly caminhoArquivo = "pc_box.json";

  async listar(): Promise<PokemonResumo[]> {
    const dados = await readFile(this.caminhoArquivo, "utf-8");

    return JSON.parse(dados) as PokemonResumo[];
  }

  async salvar(pokemon: PokemonResumo): Promise<void> {
    const catalogo = await this.listar();

    catalogo.push(pokemon);

    await writeFile(
      this.caminhoArquivo,
      JSON.stringify(catalogo, null, 2),
      "utf-8",
    );
  }
}