/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: process.env.GITHUB_PAGES ? "/elnagar-portfolio" : "",
  images: { unoptimized: true },
};
export default nextConfig;
