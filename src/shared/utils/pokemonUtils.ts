import { MantineColor } from '@mantine/core';

export const getPokemonID = (url: string) => {
  const regex = /\/([^/]+)\/$/;
  const match = url.match(regex);

  return match ? Number(match[1]) : 0;
};

export const typeColors: Record<string, MantineColor> = {
  normal: 'dark.3',
  fire: 'red.5',
  water: 'blue.5',
  grass: 'green.5',
  electric: 'yellow.5',
  flying: 'blue.1',
  bug: 'green.9',
  poison: 'grape.9',
  ground: 'orange.9',
  rock: 'gray.5',
  fighting: 'orange.3',
  fairy: 'pink.5',
  dragon: 'violet.9',
  steel: 'grey.3',
  ghost: '#fff',
  ice: 'blue.1',
  dark: 'dark.5',
};
