import { Avatar, Box, Group, Loader, Tooltip } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getChainIcon } from '@/utils/getChainIcon';
import { getTokenLogo } from '@/utils/getTokenLogo';

export const CurrencyLogo = ({ url, chain }: { url: string; chain?: string }) => {
  const [chainIcon, setChainIcon] = useState<string | null>(null);

  useEffect(() => {
    const loadChainIcon = async () => {
      if (chain) {
        const chainIconUrl = await getChainIcon(chain);
        setChainIcon(chainIconUrl);
      }
    };

    loadChainIcon();
  }, [url, chain]);

  return (
    <Group gap="xs" style={{ position: 'relative' }}>
      <Avatar src={getTokenLogo(url)} w={40} h={40} color="initials">
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
