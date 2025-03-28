import { Container, Grid, MultiSelect, Select, Stack, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

interface CurrencyFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedChain: string;
  onChainChange: (value: string) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
  selectedFeatures: string[];
  onFeaturesChange: (value: string[]) => void;
  chains: { value: string; label: string }[];
  features: { value: string; label: string }[];
}

export const CurrencyFilters = ({
  searchQuery,
  onSearchChange,
  selectedChain,
  onChainChange,
  selectedType,
  onTypeChange,
  selectedFeatures,
  onFeaturesChange,
  chains,
  features,
}: CurrencyFiltersProps) => {
  return (
    <Container
      p={0}
      m={0}
      w={{ base: '100%', md: 280 }}
      top={{ base: 0, md: 24 }}
      pos={{ base: 'relative', md: 'sticky' }}
    >
      <Grid gutter={8}>
        <Grid.Col span={12}>
          <TextInput
            placeholder="Search by name or symbol..."
            data-testid="test-search"
            value={searchQuery}
            onChange={e => onSearchChange(e.currentTarget.value)}
            leftSection={<IconSearch size={16} />}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6, md: 12 }}>
          <Select
            placeholder="Select chain"
            data={chains}
            value={selectedChain}
            data-testid="test-chain-select"
            onChange={(value: string | null) => onChainChange(value || '')}
            clearable
            disabled={selectedType === 'FIAT'}
            styles={{
              dropdown: {
                color: '#313131',
              },
            }}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6, md: 12 }}>
          <Select
            placeholder="Select type"
            data-testid="test-type-select"
            data={[
              { value: '', label: 'All Types' },
              { value: 'DIGITAL', label: 'Digital' },
              { value: 'FIAT', label: 'Fiat' },
            ]}
            value={selectedType}
            onChange={(value: string | null) => {
              onTypeChange(value || '');
              if (value === 'FIAT') {
                onChainChange('');
              }
            }}
            clearable
            styles={{
              dropdown: {
                color: '#313131',
              },
            }}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <MultiSelect
            placeholder="Select features"
            data-testid="test-feature-select"
            data={features}
            value={selectedFeatures}
            onChange={onFeaturesChange}
            clearable
            styles={{
              dropdown: {
                color: '#313131',
              },
            }}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
