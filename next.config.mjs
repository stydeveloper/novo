/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        // Optionally, you can add pathname: '/your/path/here/*' for more specific paths
      },
    ],
  },
};

export default nextConfig;
