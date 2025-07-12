import type { NextConfig } from "next";
const withTM = require('next-transpile-modules')(['ui']); 
const { i18n } = require('./next-i18next.config');

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
    swcMinify: true,
  transpilePackages: ['ui'], 
  i18n, // ✅ Add this line

};

module.exports = withTM(nextConfig);

