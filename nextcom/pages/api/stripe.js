import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    {
                        shipping_rate: 'shr_1MuGpTL2b18r387uPLbVSQ2i',
                    }
                ],

                line_items: req.body.map((item) => {
                    const img = item.image[0].asset._ref;
                    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/6q3gz3di/production/').replace('-webp', '.webp', '.jpg', '.jpeg', '.png');

                    return {
                        price_data: {

                            currency: 'gel',
                            product_data: {
                                name: item.name,
                                images: [newImage]
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.quantity
                    }
                }),


                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/canceled`,
                automatic_tax: { enabled: true },

            }
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session)
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

//! # We've problem to make request to backend to get items for stripe and the problem was we dont needed to in checkout session from body params we remove .Cartitems and also we've mistake in adjustable quantity 'minmum' instead of 'minimum' also we import stripe from stripe and make function like const stripe = const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);