import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, organization, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate environment variable
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Build email content with all fields
    const emailText = `
New Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}
${phone ? `- Phone: ${phone}` : ""}
${organization ? `- Organization: ${organization}` : ""}
${service ? `- Service: ${service}` : ""}

Message:
${message}

---
Submitted on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `.trim();

    // Build HTML version for better formatting
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h3 style="color: #4F46E5; margin-top: 0;">Contact Details</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666; width: 150px;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
              <td style="padding: 8px 0; color: #333;">
                <a href="mailto:${email}" style="color: #4F46E5; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">Phone:</td>
              <td style="padding: 8px 0; color: #333;">
                <a href="tel:${phone}" style="color: #4F46E5; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            ` : ""}
            ${organization ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">Organization:</td>
              <td style="padding: 8px 0; color: #333;">${organization}</td>
            </tr>
            ` : ""}
            ${service ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">Service:</td>
              <td style="padding: 8px 0; color: #333;">${service}</td>
            </tr>
            ` : ""}
          </table>
        </div>
        
        <div style="margin-top: 20px;">
          <h3 style="color: #4F46E5;">Message</h3>
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #4F46E5; border-radius: 4px; margin-top: 10px;">
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent from the Pranaras Academy contact form.</p>
          <p>Submitted on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
        </div>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Pranaras Academy Contact Form <onboarding@resend.dev>", // You'll need to verify your domain later
      to: "kpherald7@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission - ${service || "General Enquiry"}`,
      text: emailText,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
