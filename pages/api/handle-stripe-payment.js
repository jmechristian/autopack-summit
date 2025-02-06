import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency, description, metadata } = req.body;
    console.log(amount);
    // Validate amount
    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    // Convert dollar amount to cents (smallest currency unit)
    const amountInSmallestUnit = Math.round(parseFloat(amount) * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInSmallestUnit,
      currency,
      description: description,
      automatic_payment_methods: {
        enabled: false,
      },
      payment_method_types: ['card'],
      metadata: metadata,
    });

    return res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Payment error:', error);
    return res.status(500).json({ error: error.message });
  }
}
