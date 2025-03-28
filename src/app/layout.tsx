import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MantineProvider } from '../providers/Mantine';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Helio | Sell More with Crypto',
  description: 'Technical assignment for Helio Pay',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
