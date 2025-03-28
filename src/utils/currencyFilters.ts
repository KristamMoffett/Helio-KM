import { Currency } from '@/types/currency';

export const getChainOptions = (currencies: Currency[]) => {
  const uniqueChains = new Set(currencies.map(c => c.blockchain?.name).filter(Boolean));
  return [
    { value: '', label: 'All Chains' },
    ...Array.from(uniqueChains)
      .filter((chain): chain is string => chain !== undefined)
      .map(chain => ({
        value: chain,
        label: chain,
      })),
  ];
};

export const getFeatureOptions = (currencies: Currency[]) => {
  const uniqueFeatures = new Set(currencies.flatMap(c => c.features));
  return Array.from(uniqueFeatures).map(feature => ({
    value: feature,
    label: feature.replace('_', ' '),
  }));
};
