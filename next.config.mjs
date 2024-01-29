import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
});
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
}
 
export default withMDX(nextConfig);
