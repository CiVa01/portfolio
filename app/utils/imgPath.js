/**
 * Prefix a public asset path with the Next.js basePath so that raw <img src>
 * and <a href> elements resolve correctly on GitHub Pages (or any sub-path deploy).
 *
 * NEXT_PUBLIC_BASE_PATH is set in next.config.js and is empty in development.
 */
export const imgPath = (src) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
