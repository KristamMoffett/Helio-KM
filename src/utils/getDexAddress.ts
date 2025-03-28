export enum DEX_CHAIN_MAP {
  SOL = 'solana',
  ETH = 'ethereum',
  BITCOIN = 'bsc',
  POLYGON = 'polygon',
  AVALANCHE = 'avalanche',
  BASE = 'base',
}

export const getDexAddress = (chain: string, mintAddress: string) => {
  return `https://dexscreener.com/${
    DEX_CHAIN_MAP[chain as keyof typeof DEX_CHAIN_MAP]
  }/${mintAddress}`;
};
