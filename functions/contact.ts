import { EventContext } from '@cloudflare/workers-types/experimental';
import { createTransport } from 'nodemailer';

// Cloudflare Pages Function to send contact messages via Gmail SMTP.
//
// This function expects a JSON body containing `name` and `message` fields.
// It uses environment variables to configure the Gmail account:
// - GMAIL_USER: the Gmail address that will send the email
// - GMAIL_PASS: the app password or OAuth token for authentication
// - PERSONAL_EMAIL: Benjamin's personal email address to receive messages (falls back to GMAIL_USER)

export const onRequestPost = async (context: any) => {
  const { request, env } = context;
  let body: { 
    name?: string; 
    email?: string; 
    message?: string 
  } = {};
  
  try {
    body = await request.json();
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ success: false, error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  const { name, email ,message } = body;

  if(!email){
    return new Response(JSON.stringify({ success: false, error: 'Email is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!message) {
    return new Response(JSON.stringify({ success: false, error: 'Message is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Configure the nodemailer transporter using Gmail SMTP.
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: env.GMAIL_USER,
      pass: env.GMAIL_PASS,
    },
  });

  const recipient = env.PERSONAL_EMAIL || env.GMAIL_USER;
  const mailOptions = {
    from: env.GMAIL_USER,
    to: recipient,
    subject: `Contact form submission from ${name ?? 'anonymous'}`,
    text: `${message}\n\nFrom: ${name ?? 'anonymous'}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error?.message || 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};