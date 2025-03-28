'use client';

import { CurrencyListProps } from '@/types/currency';
import { Grid, Loader, Stack } from '@mantine/core';
import { CurrencyCard } from './CurrencyCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CurrencyFilters } from './CurrencyFilters';
import { useCurrencyFilters } from '@/hooks/useCurrencyFilters';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { getChainOptions, getFeatureOptions } from '@/utils/currencyFilters';
import { NoFilterResults } from '@/components/NoFilterResults';

export const CurrencyList = ({ currencies }: CurrencyListProps) => {
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

  const {
    displayedItems: displayedCurrencies,
    hasMore,
    fetchMoreData,
  } = useInfiniteScroll(filteredCurrencies);

  const chains = getChainOptions(currencies);
  const features = getFeatureOptions(currencies);

  const loader = (
    <Grid>
      <Grid.Col span={12} style={{ textAlign: 'center', padding: '20px' }}>
        <Loader size="sm" />
      </Grid.Col>
    </Grid>
  );

  return (
    <Stack>
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

      {filteredCurrencies.length === 0 ? (
        <NoFilterResults />
      ) : (
        <InfiniteScroll
          dataLength={displayedCurrencies.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={loader}
          scrollThreshold="90%"
          style={{ overflow: 'visible' }}
          scrollableTarget="body"
        >
          <Grid>
            {displayedCurrencies.map(currency => (
              <CurrencyCard key={currency.id} currency={currency} />
            ))}
          </Grid>
        </InfiniteScroll>
      )}
    </Stack>
  );
};
