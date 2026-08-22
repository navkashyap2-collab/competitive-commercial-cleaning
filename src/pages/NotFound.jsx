import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold text-ink">This page took a wrong turn.</h1>
      <p className="mt-4 text-ink-muted">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </main>
  )
}
