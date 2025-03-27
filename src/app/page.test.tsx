import { render, screen } from '../test/test-utils';
import Home from './page';

vi.mock('@/services/currency', () => ({
  fetchCurrencies: vi.fn().mockResolvedValue([]),
}));

test('Home', async () => {
  const HomeComponent = await Home();
  render(HomeComponent);
  expect(screen.getByText(/Hel.io Currencies/i)).toBeInTheDocument();
});
