export interface Blockchain {
  id: string;
  name: string;
  symbol: string;
  engine: {
    id: string;
    type: string;
  };
}

export interface Currency {
  id: string;
  name: string;
  decimals: number;
  order: number;
  mintAddress: string;
  coinMarketCapId: number | null;
  symbol: string;
  symbolPrefix: string;
  type: 'DIGITAL' | 'FIAT';
  iconUrl: string;
  features: string[];
  blockchain: Blockchain | null;
}
