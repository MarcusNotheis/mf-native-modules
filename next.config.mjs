import NextFederationPlugin from '@module-federation/nextjs-mf';


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'next1',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
      }),
    );

    return config;
  },
};

export default nextConfig;
