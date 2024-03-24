import { AppShell, Container, Header, Text, Flex } from '@mantine/core';
import type { ReactNode } from 'react';
import { useStyles } from './useStyles';

type LayoutProps = {
  children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const { classes } = useStyles();
  return (
    <AppShell
      header={
        <Header height={60}>
          <Container h='100%'>
            <Flex align='center' h='100%'>
              <Text size='lg' weight='bold' color='red.7'>
                Pokédex
              </Text>
            </Flex>
          </Container>
        </Header>
      }
      className={classes.appShell}
    >
      {children}
    </AppShell>
  );
}
