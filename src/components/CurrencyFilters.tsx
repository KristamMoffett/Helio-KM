import { Group, MultiSelect, Select, TextInput } from '@mantine/core';
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
    <Group gap={8}>
      <TextInput
        placeholder="Search by name or symbol..."
        data-testid="test-search"
        value={searchQuery}
        onChange={e => onSearchChange(e.currentTarget.value)}
        leftSection={<IconSearch size={16} />}
        w="100%"
        flex={{ base: 0, md: 1 }}
      />
      <Select
        placeholder="Select chain"
        data={chains}
        value={selectedChain}
        data-testid="test-chain-select"
        onChange={(value: string | null) => onChainChange(value || '')}
        clearable
        disabled={selectedType === 'FIAT'}
        description={
          selectedType === 'FIAT' ? 'Chains are only available for digital currencies' : undefined
        }
        styles={{
          dropdown: {
            color: '#313131',
          },
        }}
        w={{ base: '100%', md: '100%', sm: 'auto' }}
        flex={{ base: 0, md: 1 }}
      />
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
        w={{ base: '100%', md: '100%', sm: 'auto' }}
        flex={{ base: 0, md: 1 }}
      />
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
        w={{ base: '100%', md: '100%', sm: 'auto' }}
        flex={1}
      />
    </Group>
  );
};
