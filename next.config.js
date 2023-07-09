/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@mui/x-charts/BarChart",
  "@mui/x-charts/LineChart",
  "@mui/x-charts/PieChart",
]);
module.exports = withTM({
  experimental: {
    esmExternals: "loose",
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});
