// app/api/contact/route.ts

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // ── Validation ────────────────────────────────────────────────────────
    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Enter a valid email address" },
        { status: 400 },
      );
    }

    const firstName = name.split(" ")[0];
    const lastName = name.split(" ").slice(1).join(" ") || "";

    // ── Save to Resend Audience ───────────────────────────────────────────
    await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    // ── Confirmation email to the user ────────────────────────────────────
    // app/api/contact/route.ts — updated confirmation email section

    await resend.emails.send({
      from: "Davochi Multihomes <no-reply@properties.davochi.ng>",
      to: email,
      subject: "You're on the Davochi list! 🏡",
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin:0;padding:0;background:#f4f4f4;font-family:sans-serif;">

      <!-- Header -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding:32px 24px 0;">
            <h1 style="margin:0;font-size:28px;font-weight:900;color:#111;letter-spacing:-1px;">
              DAVOCHI
            </h1>
            <p style="margin:4px 0 0;font-size:12px;color:#888;letter-spacing:2px;text-transform:uppercase;">
              Multihomes & Interiors
            </p>
          </td>
        </tr>
      </table>

      <!-- Divider -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding:16px 24px;">
            <div style="width:40px;height:3px;background:#FBBD00;"></div>
          </td>
        </tr>
      </table>

      <!-- Body -->
      <table width="600" align="center" cellpadding="0" cellspacing="0"
             style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
        <tr>
          <td style="padding:40px 40px 32px;">

            <h2 style="margin:0 0 8px;font-size:22px;color:#111;">
              Hi ${firstName}, you're on the list! 🎉
            </h2>

            <p style="margin:0 0 20px;color:#444;font-size:15px;line-height:1.6;">
              Thank you for reaching out to <strong>Davochi Multihomes and Interiors</strong>. 
              A member of our team will get back to you shortly.
            </p>

            <div style="background:#f9f9f9;border-left:4px solid #FBBD00;padding:16px 20px;border-radius:0 6px 6px 0;margin-bottom:24px;">
              <p style="margin:0;color:#444;font-size:14px;line-height:1.6;">
                You've also been added to our mailing list. From time to time, we'll send you 
                updates on our latest projects, exclusive property offers, and real estate 
                insights from Davochi — all curated to help you find your ideal home.
              </p>
            </div>

            <p style="margin:0 0 24px;color:#444;font-size:15px;line-height:1.6;">
              In the meantime, feel free to explore our projects at 
              <a href="https://davochi.ng/projects" style="color:#FBBD00;text-decoration:none;font-weight:600;">
                davochi.ng/projects
              </a>
            </p>

            <!-- CTA Button -->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-radius:6px;background:#111;">
                  <a href="https://davochi.ng/projects"
                     style="display:inline-block;padding:12px 28px;color:#fff;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:0.5px;">
                    View Our Projects →
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>
      </table>

      <!-- Footer -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding:24px;color:#999;font-size:12px;line-height:1.8;">
            <p style="margin:0;">
              <strong style="color:#666;">Davochi Multihomes and Interiors</strong>
            </p>
            <p style="margin:4px 0;">
              Suite B3, Upper Grace Plaza, Plot 217, Shettima Mungono Street, Utako-Abuja.
            </p>
            <p style="margin:4px 0;">
              <a href="tel:+2348052571134" style="color:#999;text-decoration:none;">+234 805 257 1134</a>
              &nbsp;·&nbsp;
              <a href="https://davochi.ng" style="color:#999;text-decoration:none;">davochi.ng</a>
            </p>
            <p style="margin:16px 0 0;font-size:11px;color:#bbb;">
              You're receiving this because you contacted us at davochi.ng.<br/>
              Don't want to hear from us? &nbsp;
              <a href="https://davochi.ng/api/unsubscribe?email=${email}"
                 style="color:#FBBD00;text-decoration:underline;">
                Unsubscribe
              </a>
            </p>
          </td>
        </tr>
      </table>

    </body>
    </html>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
