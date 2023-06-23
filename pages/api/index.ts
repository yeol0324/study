// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// sqlite 연결 하기 위한 라이브러리 import
import sqlite3 from "sqlite3";
import sqlite, { open } from "sqlite";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
};

export default async function getPokemonById(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const db = await open({
    filename: "./my-db.sqlite",
    driver: sqlite3.Database,
  });
  const pokemons = await db.all(`select * from pokemon`);
  if (req.method === "GET") {
    console.log(req);
    const result = { data: pokemons };
    res.status(200).json(result);
  }
  if (req.method === "POST") {
    try {
      await db.all(
        `INSERT INTO pokemon values ("${pokemons.length + 1}","${
          req.body.name
        }")`
      );
      const result = { data: "ok" };
      res.status(200).json(result);
    } catch (error) {
      res.status(500);
      res.send({ data: error });
    }
  }
}
