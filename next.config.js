/** @type {import('next').NextConfig} */

const withMarkdoc = require("@markdoc/next.js");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"],
  },
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
};

module.exports = withMarkdoc()(nextConfig);
