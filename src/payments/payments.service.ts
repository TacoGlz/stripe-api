import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaymentsService {
  private stripe: Stripe.Stripe;

constructor(private configService: ConfigService) { 
    const secretKey = this.configService.get<string>('STRIPE_SECRET');
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY is not configured');
    }

    this.stripe = new Stripe(secretKey, {
      apiVersion: '2026-03-25.dahlia',
    });
  }

  async createPaymentIntent(amount: number) {
    return await this.stripe.paymentIntents.create({
        amount: amount,
        currency: 'mxn',
        automatic_payment_methods: {
            enabled: true
        }
    })
  }
}
