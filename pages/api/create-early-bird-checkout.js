const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1P0olbBmL7ZGJcSL4BF5frQt',
            quantity: 1,
            // email: req.body.email,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/registration-thank-you?success=true`,
        cancel_url: `${req.headers.origin}/registration-confirmation?success=false`,
      });
      res.redirect(302, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
