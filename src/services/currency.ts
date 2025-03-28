import { Currency } from '@/types/currency';

const HELIO_API_URL = 'https://api.hel.io/v1';

export const fetchCurrencies = async (): Promise<Currency[]> => {
  const response = await fetch(`${HELIO_API_URL}/currency/all`);
  if (!response.ok) {
    throw new Error('Failed to fetch currencies');
  }
  return response.json();
};
