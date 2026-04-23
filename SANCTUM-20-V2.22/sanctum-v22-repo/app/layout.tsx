import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SANCTUM V2.2',
  description: 'Coach de projet assisté par mentors, sécurisé, SEO-first et orienté documents.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
