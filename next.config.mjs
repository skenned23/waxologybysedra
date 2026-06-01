/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/insights/wax-strips-vs-professional-waxing-what-really-works",
        destination: "/insights/wax-strips-vs-professional-waxing",
        permanent: true,
      },
      {
        source: "/insights/waxing-vs-shaving-pros-and-cons-for-hair-removal",
        destination: "/insights/waxing-vs-shaving-pros-cons",
        permanent: true,
      },
      {
        source: "/insights/common-myths-and-misconceptions-about-waxing",
        destination: "/insights/common-myths-misconceptions-about-waxing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;