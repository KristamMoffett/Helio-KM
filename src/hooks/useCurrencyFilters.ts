import { useState, useMemo } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { Currency } from '@/types/currency';
import { orderBy } from 'lodash';

export type SortField = 'order' | 'name' | 'symbol' | 'features';
export type SortDirection = 'asc' | 'desc';

interface UseCurrencyFiltersReturn {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedChain: string;
  setSelectedChain: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  selectedFeatures: string[];
  setSelectedFeatures: (value: string[]) => void;
  filteredCurrencies: Currency[];
  sortField: SortField;
  setSortField: (field: SortField) => void;
  sortDirection: SortDirection;
  setSortDirection: (direction: SortDirection) => void;
}

export const useCurrencyFilters = (currencies: Currency[]): UseCurrencyFiltersReturn => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebouncedValue(searchQuery, 300);
  const [selectedChain, setSelectedChain] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortField, setSortField] = useState<SortField>('order');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const filteredCurrencies = useMemo(() => {
    const filtered = currencies.filter(currency => {
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

    return orderBy(filtered, [sortField], [sortDirection]);
  }, [
    currencies,
    debouncedSearchQuery,
    selectedChain,
    selectedType,
    selectedFeatures,
    sortField,
    sortDirection,
  ]);

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
    sortField,
    setSortField,
    sortDirection,
    setSortDirection,
  };
};
