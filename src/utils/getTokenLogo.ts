const GENERIC_ICON = '/crypto-icons/generic.svg';
const ASSETS_URL = 'https://helio-assets.s3.eu-west-1.amazonaws.com';

export const getTokenLogo = (url: string | undefined) => {
  if (url) {
    return `${ASSETS_URL}/${url}`;
  }
  return GENERIC_ICON;
};
