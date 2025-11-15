import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      serviceType,
      pickupLocation,
      deliveryLocation,
      pickupDate,
      cargoType,
      weight,
      additionalInfo,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !pickupLocation || !deliveryLocation) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Delex LLC Website <noreply@delexllc.com>",
      to: ["info@delexllc.com"],
      replyTo: email,
      subject: `New Quote Request from ${name} - ${serviceType}`,
      html: `
        <h2>New Quote Request</h2>

        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}

        <h3>Shipment Details</h3>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Pickup Location:</strong> ${pickupLocation}</p>
        <p><strong>Delivery Location:</strong> ${deliveryLocation}</p>
        ${pickupDate ? `<p><strong>Pickup Date:</strong> ${pickupDate}</p>` : ""}
        ${cargoType ? `<p><strong>Cargo Type:</strong> ${cargoType}</p>` : ""}
        ${weight ? `<p><strong>Estimated Weight:</strong> ${weight}</p>` : ""}

        ${additionalInfo ? `<h3>Additional Information</h3><p>${additionalInfo.replace(/\n/g, "<br>")}</p>` : ""}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Failed to send quote request" },
      { status: 500 }
    );
  }
}
