import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random Quote Machine',
  description: 'This page generates a random quote',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='mx-auto p-12 bg-black/40 min-h-screen text-gray-200'>
          {children}
        </main>
      </body>
    </html>
  )
}
