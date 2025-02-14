// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { trackRegistrationEmailOpen } from '../../util/api';

export default async function handler(req, res) {
  try {
    const { id, email } = req.query;
    const track = await trackRegistrationEmailOpen(id, email);
    res
      .status(200)
      .json({ success: true, message: 'Email open tracked successfully' });
  } catch (error) {
    console.error('Error tracking email open:', error);
    res
      .status(500)
      .json({ success: false, message: `Error tracking email open ${id}` });
  }
}
