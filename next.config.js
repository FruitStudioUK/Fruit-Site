/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/overview',
        permanent: true,
      },
      {
        source: '/campaigns',
        destination: '/benefits',
        permanent: true,
      },
      {
        source: '/partners',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/support',
        destination: '/partner-support',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
