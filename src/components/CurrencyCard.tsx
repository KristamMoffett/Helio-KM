import { Card, Grid, Group, Text, Badge, Stack, Button } from '@mantine/core';
import { Currency } from '@/types/currency';
import { CurrencyLogo } from './CurrencyLogo';
import Link from 'next/link';
import { getDexAddress } from '@/utils/getDexAddress';
import { IconExternalLink } from '@tabler/icons-react';

export const CurrencyCard = ({ currency }: { currency: Currency }) => {
  console.log(currency);
  return (
    <Grid.Col key={currency.id} span={{ base: 12, md: 6, lg: 4 }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder h="100%" w="100%">
        <Group>
          <CurrencyLogo url={currency.iconUrl} chain={currency.blockchain?.name} />
          <Stack gap={2}>
            <Group gap={4}>
              <Text mb={4} fw={600} inline={true}>
                {currency.name}
              </Text>
              {currency.blockchain?.name && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={getDexAddress(currency.blockchain?.name, currency.mintAddress)}
                >
                  <IconExternalLink size={16} />
                </Link>
              )}
            </Group>
            <Group gap={4}>
              <Badge size="sm" color="blue">
                {currency.symbolPrefix}
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
