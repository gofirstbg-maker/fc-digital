/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [{ hostname: "lh3.googleusercontent.com" }, { hostname: "a.storyblok.com" }]
    }
  };
  
  export default nextConfig;
  