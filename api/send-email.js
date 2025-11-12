/* eslint-disable no-undef */
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (req.headers.authorization !== `Bearer ${process.env.API_NODE_KEY}`) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { from, subject, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject,
            text: `Message from: ${from}\n\n${message}`,
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('error', error);
        res.status(500).json({ error: 'Email not sent' });
    }
}
