import { Group, MultiSelect, Paper, Select, Stack, TextInput } from '@mantine/core';
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
    <Paper p="md" withBorder>
      <Stack>
        <TextInput
          placeholder="Search by name or symbol..."
          value={searchQuery}
          onChange={e => onSearchChange(e.currentTarget.value)}
          leftSection={<IconSearch size={16} />}
        />
        <Group grow>
          <Select
            label="Chain"
            placeholder="Select chain"
            data={chains}
            value={selectedChain}
            onChange={(value: string | null) => onChainChange(value || '')}
            clearable
            disabled={selectedType === 'FIAT'}
            description={
              selectedType === 'FIAT'
                ? 'Chains are only available for digital currencies'
                : undefined
            }
          />
          <Select
            label="Type"
            placeholder="Select type"
            data={[
              { value: '', label: 'All Types' },
              { value: 'DIGITAL', label: 'Digital' },
              { value: 'FIAT', label: 'Fiat' },
            ]}
            value={selectedType}
            onChange={(value: string | null) => {
              onTypeChange(value || '');
              // Clear chain selection when switching to FIAT
              if (value === 'FIAT') {
                onChainChange('');
              }
            }}
            clearable
          />
        </Group>
        <MultiSelect
          label="Features"
          placeholder="Select features"
          data={features}
          value={selectedFeatures}
          onChange={onFeaturesChange}
          clearable
        />
      </Stack>
    </Paper>
  );
};
