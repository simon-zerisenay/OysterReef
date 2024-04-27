import {NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
//require('dotenv').config()
// import { NextResponse } from 'next';

export async function POST(req: Request, res:Response) {
  const data = await req.json();
  console.log(data);
//   return new Response(data);

    try {
      const { email, message, name } = data;

      // Validate input (optional, but recommended)
      if (!email || !message || !name) {
        throw new Error('Missing required fields in request body.');
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "eyasuaraya0@gmail.com",
    pass:process.env.Email_Password,
  },
       
    })
const html = `
    <style>
        .center {
            text-align: center;
        }
        
    </style>
    <div class="center">
        <h1>Welcome to FRC Activity App!</h1>
        <p>${email}</p>
        <p>${message}</p>
        
    </div>
`;
    const mailOptions={
        from: {
    name: name, // Set the display name using the request body's name
    address: email // Use your actual email address
  },
        to: '"FRC Activity App" <eyasuaraya0@gmail.com>',
        text:message,
        html: html,
    }
    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error)
        }else{
            console.log('Email Send:' + info.response)
           sendAutomaticReply(email, name);
        }
        
    })
    return new Response('there was no error')
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response('there was an error')
    //   res.status(500).json({ message: 'Error sending email.' });
    }
  
}

const sendAutomaticReply = (recipientEmail: string, recipientName: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "eyasuaraya0@gmail.com",
      pass: process.env.Email_Password,
    },
  });

  const replyHtml = `
    <div>
      <p>Dear ${recipientName},</p>
      <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
      <p>Best regards,<br/>FRC Activity App Team</p>
    </div>
  `;

  const replyMailOptions = {
    from: '"FRC Activity App" <eyasuaraya0@gmail.com>',
    to: `"${recipientName}" <${recipientEmail}>`,
    subject: "Re: Your Message",
    html: replyHtml,
  };

  transporter.sendMail(replyMailOptions, function (error, info) {
    if (error) {
      console.log("Error sending automatic reply:", error);
    } else {
      console.log('Automatic reply sent:' + info.response);
    }
  });
};