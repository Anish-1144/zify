// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  phone: string;
  email: string;
  companyName: string;
  location: string;
  businessType: string;
  acceptsCards: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as FormData;
    const {
      name,
      phone,
      email,
      companyName,
      location,
      businessType,
      acceptsCards,
    } = body;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "svvvgopal@gmail.com",
      subject: `New Business Registration: ${companyName}`,
      html: `
        <h2>New Business Registration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Accepts Credit/Debit Cards:</strong> ${acceptsCards}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form. Please try again." },
      { status: 500 }
    );
  }
}
