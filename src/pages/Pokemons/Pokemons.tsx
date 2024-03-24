import { useState } from 'react';
import {
  Container,
  Flex,
  LoadingOverlay,
  Pagination,
  SimpleGrid,
} from '@mantine/core';
import { IconMoodSad } from '@tabler/icons-react';
import { simpleGridBreakpoints } from '@/shared/utils/simpleGridBreakpoints';
import EmptyPlaceholder from '@/shared/components/EmptyPlaceholder';
import Pokemon from './components/Pokemon';
import SearchBox from './components/SearchBox';
import { usePokemonList } from './hooks/usePokemons';

export default function Pokemons() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { isLoading, pokemons, totalPages } = usePokemonList({
    page,
    query,
    limit: 40,
  });

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
