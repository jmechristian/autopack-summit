/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'apsmedia.s3.amazonaws.com',
      'packschool.s3.amazonaws.com',
      'cdn.sanity.io',
      'packschool.s3.us-east-1.amazonaws.com',
    ],
  },
  async redirects() {
    return [
      {
        // this will match `/english(default)/something` being requested
        source: '/oem-registration',
        destination: '/register',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
