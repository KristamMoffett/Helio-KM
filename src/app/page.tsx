import { fetchCurrencies } from '@/services/currency';
import { CurrencyList } from '@/components/CurrencyList';
import { Container, Title, Text } from '@mantine/core';

export default async function Home() {
  const currencies = await fetchCurrencies();

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="md">
        Hel.io Currencies
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Explore all available currencies on the Hel.io platform
      </Text>
      <CurrencyList currencies={currencies} />
    </Container>
  );
}
