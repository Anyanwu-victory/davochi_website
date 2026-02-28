// app/api/unsubscribe/route.ts

import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 })
  }

  try {
    // Find the contact in the audience
    const { data: contacts } = await resend.contacts.list({
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    })

    const contact = contacts?.find((c) => c.email === email)

    if (!contact) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 })
    }

    // Mark as unsubscribed — they stay in the audience but won't receive emails
    await resend.contacts.update({
      id:           contact.id,
      audienceId:   process.env.RESEND_AUDIENCE_ID!,
      unsubscribed: true,
    })

    // Redirect to a confirmation page on your site
    return Response.redirect('https://yourdomain.com/unsubscribed')

  } catch (error) {
    console.error('Unsubscribe error:', error)
    return NextResponse.json({ error: 'Failed to unsubscribe' }, { status: 500 })
  }
}