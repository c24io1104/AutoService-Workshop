import { BodyParam, JsonController, Post } from 'routing-controllers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@JsonController('/verify')
export class VerificationController {
  @Post('/otp')
  async verifyOTP(
    @BodyParam('phone') phone: string,
    @BodyParam('code') code: string
  ) {
    const user = await prisma.user.findUnique({
      where: { phone }
    });

    if (!user) return { success: false, error: 'User not found' };
    if (user.otpExpiry < new Date()) return { success: false, error: 'OTP expired' };
    if (user.otpCode !== code) return { success: false, error: 'Invalid OTP' };

    await prisma.user.update({
      where: { phone },
      data: {
        isVerified: true,
        otpCode: null,
        otpExpiry: null
      }
    });

    return { success: true, message: 'Verification successful' };
  }
}