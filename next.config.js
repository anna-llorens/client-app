/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@mui/x-charts/BarChart",
  "@mui/x-charts/LineChart",
]);
module.exports = withTM({
  experimental: {
    esmExternals: "loose",
  },
});
