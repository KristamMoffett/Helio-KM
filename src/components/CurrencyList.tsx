'use client';

import { CurrencyListProps } from '@/types/currency';
import { Grid, Loader } from '@mantine/core';
import { CurrencyCard } from './CurrencyCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { NoFilterResults } from '@/components/NoFilterResults';

export const CurrencyList = ({ currencies }: CurrencyListProps) => {
  const {
    displayedItems: displayedCurrencies,
    hasMore,
    fetchMoreData,
  } = useInfiniteScroll(currencies);

  const loader = (
    <Grid>
      <Grid.Col span={12} style={{ textAlign: 'center', padding: '20px' }}>
        <Loader size="sm" />
      </Grid.Col>
    </Grid>
  );

  if (currencies.length === 0) {
    return <NoFilterResults />;
  }

  return (
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
  );
};
