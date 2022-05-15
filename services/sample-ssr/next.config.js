/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');

const { GIT_SHA, NODE_ENV, NEXT_PUBLIC_APP_ENV, NEXT_PUBLIC_PORT } =
  process.env;

console.log(`env: GIT_SHA = ${GIT_SHA}`);
console.log(`env: NODE_ENV = ${NODE_ENV}`);
console.log(`env: NEXT_PUBLIC_APP_ENV = ${NEXT_PUBLIC_APP_ENV}`);
console.log(`env: NEXT_PUBLIC_PORT = ${NEXT_PUBLIC_PORT}`);

const moduleExports = withPlugins([], {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Powered-By',
            value: 'YEOUL',
          },
        ],
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactRemoveProperties: NEXT_PUBLIC_APP_ENV !== 'test',
  removeConsole:
    NEXT_PUBLIC_APP_ENV === 'prod' ? { exclude: ['error'] } : false,
  swcMinify: false,
});

module.exports = moduleExports;
