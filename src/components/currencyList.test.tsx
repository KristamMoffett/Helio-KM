import { CurrencyList } from '@/components/CurrencyList';
import { render, screen } from '../test/test-utils';
import '@testing-library/jest-dom';

const mockCurrencies = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    symbolPrefix: 'BTC',
    type: 'DIGITAL' as const,
    decimals: 8,
    order: 1,
    mintAddress: 'btc123',
    coinMarketCapId: 1,
    iconUrl: 'https://example.com/btc.png',
    features: ['Payment_Pricing'],
    blockchain: {
      id: 'btc',
      name: 'Bitcoin',
      symbol: 'BTC',
      engine: {
        id: 'btc-engine',
        type: 'bitcoin',
      },
    },
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    symbolPrefix: 'ETH',
    type: 'DIGITAL' as const,
    decimals: 18,
    order: 2,
    mintAddress: 'eth123',
    coinMarketCapId: 1027,
    iconUrl: 'https://example.com/eth.png',
    features: ['Payment_Pricing'],
    blockchain: {
      id: 'eth',
      name: 'Ethereum',
      symbol: 'ETH',
      engine: {
        id: 'eth-engine',
        type: 'ethereum',
      },
    },
  },
];

test('Renders CurrencyList with currencies', () => {
  render(<CurrencyList currencies={mockCurrencies} />);
  expect(screen.getByText('Bitcoin')).toBeInTheDocument();
  expect(screen.getByText('Ethereum')).toBeInTheDocument();
});

test('Shows NoFilterResults when there are no currencies', () => {
  render(<CurrencyList currencies={[]} />);
  expect(screen.getByText('No Currencies Found')).toBeInTheDocument();
  expect(
    screen.getByText("Try adjusting your search or filters to find what you're looking for")
  ).toBeInTheDocument();
});
