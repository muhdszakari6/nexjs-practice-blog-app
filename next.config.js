/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_username: "salim",
        mongodb_password: "salim",
        mongodb_clustername: "cluster0",
        mongodb_database: "udemy-blog",
      },
    };
  }
  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: "salim",
      mongodb_password: "salim",
      mongodb_clustername: "cluster0",
      mongodb_database: "udemy-blog",
    },
  };
};
