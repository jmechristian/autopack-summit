const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { API } from 'aws-amplify';
import { createAPSTicket } from '../../src/graphql/mutations';
import { sendSponsorForm } from '../../util/sendSponsorForm';

export default async function handler(req, res) {
  await API.graphql({
    query: createAPSTicket,
    variables: {
      input: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        company: req.body.company,
        title: req.body.title,
      },
    },
  });

  sendSponsorForm(
    req.body.name,
    req.body.title,
    req.body.company,
    req.body.email,
    req.body.phone
  );

  // if (req.method === 'POST') {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1Nhx8iBmL7ZGJcSLDlz1RgHC',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/registration-confirmation?success=true`,
      cancel_url: `${req.headers.origin}/registration-confirmation?canceled=true`,
    });
    res.redirect(302, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
  // } else {
  //   res.setHeader('Allow', 'POST');
  //   res.status(405).end('Method Not Allowed');
  // }
}
