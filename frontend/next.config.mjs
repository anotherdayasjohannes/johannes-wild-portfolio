/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site lives under wirwilden.de/johannes (fallback wilderserver.de/johannes).
  basePath: "/johannes",
  async redirects() {
    return [
      // Temporary until a family landing page exists at the root.
      {
        source: "/",
        destination: "/johannes",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
