// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (
  req: { [index: string]: any },
  res: { [index: string]: any }
) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
