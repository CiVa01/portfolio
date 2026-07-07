/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const BASE_PATH = isProd ? "/portfolio" : "";

const nextConfig = {
  // Static export for GitHub Pages — does not affect the dev server
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Only apply /portfolio prefix in production; dev serves from localhost:3000/ normally
  basePath: BASE_PATH,

  // Expose basePath to client-side code for raw <img> / <a href> usage
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },

  // GitHub Pages serves directories (about/index.html) more reliably than flat files (about.html)
  trailingSlash: true,
};

module.exports = nextConfig;
