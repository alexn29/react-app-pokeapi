import type { Pokemon } from '@/app-types/pokemon';
import { getPokemonImageURL, getPokemonList } from '@/services/api';
import { getPokemonID } from '@/shared/utils/pokemonUtils';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

type UsePokemonListProps = {
  page: number;
  limit: number;
  query: string;
};
export const usePokemonList = ({ page, limit, query }: UsePokemonListProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['pokemons', page],
    queryFn: () => getPokemonList({ page, limit }),
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { pokemons, totalPages } = useMemo(() => {
    const pokemons: Pokemon[] = [];
    const results = data?.results ?? [];
    const count = data?.count ?? 0;
    let totalPages = 0;

    if (results.length === 0) {
      return { pokemons, totalPages };
    }

    results.forEach(({ name, url }) => {
      const id = getPokemonID(url);
      const imageURL = getPokemonImageURL(id);

      pokemons.push({
        id,
        name,
        url: imageURL,
      });
    });

    const filteredPokemons = pokemons.filter(({ name }) =>
      name.toLowerCase().startsWith(query.toLowerCase()),
    );

    totalPages = Math.ceil(count / limit);

    return { pokemons: filteredPokemons, totalPages };
  }, [data, query, limit]);

  return {
    pokemons,
    totalPages,
    isLoading,
  };
};
