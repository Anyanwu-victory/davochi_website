// app/studio/[[...tool]]/StudioClient.tsx
'use client'

import dynamic from 'next/dynamic'

const NextStudioNoSSR = dynamic(
  async () => {
    // ── Polyfill useEffectEvent before Sanity loads ───────────────────────
    // Sanity 5.17+ uses React.useEffectEvent which isn't exported
    // from React 19 stable — this adds a safe shim
    const React = await import('react')
    if (!(React as any).useEffectEvent) {
      ;(React as any).useEffectEvent = (fn: (...args: any[]) => any) => fn
    }

    const { NextStudio } = await import('next-sanity/studio')
    const { default: config } = await import('@/sanity.config')

    return function Studio() {
      return <NextStudio config={config} />
    }
  },
  {
    ssr: false,
    loading: () => (
      <div style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        height:         '100vh',
        fontFamily:     'sans-serif',
        fontSize:       '14px',
        color:          '#666',
      }}>
        Loading Studio...
      </div>
    ),
  }
)

export default function StudioClient() {
  return <NextStudioNoSSR />
}