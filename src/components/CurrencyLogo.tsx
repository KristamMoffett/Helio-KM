import { Box, Group, Tooltip } from '@mantine/core';
import Image from 'next/image';
import { getCryptoIcon } from '@/utils/cryptoIcons';

export const CurrencyLogo = ({
  symbol,
  name,
  chain,
}: {
  symbol: string;
  name: string;
  chain?: string;
}) => {
  return (
    <Group gap="xs">
      <Image src={getCryptoIcon(symbol)} alt={name} width={40} height={40} />
      {chain && (
        <Tooltip arrowSize={8} withArrow label={chain} position="right">
          <Box ml={-22} mt={24} w={22} h={22} bg="white" style={{ borderRadius: '50%' }}>
            <Image
              src={getCryptoIcon(chain)}
              alt={name}
              width={22}
              height={22}
              style={{ borderRadius: '50%', border: '2.5px solid white' }}
            />
          </Box>
        </Tooltip>
      )}
    </Group>
  );
};
