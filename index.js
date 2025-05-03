import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import twilio from 'twilio';

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

// Twilio configuration
const twilioClient = twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'your_auth_token');
const twilioPhoneNumber = '+97694791397'; // Your verified Twilio number

app.use(bodyParser.json());

// Registration endpoint
app.post('/register', async (req, res) => {
    const { phone, first_name, last_name } = req.body;

    if (!phone || !first_name || !last_name) {
        return res.status(400).json({ error: 'Phone number, first name, and last name are required' });
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    try {
        // Simulate sending OTP via SMS
        await twilioClient.messages.create({
            body: `Your OTP is ${otp}`,
            from: twilioPhoneNumber,
            to: phone,
        });

        res.status(200).json({ message: 'OTP sent to your phone (simulated)' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

// Login/Verify OTP endpoint
app.post('/login', async (req, res) => {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
        return res.status(400).json({ error: 'Phone and OTP are required' });
    }

    try {
        // Verify OTP
        const user = await prisma.user.findUnique({ where: { phone } });

        if (!user || user.otp !== otp) {
            return res.status(401).json({ error: 'Invalid OTP' });
        }
        res.status(200).json({ message: 'OTP sent to your phone' });
    } catch (error) {
        if (error.code === 21659) {
            console.error('Twilio Error: Invalid From number or country mismatch.');
            return res.status(400).json({ error: 'Invalid Twilio phone number or unsupported country.' });
        }
        console.error('Error during registration:', error); // Log the error
        res.status(500).json({ error: 'Failed to register user' });
    }
});

// Login/Verify OTP endpoint
app.post('/login', async (req, res) => {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
        return res.status(400).json({ error: 'Phone and OTP are required' });
    }

    try {
        // Verify OTP
        const user = await prisma.user.findUnique({ where: { phone } });

        if (!user || user.otp !== otp) {
            return res.status(401).json({ error: 'Invalid OTP' });
        }

        // Clear OTP after successful verification
        await prisma.user.update({
            where: { phone },
            update: { otp: null },
        });

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to verify OTP' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});