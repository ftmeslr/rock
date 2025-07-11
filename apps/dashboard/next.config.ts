import type { NextConfig } from "next";
const withTM = require('next-transpile-modules')(['ui']); // 👈 IMPORTANT: match your package name

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
    swcMinify: true,
  transpilePackages: ['ui'], // 👈 safe fallback if you're on Next 13+
};

module.exports = withTM(nextConfig);

