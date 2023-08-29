/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'apsmedia.s3.amazonaws.com'],
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
