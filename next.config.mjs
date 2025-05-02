/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://rockyvpn.tecclubb.com/storage/media/**")],
  },
};

export default nextConfig;
 