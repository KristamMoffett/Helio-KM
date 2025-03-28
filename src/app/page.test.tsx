import { render, screen } from '../test/test-utils';
import '@testing-library/jest-dom';
import Home from './page';

test('Home Title', async () => {
  const HomeComponent = await Home();
  render(HomeComponent);
  expect(screen.getByText(/Hel.io Currencies/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Explore all available currencies on the Hel.io platform/i)
  ).toBeInTheDocument();
});

test('Home Description', async () => {
  const HomeComponent = await Home();
  render(HomeComponent);
  expect(
    screen.getByText(/Explore all available currencies on the Hel.io platform/i)
  ).toBeInTheDocument();
});
