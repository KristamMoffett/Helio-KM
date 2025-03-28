'use client';

import { useEffect, useState } from 'react';
import { fetchCurrencies } from '@/services/currency';
import { Currency } from '@/types/currency';
import { CurrencyList } from './CurrencyList';
import { CurrencyListSkeleton } from './CurrencyListSkeleton';
import { CurrencyFilters } from './CurrencyFilters';
import { useCurrencyFilters } from '@/hooks/useCurrencyFilters';
import { getChainOptions, getFeatureOptions } from '@/utils/currencyFilters';
import { Container, Flex, Group, Stack } from '@mantine/core';

export const CurrencyListContainer = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    searchQuery,
    setSearchQuery,
    selectedChain,
    setSelectedChain,
    selectedType,
    setSelectedType,
    selectedFeatures,
    setSelectedFeatures,
    filteredCurrencies,
  } = useCurrencyFilters(currencies);

  const chains = getChainOptions(currencies);
  const features = getFeatureOptions(currencies);

  useEffect(() => {
    const loadCurrencies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCurrencies();
        setCurrencies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load currencies');
      } finally {
        setIsLoading(false);
      }
    };

    loadCurrencies();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Flex gap={20} align="flex-start" direction={{ base: 'column', md: 'row' }}>
      <CurrencyFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedChain={selectedChain}
        onChainChange={setSelectedChain}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        selectedFeatures={selectedFeatures}
        onFeaturesChange={setSelectedFeatures}
        chains={chains}
        features={features}
      />
      <Container p={0} m={0} fluid flex={1}>
        {isLoading ? <CurrencyListSkeleton /> : <CurrencyList currencies={filteredCurrencies} />}
      </Container>
    </Flex>
  );
};
