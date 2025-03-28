import { Avatar, Box, Group, Loader, Tooltip } from '@mantine/core';
import { getCryptoIcon } from '@/utils/cryptoIcons';
import { useEffect, useState } from 'react';

export const CurrencyLogo = ({ symbol, chain }: { symbol: string; chain?: string }) => {
  const [mainIcon, setMainIcon] = useState<string | null>(null);
  const [chainIcon, setChainIcon] = useState<string | null>(null);

  useEffect(() => {
    const loadMainIcon = async () => {
      const mainIconUrl = await getCryptoIcon(symbol);
      setMainIcon(mainIconUrl);
    };

    const loadChainIcon = async () => {
      if (chain) {
        const chainIconUrl = await getCryptoIcon(chain);
        setChainIcon(chainIconUrl);
      }
    };

    loadMainIcon();
    loadChainIcon();
  }, [symbol, chain]);

  return (
    <Group gap="xs" style={{ position: 'relative' }}>
      <Avatar src={mainIcon} w={40} h={40} color="initials">
        <Loader size={16} color="gray.5" />
      </Avatar>

      {chain && (
        <Tooltip arrowSize={8} withArrow label={chain} position="right">
          <Box
            bottom={-3}
            right={-8}
            w={22}
            h={22}
            bg="white"
            style={{ position: 'absolute', borderRadius: '50%' }}
          >
            <Avatar
              src={chainIcon}
              w={22}
              h={22}
              style={{ border: '2.5px solid white', minWidth: 0 }}
            >
              <Loader size={10} color="gray.5" />
            </Avatar>
          </Box>
        </Tooltip>
      )}
    </Group>
  );
};
