import { Container, Title, Text } from '@mantine/core';
import { CurrencyListContainer } from '@/components/CurrencyListContainer';

export const Home = () => {
  return (
    <Container size="xxl" py="xl" style={{ maxWidth: '1600px' }}>
      <Title order={1} mb="md">
        Hel.io Currencies
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Explore all available currencies on the Hel.io platform
      </Text>
      <CurrencyListContainer />
    </Container>
  );
};

export default Home;
