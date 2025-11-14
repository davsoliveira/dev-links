// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
      {
        protocol: "https",
        hostname: "prismic-io.s3.amazonaws.com", // caso use CDN secundária do prismic
      },
    ],
  },
};
