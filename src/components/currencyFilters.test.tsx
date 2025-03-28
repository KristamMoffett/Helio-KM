import { CurrencyFilters } from '@/components/CurrencyFilters';
import { render, screen, fireEvent } from '../test/test-utils';
import '@testing-library/jest-dom';

const defaultProps = {
  searchQuery: '',
  onSearchChange: vi.fn(),
  selectedChain: '',
  onChainChange: vi.fn(),
  selectedType: '',
  onTypeChange: vi.fn(),
  selectedFeatures: [],
  onFeaturesChange: vi.fn(),
  chains: [
    { value: 'ETH', label: 'Ethereum' },
    { value: 'BTC', label: 'Bitcoin' },
  ],
  features: [{ value: 'Payment_Pricing', label: 'Payment Pricing' }],
};

test('Renders Currency Filters UI', () => {
  render(<CurrencyFilters {...defaultProps} />);
  expect(screen.getByTestId('test-search')).toBeInTheDocument();
  expect(screen.getByTestId('test-chain-select')).toBeInTheDocument();
  expect(screen.getByTestId('test-type-select')).toBeInTheDocument();
  expect(screen.getByTestId('test-feature-select')).toBeInTheDocument();
});

test('Updates Currency Filters on Search input', () => {
  render(<CurrencyFilters {...defaultProps} />);
  const searchInput = screen.getByTestId('test-search');
  fireEvent.change(searchInput, { target: { value: 'Bitcoin' } });
  expect(defaultProps.onSearchChange).toHaveBeenCalledWith('Bitcoin');
});

test('Updates Currency Filters on Chain selection', () => {
  render(<CurrencyFilters {...defaultProps} />);
  const chainSelect = screen.getByTestId('test-chain-select');

  fireEvent.click(chainSelect);
  fireEvent.click(screen.getByText('Ethereum'));

  expect(defaultProps.onChainChange).toHaveBeenCalledWith('ETH');
});

test('Updates Currency Filters on Type selection', () => {
  render(<CurrencyFilters {...defaultProps} />);
  const typeSelect = screen.getByTestId('test-type-select');

  fireEvent.click(typeSelect);
  fireEvent.click(screen.getByText('Digital'));

  expect(defaultProps.onTypeChange).toHaveBeenCalledWith('DIGITAL');
});

test('Updates Currency Filters on Feature selection', () => {
  render(<CurrencyFilters {...defaultProps} />);
  const featureSelect = screen.getByTestId('test-feature-select');

  fireEvent.click(featureSelect);
  fireEvent.click(screen.getByText('Payment Pricing'));

  expect(defaultProps.onFeaturesChange).toHaveBeenCalledWith(['Payment_Pricing']);
});
