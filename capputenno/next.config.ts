import type { NextConfig } from "next";
import { isStyledComponent } from "styled-components";

const nextConfig: NextConfig = {
  compiler: {
      styledComponents:  true
  
  }
};

export default nextConfig;
