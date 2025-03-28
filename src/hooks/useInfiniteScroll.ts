import { useState, useEffect } from 'react';
import { Currency } from '@/types/currency';

const ITEMS_PER_PAGE = 30;

export const useInfiniteScroll = (items: Currency[]) => {
  const [displayedItems, setDisplayedItems] = useState<Currency[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setDisplayedItems(items.slice(0, ITEMS_PER_PAGE));
    setHasMore(items.length > ITEMS_PER_PAGE);
  }, [items]);

  const fetchMoreData = () => {
    const currentLength = displayedItems.length;
    const nextItems = items.slice(currentLength, currentLength + ITEMS_PER_PAGE);

    if (nextItems.length === 0) {
      setHasMore(false);
      return;
    }

    setDisplayedItems(prev => [...prev, ...nextItems]);
  };

  return {
    displayedItems,
    hasMore,
    fetchMoreData,
  };
};
