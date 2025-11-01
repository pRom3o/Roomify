export default async function handler(req, res) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method not allowed' });
        }

        const { reference } = req.body;
        if (!reference) {
            return res.status(400).json({ error: 'Missing payment reference' });
        }

        const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            },
        });

        const verifyData = await verifyRes.json();
        console.log('Paystack verify response:', verifyData);

        if (verifyData.status) {
            return res.status(200).json({ status: 'success', data: verifyData.data });
        } else {
            return res.status(400).json({ status: 'failed', error: verifyData.message });
        }
    } catch (error) {
        console.error('Verify API error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
