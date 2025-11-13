import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Appointment Setter - Answer plumbing calls instantly',
  description: 'Answer plumbing calls instantly. Qualify intelligently. Book automatically.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, "PingFang SC", Helvetica, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}

