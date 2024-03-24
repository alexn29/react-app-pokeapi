export type GetPokemonList = {
  limit: number;
  page: number;
};

export type PokemonListResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Pokemon = {
  id: number;
  name: string;
  url: string;
};
