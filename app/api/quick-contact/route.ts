import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Send email notification to info@delexllc.com
    const emailPromise = resend.emails.send({
      from: "Delex LLC Website <noreply@delexllc.com>",
      to: ["info@delexllc.com"],
      replyTo: email,
      subject: `Quick Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 20px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">New Quick Contact Message</h2>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #374151;">Name:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #374151;">Email:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #374151;">Phone:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${phone}" style="color: #2563eb;">${phone}</a>
                </td>
              </tr>
              ` : ""}
              <tr>
                <td colspan="2" style="padding: 16px 0;">
                  <strong style="color: #374151;">Message:</strong>
                  <p style="margin: 8px 0 0 0; color: #111827; line-height: 1.6;">
                    ${message.replace(/\n/g, "<br>")}
                  </p>
                </td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Sent from Quick Contact Form on delexllc.com
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Send SMS notification via T-Mobile email-to-SMS gateway
    // Format: 10-digit number @ tmomail.net
    const smsPromise = resend.emails.send({
      from: "Delex LLC <noreply@delexllc.com>",
      to: ["3025072525@tmomail.net"],
      subject: "New Lead",
      text: `New Contact!\n${name}\n${email}\n${phone || "No phone"}\nMsg: ${message.slice(0, 100)}${message.length > 100 ? "..." : ""}`,
    });

    // Wait for both to complete
    const [emailResult, smsResult] = await Promise.all([emailPromise, smsPromise]);

    if (emailResult.error) {
      console.error("Email send error:", emailResult.error);
      return NextResponse.json({ error: emailResult.error.message }, { status: 500 });
    }

    if (smsResult.error) {
      // Log SMS error but don't fail the request - email was sent successfully
      console.error("SMS send error:", smsResult.error);
    }

    return NextResponse.json({
      success: true,
      data: {
        email: emailResult.data,
        sms: smsResult.data
      }
    }, { status: 200 });

  } catch (error) {
    console.error("Quick contact error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
