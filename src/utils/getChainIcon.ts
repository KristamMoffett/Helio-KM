const GENERIC_ICON = '/crypto-icons/generic.svg';
const POLYGON_ICON = '/crypto-icons/polygon.svg';
const BNB_ICON = '/crypto-icons/bnb.svg';
const ASSETS_URL = 'https://helio-assets.s3.eu-west-1.amazonaws.com';

export const getChainIcon = async (symbol: string): Promise<string> => {
  const response = await fetch(`${ASSETS_URL}/${symbol}.svg`);
  if (response.ok) {
    return `${ASSETS_URL}/${symbol}.svg`;
  }

  switch (symbol) {
    case 'POLYGON':
      return POLYGON_ICON;
    case 'BITCOIN':
      return BNB_ICON;
    default:
      return GENERIC_ICON;
  }
};
