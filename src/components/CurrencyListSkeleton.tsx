import { Grid, Skeleton, Paper, Stack, Group } from '@mantine/core';

export const CurrencyListSkeleton = () => {
  return (
    <Grid>
      {Array.from({ length: 6 }).map((_, index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
          <Paper p="lg" radius="md" withBorder>
            <Group>
              <Skeleton circle height={40} />
              <Stack gap={4}>
                <Skeleton height={18} width={130} radius="sm" />
                <Group gap={4}>
                  <Skeleton height={14} width={60} radius={999} />
                  <Skeleton height={14} width={60} radius={999} />
                </Group>
              </Stack>
            </Group>
            <Group gap={8} mt="md">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} height={20} width={80} radius={999} />
              ))}
            </Group>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
};
