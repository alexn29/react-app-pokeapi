import {
  Box,
  Text,
  Flex,
  Image,
  Slider,
  rem,
  MantineColor,
  Divider,
  SimpleGrid,
  Badge,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconRuler2, IconStar, IconWeight } from '@tabler/icons-react';
import { usePokemonDetails } from '@/pages/Pokemons/hooks/usePokemons';
import { typeColors } from '@/shared/utils/pokemonUtils';
import EmptyPlaceholder from '@/shared/components/EmptyPlaceholder';
import PokemonDetailsSkeleton from '@/shared/components/PokemonDetailsSkeleton';

type PokemonDetailsProps = {
  pokemonId: number;
};
export default function PokemonDetails({ pokemonId }: PokemonDetailsProps) {
  const { data, isLoading } = usePokemonDetails(pokemonId);

  if (isLoading) {
    return <PokemonDetailsSkeleton />;
  }

  if (!data) {
    return <EmptyPlaceholder description='Pokémon not found' />;
  }

  const {
    name,
    stats,
    types,
    base_experience: experience,
    weight,
    height,
  } = data;

  const sprites = {
    frontDefault: data?.sprites.other['official-artwork'].front_default,
    frontShiny: data?.sprites.other['official-artwork'].front_shiny,
  };

  const pokemonType = types[0].type.name;
  const color: MantineColor = typeColors[pokemonType];

  return (
    <Box>
      <Carousel height={125} maw={250} mx='auto' loop>
        <Carousel.Slide>
          <Flex justify='center' align='center' h='100%'>
            <Image height={125} width='auto' src={sprites.frontDefault} />
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex justify='center' align='center' h='100%'>
            <Image height={125} width='auto' src={sprites.frontShiny} />
          </Flex>
        </Carousel.Slide>
      </Carousel>

      <Flex direction='column' align='center' justify='center' gap='xs' mb='lg'>
        <Text transform='capitalize' align='center' size='xs' fw={600}>
          {name}
        </Text>
        <Badge color={color}>{pokemonType}</Badge>
      </Flex>

      <Divider size='xs' label='About' labelPosition='center' mb='lg' />

      <SimpleGrid cols={3} mb='lg'>
        <Flex justify='center' align='center' direction='column' gap={4}>
          <IconStar size={16} />
          <Text size='xs'>{experience}</Text>
          <Text color='dimmed' size='xs'>
            Experience
          </Text>
        </Flex>
        <Flex justify='center' align='center' direction='column' gap={4}>
          <IconWeight size={16} />
          <Text size='xs'>{weight}</Text>
          <Text color='dimmed' size='xs'>
            Weight
          </Text>
        </Flex>
        <Flex justify='center' align='center' direction='column' gap={4}>
          <IconRuler2 size={16} />
          <Text size='xs'>{height}</Text>
          <Text color='dimmed' size='xs'>
            Height
          </Text>
        </Flex>
      </SimpleGrid>

      <Divider size='xs' label='Base Stats' labelPosition='center' mb='lg' />

      {stats.map((stat) => (
        <Box key={stat.stat.name} mb='xs'>
          <Text transform='uppercase' size={10} fw={500}>
            {stat.stat.name}
          </Text>
          <Slider
            thumbChildren={<Text size={10}>{stat.base_stat}</Text>}
            value={stat.base_stat}
            color={color}
            thumbSize={26}
            label={null}
            styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
          ></Slider>
        </Box>
      ))}
    </Box>
  );
}
