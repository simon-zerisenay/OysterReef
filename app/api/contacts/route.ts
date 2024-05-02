import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  // console.log(data);

  try {
    const { email, message,  name,title,price } = data;
    // console.log(title)

    // Validate input (optional, but recommended)
    if (!email || !message || !name) {
      throw new Error('Missing required fields in request body.');
    }

    const transporter = await nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "eyasuaraya0@gmail.com",
        pass: process.env.Email_Password,
      },
    });

    const html = `
      <style>
        .center {
          text-align: center;
        }
      </style>
      <div class="center">
        <h1>${name} requested information</h1>
        <p>${email}</p>
        <p>${message}</p>
        <p>${title}</p>
        <p>${price}</p>
      </div>
    `;

    const mailOptions = {
      from: {
        name: name, // Set the display name using the request body's name
        address: email, // Use your actual email address
      },
      to: '"Oyster Reefs" <eyasuaraya0@gmail.com>',
      text: message,
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);

    if (info.response) {
      console.log('Email Sent:', info.response);
      //await sendAutomaticReply(email, name);
      return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
        status: 200,
      });
    } else {
      console.error('Error sending email');
      return new Response(JSON.stringify({ message: 'Failed to send email!' }), {
        status: 500,
      });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email!' }), {
      status: 500,
    });
  }
}

// const sendAutomaticReply = async (recipientEmail: string, recipientName: string) => {
//   const transporter = await nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "eyasuaraya0@gmail.com",
//       pass: process.env.Email_Password,
//     },
//   });

//   const replyHtml = `
//     <div>
//       <p>Dear ${recipientName},</p>
//       <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
//       <p>Best regards,<br/>FRC Activity App Team</p>
//     </div>
//   `;

//   const replyMailOptions = {
//     from: '"FRC Activity App" <eyasuaraya0@gmail.com>',
//     to: `"${recipientName}" <${recipientEmail}>`,
//     subject: "Re: Your Message",
//     html: replyHtml,
//   };

//   const info = await transporter.sendMail(replyMailOptions);

//   if (info.response) {
//     console.log('Automatic reply sent:', info.response);
//   } else {
//     console.error("Error sending automatic reply:", Error);
//   }
// };
