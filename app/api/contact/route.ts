// app/api/contact/route.ts

import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    // ── Validation ────────────────────────────────────────────────────────
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: 'Enter a valid email address' },
        { status: 400 }
      )
    }

    const firstName = name.split(' ')[0]
    const lastName  = name.split(' ').slice(1).join(' ') || ''

    // ── Save to Resend Audience ───────────────────────────────────────────
    await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    })

    // ── Confirmation email to the user ────────────────────────────────────
    await resend.emails.send({
      from:    'Davochi Multihomes <hello@yourdomain.com>',
      to:      email,
      subject: 'Thanks for reaching out — we\'ll be in touch',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#FBBD00;">Thank you, ${firstName}!</h2>
          <p>We've received your message and a member of our team will get back to you shortly.</p>
          ${phone    ? `<p><b>Phone:</b> ${phone}</p>`     : ''}
          ${message  ? `<p><b>Message:</b> ${message}</p>` : ''}
          <p style="color:#888;font-size:13px;margin-top:24px;">
            You may occasionally receive updates about our latest projects and offers.
            You can unsubscribe at any time.
          </p>
          <hr style="border:none;border-top:1px solid #eee;" />
          <p style="color:#888;font-size:12px;">Davochi Multihomes · Abuja, Nigeria</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}