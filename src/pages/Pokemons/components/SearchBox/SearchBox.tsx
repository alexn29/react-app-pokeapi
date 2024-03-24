import { Flex, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

type SearchBoxProps = {
  query: string;
  onChange: (value: string) => void;
};
export default function SearchBox({ query, onChange }: SearchBoxProps) {
  return (
    <Flex justify='center' mb='lg'>
      <Input
        radius='lg'
        miw={320}
        value={query}
        icon={<IconSearch size={16} />}
        onChange={({ target: { value } }) => onChange(value)}
        placeholder='Search Pokémon'
      />
    </Flex>
  );
}
