# Hel.io Currencies

A modern web application for exploring and managing currencies on the Hel.io platform. Built with Next.js and Mantine UI.

## Features

- 🎨 Modern, responsive UI using Mantine components
- 📱 Mobile-friendly design
- 🔄 Infinite scroll for currency list
- 🎯 TypeScript for type safety
- 🧪 Comprehensive test suite with Vitest
- 🎨 Prettier for consistent code formatting
- 🔍 ESLint for code quality

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: Mantine v7
- **Styling**: Emotion
- **Testing**: Vitest + Testing Library
- **Type Checking**: TypeScript
- **Code Quality**: ESLint + Prettier
- **Icons**: Tabler Icons
- **Crypto Icons**: cryptocurrency-icons

## Prerequisites

- Node.js 18+
- npm or yarn or pnpm or bun

## Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
cd helio-km
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Copy crypto icons (required for currency icons):

```bash
npm run copy-icons
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── services/        # API and data services
└── types/           # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
