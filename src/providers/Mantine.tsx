'use client';

import { MantineProvider as MantineProviderBase, createTheme } from '@mantine/core';
import { ReactNode } from 'react';

const theme = createTheme({
  primaryColor: 'blue',
  defaultRadius: 'md',
});

export function MantineProvider({ children }: { children: ReactNode }) {
  return <MantineProviderBase theme={theme}>{children}</MantineProviderBase>;
}
