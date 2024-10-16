// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { email } = req.query;
  return res.status(200).send({ name: email });
}
