import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS, // your Gmail
    pass: process.env.EMAIL_PASSWORD // App Password from Gmail
  }
});

async function sendEmails(name, email, message, subject) {
  // Mail to the user (acknowledgment)
  await transporter.sendMail({
    from: `"Kaveri Kumbhar" <${process.env.EMAIL_ADDRESS}>`,
    to: email,
    subject: `Thank you for contacting me, ${name}`,
    html: `
      <div style="font-family:Arial, sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#3b82f6;">Thank You for Reaching Out!</h2>
        <p style="font-size:16px;line-height:1.6;">
          Hello ${name},<br><br>
          Thank you for contacting me. I have received your message and will get back to you as soon as possible.<br><br>
          Your message details:<br>
          <b>Subject:</b> ${subject}<br><br>
          I appreciate you taking the time to reach out!<br><br>
          Best Regards,<br>
          <b>Kaveri Kumbhar</b><br>
          Web Developer
        </p>
      </div>`
  });

  // Mail to yourself (notification)
  await transporter.sendMail({
    from: `${name} <${email}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family:Arial, sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;padding:20px;">
        <h2 style="color:#3b82f6;margin-top:0;">New Message from Your Portfolio Website</h2>
        
        <div style="background-color:#f9fafb;padding:15px;border-radius:6px;margin:20px 0;">
          <p style="margin:5px 0;"><b>Name:</b> ${name}</p>
          <p style="margin:5px 0;"><b>Email:</b> <a href="mailto:${email}" style="color:#3b82f6;">${email}</a></p>
          <p style="margin:5px 0;"><b>Subject:</b> ${subject}</p>
        </div>
        
        <div style="margin:20px 0;">
          <h3 style="color:#374151;margin-bottom:10px;">Message:</h3>
          <div style="background-color:#f3f4f6;padding:15px;border-left:4px solid #3b82f6;border-radius:4px;">
            <p style="margin:0;white-space:pre-wrap;color:#1f2937;">${message}</p>
          </div>
        </div>
        
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
        
        <p style="color:#6b7280;font-size:14px;margin:0;">
          This email was sent from the contact form on your portfolio website.
        </p>
      </div>`
  });
}

export const POST = async (req) => {
  try {
    const { name, email, subject, message } = await req.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'All fields are required' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email address' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    await sendEmails(name, email, message, subject);
    
    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!' }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Mail error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send email. Please try again.' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

