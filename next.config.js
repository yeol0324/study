/** @type {import('next').NextConfig} */

const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const repository = "next";
const nextConfig = {
  // publicPath: "/next",
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
    process.env.NODE_ENV === "production"
      ? "https://yeol0324.github.io/next"
      : "",
};

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
