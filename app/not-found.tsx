// app/not-found.tsx
// app/layout.tsx — add this line at the top
export const dynamic = 'force-dynamic' 


export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-mono font-bold mb-4">404</h1>
      <p className="text-gray-500 mb-8">Page not found</p>
      <a href="/" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
        Go Home
      </a>
    </div>
  )
}