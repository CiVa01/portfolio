/** @type {import('next').NextConfig} */
const BASE_PATH = "/portfolio";

const nextConfig = {
  // Enable static export for GitHub Pages deployment
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Base path for GitHub Pages (repo is deployed at /portfolio)
  basePath: BASE_PATH,

  // Expose basePath to client-side code for raw <img> / <a href> usage
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },

  // Disable API routes since this is static
  // GitHub Pages serves directories (about/index.html) more reliably than flat files (about.html)
  trailingSlash: true,
};

module.exports = nextConfig;
