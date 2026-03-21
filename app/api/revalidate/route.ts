// app/api/revalidate/route.ts
// Sanity calls this endpoint every time content is published

import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Secret to verify the request is genuinely from Sanity
const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  // ── 1. Verify the secret header ────────────────────────────────────────
  const secret = req.headers.get('x-webhook-secret')
  if (secret !== SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { _type } = body  // Sanity sends the document type that changed

    console.log(`Revalidating for type: ${_type}`)

    // ── 2. Revalidate based on which document type changed ────────────────
    switch (_type) {
      case 'project':
        revalidatePath('/', 'page')               // home (carousel)
        revalidatePath('/projects', 'page')        // projects listing
        revalidatePath('/projects/[slug]', 'page') // individual project
        break

      case 'teamMember':
        revalidatePath('/about', 'page')
        break

      case 'contactMember':
        revalidatePath('/contact', 'page')
        break

      case 'stat':
        revalidatePath('/about', 'page')
        revalidatePath('/', 'page')
        break

      case 'service':
        revalidatePath('/', 'page')
        break

      case 'testimonial':
        revalidatePath('/', 'page')
        break

      case 'faq':
        revalidatePath('/about', 'page')
        break

      case 'siteSettings':
        revalidatePath('/about', 'page')
        revalidatePath('/contact', 'page')
        break

      default:
        // If unsure, revalidate everything
        revalidatePath('/', 'layout')
    }

    return NextResponse.json({
      revalidated: true,
      type: _type,
      timestamp: new Date().toISOString(),
    })

  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
}