import { Card, Flex, Text, Image, createStyles } from '@mantine/core';
import type { Pokemon as PokemonType } from '@/app-types/pokemon';
import wave from '@/assets/wave.svg';

const useStyles = createStyles(() => ({
  card: {
    backgroundImage: `url(${wave})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover',
  },
}));

type PokemonProps = {
  data: PokemonType;
};
export default function Pokemon({ data }: PokemonProps) {
  const { classes } = useStyles();
  const { id, url, name } = data;

  return (
    <Card key={id} radius='lg' withBorder className={classes.card}>
      <Card.Section p='lg'>
        <Flex direction='column' justify='center' align='center'>
          <Image
            src={url}
            withPlaceholder
            height={75}
            width='auto'
            mb='lg'
            alt={name}
          />
          <Text transform='capitalize' weight='500'>
            {name}
          </Text>
        </Flex>
      </Card.Section>
    </Card>
  );
}
