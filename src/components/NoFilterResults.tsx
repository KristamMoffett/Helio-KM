import { Center, Paper, Stack, Text } from '@mantine/core';
import { IconMoodSad } from '@tabler/icons-react';

export const NoFilterResults = () => {
  return (
    <Paper p="xl" withBorder>
      <Center>
        <Stack align="center" gap="md">
          <IconMoodSad size={48} color="gray" />
          <Text size="lg" fw={500}>
            No currencies found
          </Text>
          <Text c="dimmed" ta="center">
            Try adjusting your search or filters to find what you're looking for
          </Text>
        </Stack>
      </Center>
    </Paper>
  );
};
