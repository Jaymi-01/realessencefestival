"use server";

import nodemailer from "nodemailer";

// Create the transporter once
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function registerUser(formData: { 
  firstName: string; 
  lastName: string; 
  gender: string; 
  phone: string; 
  email: string; 
}) {
  console.log("Starting registration for:", formData.email);

  try {
    // 1. Update Google Sheet FIRST and wait for it
    const sheetResponse = await fetch("https://script.google.com/macros/s/AKfycbyWpzgac7658loquzysSUrbmF8I9aTZiw3abl5ADhwK2w0ldSyCkhCll44y9QiuTn0KMw/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      redirect: "follow",
    });

    if (sheetResponse.ok) {
      console.log("Google Sheet updated successfully");
    } else {
      console.error("Google Sheet update failed:", await sheetResponse.text());
    }

    // 2. Attempt to send email via Nodemailer
    try {
      await transporter.sendMail({
        from: `"Real Essence Festival" <${process.env.EMAIL_USER}>`,
        to: formData.email,
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
      console.log("Email sent successfully via Nodemailer");
    } catch (emailErr) {
      console.error("Nodemailer service error:", emailErr);
    }

    return { success: true };

  } catch (err) {
    console.error("Critical Registration Error:", err);
    return { success: false, error: "Registration system encountered an error." };
  }
}
