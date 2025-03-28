const GENERIC_ICON = '/crypto-icons/generic.svg';
const POLYGON_ICON = '/crypto-icons/polygon.svg';
const BNB_ICON = '/crypto-icons/bnb.svg';
const ASSETS_URL = 'https://helio-assets.s3.eu-west-1.amazonaws.com';

// Helper function to get the icon path for a currency symbol
export async function getCryptoIcon(symbol: string): Promise<string> {
  const response = await fetch(`${ASSETS_URL}/${symbol}.svg`);
  if (response.ok) {
    return `${ASSETS_URL}/${symbol}.svg`;
  }

  // Fallback to local icons if S3 fetch fails
  switch (symbol) {
    case 'POLYGON':
      return POLYGON_ICON;
    case 'BITCOIN':
      return BNB_ICON;
    default:
      return GENERIC_ICON;
  }
}
