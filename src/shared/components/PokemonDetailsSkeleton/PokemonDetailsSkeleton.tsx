import { Flex, Skeleton, SimpleGrid, Box } from '@mantine/core';

export default function PokemonDetailsSkeleton() {
  return (
    <Flex direction='column' gap='lg'>
      <Flex direction='column' justify='center' align='center' gap='xs'>
        <Skeleton height={125} circle mb='xs' />
        <Skeleton height={10} width={75} radius='lg' mb='xs' />
        <Skeleton height={10} width={75} radius='lg' mb='xs' />
      </Flex>

      <Skeleton height={10} width='100%' radius='lg' />

      <SimpleGrid cols={3}>
        <Skeleton height={75} width='100%' radius='lg' mb='xs' />
        <Skeleton height={75} width='100%' radius='lg' mb='xs' />
        <Skeleton height={75} width='100%' radius='lg' mb='xs' />
      </SimpleGrid>

      <Skeleton height={10} width='100%' radius='lg' />

      <Flex direction='column' gap='sm'>
        <Box>
          <Skeleton height={10} width={30} radius='lg' mb='xs' />
          <Skeleton height={10} width='100%' radius='lg' mb='sm' />
        </Box>
        <Box>
          <Skeleton height={10} width={30} radius='lg' mb='xs' />
          <Skeleton height={10} width='100%' radius='lg' mb='sm' />
        </Box>
        <Box>
          <Skeleton height={10} width={30} radius='lg' mb='xs' />
          <Skeleton height={10} width='100%' radius='lg' mb='sm' />
        </Box>
      </Flex>
    </Flex>
  );
}
