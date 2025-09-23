import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@import "@/app/_variables.scss";`
  }
};

export default nextConfig;
