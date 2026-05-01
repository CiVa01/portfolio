/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages deployment
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Base path for GitHub Pages (optional, if deploying to a subdirectory)
  // basePath: '/portfolio-1',

  // Disable API routes since this is static
  // Allow static generation with trailing slashes
  trailingSlash: false,
};

module.exports = nextConfig;
