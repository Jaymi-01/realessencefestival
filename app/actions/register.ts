"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function registerUser(formData: { 
  firstName: string; 
  lastName: string; 
  email: string; 
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Real Essence Festival <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Registration Successful - Real Essence Festival",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h1 style="color: #B11217; text-align: center;">Welcome to the Real Essence Festival!</h1>
          <p>Hi ${formData.firstName},</p>
          <p>You have successfully registered for the first-ever <strong>Real Essence Festival by Sedaap Supreme Noodles</strong>!</p>
          <p>We are so excited to have you join us for a day packed with real fun, real vibes, and real essence. Get ready for an unforgettable fusion of food, music, and culture.</p>
          <div style="background-color: #FFF113; padding: 15px; border-radius: 5px; text-align: center; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #000;">SEE YOU ON APRIL 5TH–6TH, 2026!</p>
          </div>
          <p>Best regards,<br/>The Real Essence Team</p>
        </div>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: "Failed to send email" };
  }
}
