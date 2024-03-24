import type { ReactNode } from 'react';
import { Flex, Title, Text } from '@mantine/core';

type EmptyPlaceholderProps = {
  icon?: ReactNode;
  title: string;
  description: string;
};
export default function EmptyPlaceholder({
  icon,
  title,
  description,
}: EmptyPlaceholderProps) {
  return (
    <Flex direction='column' align='center' gap='lg' py='lg' w='100%'>
      {icon}
      <Title weight={900} color='dimmed'>
        {title}
      </Title>
      <Text>{description}</Text>
    </Flex>
  );
}
