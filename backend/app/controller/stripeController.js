const { response } = require('express');
const YOUR_DOMAIN = process.env.YOUR_DOMAIN;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const stripeController = {
    
    payment: async (request, response) => {
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: request.body.line_items,
                shipping: request.body.address,
                mode: 'payment',
                success_url: `${YOUR_DOMAIN}/success`,
                cancel_url: `${YOUR_DOMAIN}/cancel.html`,
            });
            
            response.json({ id: session.id });

        } catch (error) {
            response.status(500).send(`failed to process payment ${error}`);
        }
    }
}

module.exports = stripeController;