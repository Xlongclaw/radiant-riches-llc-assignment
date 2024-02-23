/** @type {import('next').NextConfig} */
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const path = require("path");
// includePaths: [path.join(__dirname, "styles")],

const nextConfig = {
  sassOptions: {
    includePaths: ["./src/app/sass"],
  },
};

export default nextConfig;
