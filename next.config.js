/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@mui/x-charts/BarChart",
  "@mui/x-charts/LineChart",
  "@mui/x-charts/PieChart",
]);

const { i18n } = require("./next-i18next.config.js");

module.exports = withTM({
  experimental: {
    esmExternals: "loose",
  },
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
});
