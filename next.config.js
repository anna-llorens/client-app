/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@mui/x-charts/BarChart"]);
module.exports = withTM({
  experimental: {
    esmExternals: "loose",
  },
});
