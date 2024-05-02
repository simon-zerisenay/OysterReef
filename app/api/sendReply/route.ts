import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
export async function POST(req: Request, res: Response) {
  const { email, name,title,price } = await req.json();

  const transporter = await nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587, // Consider using port 465 with SSL/TLS for encryption
    secure: false, // Enable TLS encryption (check provider documentation)
    auth: {
      user: "eyasuaraya0@gmail.com",
      pass: process.env.Email_Password,
    },
  });

  const replyHtml = `
    <div>
      <p>Dear ${name},</p>
      <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
      <p>Best regards,<br/>Support Team</p>
    </div>
  `;

  const replyMailOptions = {
    from: {
        name: name, // Set the display name using the request body's name
        address: email, // Use your actual email address
      },
      to: '"Support team" <eyasuaraya0@gmail.com>',
    subject: "Re: Your Message",
    html: replyHtml,
  };

  const info = await transporter.sendMail(replyMailOptions);

  if (info.response) {
    console.log('Automatic reply sent:', info.response);
    return new Response(JSON.stringify({ message: 'Automatic reply sent!' }), {
      status: 200,
    });
  } else {
    console.error("Error sending automatic reply:", Error);
    // Handle error
    return new Response(JSON.stringify({ message: 'Failed to send automatic reply!' }), {
      status: 500,
    });
  }
}