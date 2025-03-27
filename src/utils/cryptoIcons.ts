import availableIcons from './available-icons.json';

// Helper function to get the icon path for a currency symbol
export function getCryptoIcon(symbol: string): string {
  const normalizedSymbol = symbol.toLowerCase();

  // Check if we have a specific icon for this symbol
  if (availableIcons.includes(normalizedSymbol)) {
    return `/crypto-icons/${normalizedSymbol}.svg`;
  }

  // Fallback to generic icon
  return '/crypto-icons/generic.svg';
}
