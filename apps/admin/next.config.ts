const withTM = require('next-transpile-modules')(['ui']);

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
};

module.exports = withTM(nextConfig);