import { Container, Title, Text } from '@mantine/core';
import { CurrencyListContainer } from '@/components/CurrencyListContainer';

export default function Home() {
  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="md">
        Hel.io Currencies
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Explore all available currencies on the Hel.io platform
      </Text>
      <CurrencyListContainer />
    </Container>
  );
}
