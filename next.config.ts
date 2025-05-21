import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXT_CUSTOMER_URL: process.env.NEXT_CUSTOMER_URL,
    NEXT_CUSTOMER_DEVELOPMENT_URL: process.env.NEXT_CUSTOMER_DEVELOPMENT_URL,
  },
};

export default nextConfig;
