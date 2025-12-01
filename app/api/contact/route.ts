import { Resend } from "resend";
import { NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/telegram";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedPhone = phone ? phone.trim() : null;
    const sanitizedCompany = company ? company.trim() : null;
    const sanitizedMessage = message.trim();

    // Plain text version for better deliverability
    const plainText = `
Contact Form Submission from ${sanitizedName}

Contact Information:
- Name: ${sanitizedName}
- Email: ${sanitizedEmail}
${sanitizedPhone ? `- Phone: ${sanitizedPhone}` : ""}
${sanitizedCompany ? `- Company: ${sanitizedCompany}` : ""}

Message:
${sanitizedMessage}

---
This message was sent from the Delex LLC website contact form.
Delex LLC | Professional Trucking Services
Website: https://delexllc.com
    `.trim();

    const { data, error } = await resend.emails.send({
      from: "Delex LLC <notifications@delexllc.com>",
      to: ["info@delexllc.com"],
      replyTo: sanitizedEmail,
      subject: `Contact Form: ${sanitizedName}${sanitizedCompany ? ` - ${sanitizedCompany}` : ""}`,
      text: plainText,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #f4f4f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Contact Form Submission</h1>
              <p style="margin: 8px 0 0 0; color: #bfdbfe; font-size: 14px;">You have received a message from your website</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <!-- Contact Info Card -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #f8fafc; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px 0; color: #1e293b; font-size: 16px; font-weight: 600;">Contact Information</h2>

                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 80px;">Name:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 500;">${sanitizedName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email:</td>
                        <td style="padding: 8px 0;">
                          <a href="mailto:${sanitizedEmail}" style="color: #2563eb; font-size: 14px; text-decoration: none;">${sanitizedEmail}</a>
                        </td>
                      </tr>
                      ${sanitizedPhone ? `
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone:</td>
                        <td style="padding: 8px 0;">
                          <a href="tel:${sanitizedPhone}" style="color: #2563eb; font-size: 14px; text-decoration: none;">${sanitizedPhone}</a>
                        </td>
                      </tr>
                      ` : ""}
                      ${sanitizedCompany ? `
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Company:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${sanitizedCompany}</td>
                      </tr>
                      ` : ""}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <h2 style="margin: 0 0 12px 0; color: #1e293b; font-size: 16px; font-weight: 600;">Message</h2>
              <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${sanitizedMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>

              <!-- Reply Button -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top: 32px;">
                <tr>
                  <td style="background-color: #2563eb; border-radius: 8px;">
                    <a href="mailto:${sanitizedEmail}?subject=Re: Your inquiry to Delex LLC" style="display: inline-block; padding: 14px 28px; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none;">Reply to ${sanitizedName}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px 40px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #64748b; font-size: 13px; text-align: center;">
                This message was sent from the contact form on <a href="https://delexllc.com" style="color: #2563eb; text-decoration: none;">delexllc.com</a>
              </p>
              <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 12px; text-align: center;">
                Delex LLC | Professional Trucking Services | (302) 507-2525
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Send Telegram notification
    try {
      await sendTelegramNotification({
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        company: sanitizedCompany,
        message: sanitizedMessage,
        source: "contact-form",
      });
    } catch (err) {
      console.error("Telegram error:", err);
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
