import { useState, useMemo } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { Currency } from '@/types/currency';

export const useCurrencyFilters = (currencies: Currency[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebouncedValue(searchQuery, 300);
  const [selectedChain, setSelectedChain] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const filteredCurrencies = useMemo(() => {
    return currencies.filter(currency => {
      const matchesSearch =
        debouncedSearchQuery === '' ||
        currency.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        currency.symbol.toLowerCase().includes(debouncedSearchQuery.toLowerCase());

      const matchesChain = selectedChain === '' || currency.blockchain?.name === selectedChain;
      const matchesType = selectedType === '' || currency.type === selectedType;
      const matchesFeatures =
        selectedFeatures.length === 0 ||
        selectedFeatures.every(feature => currency.features.includes(feature));

      return matchesSearch && matchesChain && matchesType && matchesFeatures;
    });
  }, [currencies, debouncedSearchQuery, selectedChain, selectedType, selectedFeatures]);

  return {
    searchQuery,
    setSearchQuery,
    selectedChain,
    setSelectedChain,
    selectedType,
    setSelectedType,
    selectedFeatures,
    setSelectedFeatures,
    filteredCurrencies,
  };
};
