import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  turbopack: {
    resolveAlias: {
      tailwindcss: path.join(__dirname, 'node_modules/tailwindcss'),
    },
  },
};

export default nextConfig;
