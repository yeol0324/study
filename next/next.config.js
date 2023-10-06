/** @type {import('next').NextConfig} */

const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const repository = "next";
console.log(process.env.REACT_APP_NODE_ENV);
// console.log(process.env);
const nextConfig = {
  basePath: process.env.REACT_APP_NODE_ENV === "production" ? "/next" : "",
  publicPath: process.env.REACT_APP_NODE_ENV === "production" ? "/next" : "",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "www.notion.so",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
    ],
    format: ["image/png", "image/webp", "image/jpeg"],
  },
  assetPrefix:
    process.env.REACT_APP_NODE_ENV === "production"
      ? "https://yeol0324.github.io/next"
      : "",
};
console.log(nextConfig.publicPath, "-------------------");
async function initialize() {
  const db = await sqlite.open({
    filename: "./my-db.sqlite",
    driver: sqlite3.Database,
  });
  await db.migrate();
  //   // const pokemons = await db.all('SELECT * FROM pokemon')
}
initialize();

module.exports = nextConfig;
