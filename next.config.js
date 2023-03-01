/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com", "mangadex.org", "res.cloudinary.com"],
    // loader: "cloudinary",
    // path: "https://res.cloudinary.com/boednocomic/image/upload/",
  },
};
