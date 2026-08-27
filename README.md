# Pokédex TypeScript Lite

Projeto desenvolvido em Node.js + TypeScript com integração à PokeAPI.

## Objetivo

O objetivo do projeto é desenvolver uma aplicação de terminal capaz de consultar Pokémon pela PokeAPI e manter um catálogo local em memória.

A aplicação permite:

- Buscar Pokémon por nome ou ID;
- Adicionar Pokémon ao catálogo;
- Impedir Pokémon duplicados;
- Listar os Pokémon cadastrados;
- Remover um Pokémon pelo ID.

## Tecnologias utilizadas

- Node.js
- TypeScript
- PokeAPI
- Git e GitHub
- npm

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js
- npm
- Git

Também é necessário acesso à internet para realizar as consultas à PokeAPI.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/zKILLAyt/pokedex-typescript-lite.git
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

## Execução

Para executar a aplicação:

```bash
npm run start
```

Para executar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Para verificar a compilação do TypeScript:

```bash
npm run build
```

## Exemplos de execução

### Busca de Pokémon

Busca do Pokémon `pikachu`:

```text
{ id: 25, nome: 'pikachu', tipos: [ 'electric' ], altura: 4, peso: 60 }
```

### Pokémon inexistente

```text
[ERRO] Pokémon não encontrado: pokemon-inexistente
null
```

### Tentativa de duplicidade

```text
[AVISO] pikachu já está no catálogo.
```

### Listagem do catálogo

```text
Catálogo atual:
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```

### Remoção por ID

```text
[OK] Pokémon removido do catálogo.

Catálogo atual:
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```

## Estrutura do projeto

```text
src/
├── main.ts
├── controllers/
│   └── TerminalController.ts
├── models/
│   ├── CatalogoPokemon.ts
│   └── Pokemon.ts
├── services/
│   ├── BoxService.ts
│   └── PokeApiService.ts
└── utils/
    └── textFormatters.ts
```

### Descrição dos principais arquivos

- `main.ts` — ponto de entrada da aplicação e responsável por iniciar o fluxo.
- `TerminalController.ts` — controla o fluxo principal da aplicação.
- `CatalogoPokemon.ts` — gerencia o catálogo local de Pokémon.
- `Pokemon.ts` — contém as interfaces utilizadas para tipagem dos dados.
- `PokeApiService.ts` — realiza as consultas à PokeAPI.
- `BoxService.ts` — serviço reservado para a camada de persistência local.
- `textFormatters.ts` — espaço destinado às funções utilitárias de formatação.

## Git e branches

O projeto utiliza GitFlow para organização do desenvolvimento.

Branches utilizadas:

- `main` — versão principal do projeto.
- `develop` — branch de desenvolvimento.
- `feat/pokedex` — desenvolvimento das funcionalidades da Pokédex.
- `docs/readme` — desenvolvimento da documentação do projeto.

## Kanban

O projeto utiliza um quadro Kanban para organização das tarefas e acompanhamento do desenvolvimento.

O quadro contém as seguintes etapas:

- Backlog
- A Fazer
- Em Andamento
- Concluído

[Visualizar Kanban](https://github.com/users/zKILLAyt/projects/4/views/1)

## Repositório

GitHub:

https://github.com/zKILLAyt/pokedex-typescript-lite
