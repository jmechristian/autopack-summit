// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { fields } = req.body;
  res.status(200).json({ name: fields.firstName });
}
