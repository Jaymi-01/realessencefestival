"use server";

import { Resend } from "resend";

// 1. Remove NEXT_PUBLIC_ for better security
const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerUser(formData: { 
  firstName: string; 
  lastName: string; 
  gender: string;
  phone: string;
  email: string; 
}) {
  try {
    // 2. Wrap both in a Promise.all or handle sequentially with better error checking
    const [resendResult, sheetResponse] = await Promise.all([
      resend.emails.send({
        from: "Real Essence Festival <onboarding@resend.dev>",
        to: [formData.email],
        subject: "Registration Successful - Real Essence Festival",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h1 style="color: #B11217; text-align: center;">Welcome to the Real Essence Festival!</h1>
            <p>Hi ${formData.firstName},</p>
            <p>You have successfully registered for the first-ever <strong>Real Essence Festival by Sedaap Supreme Noodles</strong>!</p>
            <p>We are so excited to have you join us for a day packed with real fun, real vibes, and real essence.</p>
            <div style="background-color: #FFF113; padding: 15px; border-radius: 5px; text-align: center; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold; color: #000;">SEE YOU ON APRIL 5TH–6TH, 2026!</p>
            </div>
            <p>Best regards,<br/>The Real Essence Team</p>
          </div>
        `,
      }),
      fetch("https://script.google.com/macros/s/AKfycbyWpzgac7658loquzysSUrbmF8I9aTZiw3abl5ADhwK2w0ldSyCkhCll44y9QiuTn0KMw/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        redirect: "follow",
      })
    ]);

    // Check for Resend errors
    if (resendResult.error) {
      return { success: false, error: resendResult.error.message };
    }

    // Check if Google Sheet actually accepted the data
    if (!sheetResponse.ok) {
      console.error("Sheet Sync Failed - HTTP Error", sheetResponse.status, await sheetResponse.text());
    } else {
      // Even if ok, let's see what the response body says
      const responseText = await sheetResponse.text();
      console.log("Sheet Sync Success - Response Body:", responseText);
    }

    return { success: true, data: resendResult.data };

  } catch (err) {
    console.error("Registration Error:", err);
    return { success: false, error: "Failed to process registration" };
  }
}