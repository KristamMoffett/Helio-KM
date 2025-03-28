/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mantine/core', '@mantine/hooks'],
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    webpackBuildWorker: true,
    // Optimize cache serialization
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'helio-assets.s3.eu-west-1.amazonaws.com', // Allow images from all domains
      },
    ],
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
