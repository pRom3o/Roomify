export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // Parse request body
        const { email, amount, reference, callback_url } = req.body;

        // Initialize Paystack payment
        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                // eslint-disable-next-line no-undef
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, amount, reference, callback_url }),
        });

        const data = await response.json();
        return res.status(200).json(data);
    } catch (err) {
        console.error('Paystack API error:', err);
        return res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
}
