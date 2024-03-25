import { useState } from 'react';
import {
  Container,
  Flex,
  LoadingOverlay,
  Modal,
  Pagination,
  SimpleGrid,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMoodSad } from '@tabler/icons-react';
import { simpleGridBreakpoints } from '@/shared/utils/simpleGridBreakpoints';
import EmptyPlaceholder from '@/shared/components/EmptyPlaceholder';
import Pokemon from './components/Pokemon';
import SearchBox from './components/SearchBox';
import { usePokemonList } from './hooks/usePokemons';
import PokemonDetails from './components/PokemonDetails';

export default function Pokemons() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  const [opened, { open, close }] = useDisclosure(false);

  const { isLoading, pokemons, totalPages } = usePokemonList({
    page,
    query,
    limit: 40,
  });

  const handleClick = (id: number) => {
    setSelectedPokemon(id);
    open();
  };

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
                  <Pokemon key={item.id} data={item} onClick={handleClick} />
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

              <Modal
                opened={opened}
                onClose={close}
                withCloseButton={false}
                radius='lg'
              >
                <PokemonDetails pokemonId={selectedPokemon} />
              </Modal>
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
