"use server";

import nodemailer from "nodemailer";

export async function registerUser(formData: { 
  firstName: string; 
  lastName: string; 
  gender: string; 
  phone: string; 
  email: string; 
}) {
  console.log("--- New Registration Request ---");
  console.log("Email:", formData.email);

  // 1. Check if ENV variables exist (Log only existence, not values)
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ MISSING ENV VARIABLES: Please check Vercel Settings for EMAIL_USER and EMAIL_PASS");
    return { success: false, error: "Server configuration error" };
  }

  try {
    // 2. Create a fresh transporter INSIDE the function for serverless reliability
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Port 587 uses STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // 3. Send Email FIRST (Sequential)
    // We do this first because SMTP handshakes are the most likely to time out
    console.log("Attempting to send email...");
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
      console.log("✅ Email sent successfully");
    } catch (emailErr) {
      console.error("❌ Email Failed:", emailErr);
      // We continue even if email fails so we don't lose the lead in the sheet
    }

    // 4. Update Google Sheet (Sequential)
    console.log("Attempting to update Google Sheet...");
    try {
      const sheetResponse = await fetch("https://script.google.com/macros/s/AKfycbyWpzgac7658loquzysSUrbmF8I9aTZiw3abl5ADhwK2w0ldSyCkhCll44y9QiuTn0KMw/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        redirect: "follow",
      });

      if (sheetResponse.ok) {
        console.log("✅ Google Sheet updated successfully");
      } else {
        console.error("❌ Google Sheet update failed:", await sheetResponse.text());
      }
    } catch (sheetErr) {
      console.error("❌ Google Sheet fetch error:", sheetErr);
    }

    return { success: true };

  } catch (err) {
    console.error("Critical Registration Error:", err);
    return { success: false, error: "Registration system encountered an error." };
  }
}
