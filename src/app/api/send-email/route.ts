// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request:any) {
  const { name, email, message } = await request.json();

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    to: process.env.EMAIL_USER,
    from: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    html: `
      <h2>New message from your website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}