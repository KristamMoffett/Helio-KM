import { Card, Grid, Group, Text, Badge, Stack } from '@mantine/core';
import { Currency } from '@/types/currency';
import { CurrencyLogo } from './CurrencyLogo';

export const CurrencyCard = ({ currency }: { currency: Currency }) => {
  return (
    <Grid.Col key={currency.id} span={{ base: 12, md: 6, lg: 4 }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder h="100%" w="100%">
        <Group>
          <CurrencyLogo symbol={currency.symbol} chain={currency.blockchain?.name} />
          <Stack gap={2}>
            <Text mb={4} fw={600} inline={true}>
              {currency.name}
            </Text>
            <Group gap={4}>
              <Badge size="sm" color="blue">
                {currency.symbol}
              </Badge>
              <Badge size="sm" color={currency.type === 'FIAT' ? 'teal.8' : 'blue.9'}>
                {currency.type}
              </Badge>
            </Group>
          </Stack>
        </Group>

        <Group gap={8} mt="md">
          {currency.features.map(feature => (
            <Badge size="sm" key={feature} variant="light">
              {feature.replace('_', ' ')}
            </Badge>
          ))}
        </Group>
      </Card>
    </Grid.Col>
  );
};
