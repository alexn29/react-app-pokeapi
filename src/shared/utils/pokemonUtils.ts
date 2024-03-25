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
  flying: 'blue.2',
  bug: 'green.9',
  poison: 'grape.9',
  ground: 'orange.9',
  rock: 'gray.6',
  fighting: 'orange.7',
  fairy: 'pink.5',
  dragon: 'violet.9',
  steel: 'gray.6',
  ghost: 'gray.7',
  ice: 'blue.4',
  dark: 'dark.5',
  psychic: 'pink.7',
};

export const parseTypeColors = (color: MantineColor) => {
  const [baseColor, tone] = color.split('.');
  return {
    baseColor,
    tone: parseInt(tone),
  };
};
