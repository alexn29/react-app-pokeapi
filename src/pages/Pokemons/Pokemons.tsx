import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Container,
  Flex,
  LoadingOverlay,
  Pagination,
  SimpleGrid,
} from '@mantine/core';
import { IconMoodSad } from '@tabler/icons-react';
import type { Pokemon as PokemonType } from '@/app-types/pokemon';
import { getPokemonImageURL, getPokemonList } from '@/services/api';
import { getPokemonID } from '@/shared/utils/pokemonUtils';
import { simpleGridBreakpoints } from '@/shared/utils/simpleGridBreakpoints';
import EmptyPlaceholder from '@/shared/components/EmptyPlaceholder';
import Pokemon from '@/pages/Pokemons/components/Pokemon';
import SearchBox from '@/pages/Pokemons/components/SearchBox';

const LIMIT = 40;

export default function Pokemons() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['pokemons', page],
    queryFn: () => getPokemonList({ page, limit: LIMIT }),
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { pokemons, totalPages } = useMemo(() => {
    const pokemons: PokemonType[] = [];
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

    totalPages = Math.ceil(count / LIMIT);

    return { pokemons: filteredPokemons, totalPages };
  }, [data, query]);

  return (
    <Container>
      <SearchBox query={query} onChange={(value) => setQuery(value)} />

      {(() => {
        if (isLoading) {
          return <LoadingOverlay visible={isLoading} />;
        }

        if (pokemons.length > 0) {
          return (
            <>
              <SimpleGrid cols={4} breakpoints={simpleGridBreakpoints}>
                {pokemons.map((item) => (
                  <Pokemon key={item.id} data={item} />
                ))}
              </SimpleGrid>
              <Flex justify='center' my='lg'>
                <Pagination
                  value={page}
                  onChange={setPage}
                  total={totalPages}
                  align='center'
                />
              </Flex>
            </>
          );
        }

        return (
          <EmptyPlaceholder
            icon={<IconMoodSad color='gray' size={32} />}
            title='Nothing to see here!'
            description='Oops! No Pokémon match your search.'
          />
        );
      })()}
    </Container>
  );
}
