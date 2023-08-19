/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,
  swcMinify: true,
  // "https://lh3.googleusercontent.com/a/AAcHTtfPJ9bk_3UwHhgrhH1VRWWTl3cSdkWyYrSSj_A0=s96-c" is missing required "width" property.

  // Uncoment to add domain whitelist
  images: {
    domains: [
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'in.bmscdn.com',
    ],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
