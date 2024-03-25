import {
  Box,
  Flex,
  Text,
  Image,
  createStyles,
  UnstyledButton,
} from '@mantine/core';
import type { Pokemon as PokemonType } from '@/app-types/pokemon';
import wave from '@/assets/wave.svg';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.white,
    backgroundImage: `url(${wave})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover',
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.gray[4],
  },
}));

type PokemonProps = {
  data: PokemonType;
  onClick: (id: number) => void;
};
export default function Pokemon({ data, onClick }: PokemonProps) {
  const { classes } = useStyles();
  const { id, url, name } = data;

  return (
    <UnstyledButton
      key={id}
      className={classes.card}
      onClick={() => onClick(id)}
    >
      <Box p='lg'>
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
      </Box>
    </UnstyledButton>
  );
}
