/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mantine/core', '@mantine/hooks'],
  experimental: {
    // Enable webpack memory cache
    webpackBuildWorker: true,
    // Optimize cache serialization
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Increase performance budget for development
      config.performance = {
        ...config.performance,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
        hints: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
