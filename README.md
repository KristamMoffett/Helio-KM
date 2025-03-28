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
git clone https://github.com/KristamMoffett/Helio-KM
cd helio-km
```

2. Install dependencies:

```bash
pnpm install
```

3. Copy crypto icons (required for currency icons):

```bash
pnpm run copy-icons
```

4. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier
- `pnpm run format:check` - Check code formatting
- `pnpm run test` - Run tests
- `pnpm run test:ui` - Run tests with UI
- `pnpm run test:coverage` - Run tests with coverage report

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── hooks/            # React hooks
├── lib/              # Library configs (Mantine)
├── providers/        # App providers
├── services/         # API and data services
├── test/             # Tests & testing config
├── types/            # TypeScript type definitions
└── utils/            # Helpers and utilities

```
