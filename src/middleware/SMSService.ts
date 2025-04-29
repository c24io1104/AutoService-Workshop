import twilio from 'twilio';
import 'dotenv/config';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

export class SMSService {
  static async sendOTP(phoneNumber: string, code: string) {
    try {
      await client.messages.create({
        body: `Your verification code: ${code}`,
        from: twilioPhone,
        to: phoneNumber
      });
    } catch (error) {
      console.error('SMS sending failed:', error);
      throw new Error('Failed to send SMS');
    }
  }
}