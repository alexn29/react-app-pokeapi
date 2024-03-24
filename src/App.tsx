import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/shared/components/Layout';
import Pokemons from '@/pages/Pokemons';

const queryClient = new QueryClient();

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Pokemons />
        </Layout>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
