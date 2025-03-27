'use client';

import { Currency } from '@/types/currency';
import { Grid } from '@mantine/core';
import { CurrencyCard } from './CurrencyCard';

interface CurrencyListProps {
  currencies: Currency[];
}

export const CurrencyList = ({ currencies }: CurrencyListProps) => {
  return (
    <Grid>
      {currencies.map(currency => (
        <CurrencyCard key={currency.id} currency={currency} />
      ))}
    </Grid>
  );
};
