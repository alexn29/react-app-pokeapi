import { MantineProvider } from '@mantine/core';
import Layout from '@/components/Layout';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout>
        <h1>Hello world</h1>
      </Layout>
    </MantineProvider>
  );
}

export default App;
