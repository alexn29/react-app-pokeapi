import type {
  GetPokemonList,
  PokemonDetails,
  PokemonListResult,
} from '@/app-types/pokemon';

const API_URL = 'https://pokeapi.co/api/v2';
const SPRITE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

export async function getPokemonList({
  page,
  limit,
}: GetPokemonList): Promise<PokemonListResult> {
  const offset = (page - 1) * limit;

  const response = await fetch(
    `${API_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );
  return response.json();
}

export function getPokemonImageURL(id: number) {
  return `${SPRITE_URL}/${id}.png`;
}

export async function getPokemonDetails(id: number): Promise<PokemonDetails> {
  const response = await fetch(`${API_URL}/pokemon/${id}`);
  return response.json();
}
