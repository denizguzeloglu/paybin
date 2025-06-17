import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paybin - Accept Crypto Payments Instantly & Securely',
  description: 'Simplify invoicing and payment collection with our integrated system. Accept Bitcoin, Ethereum, USDT, and more cryptocurrencies with ease.',
  keywords: 'cryptocurrency, payments, bitcoin, ethereum, USDT, payment gateway, crypto payments',
  openGraph: {
    title: 'Paybin - Accept Crypto Payments Instantly & Securely',
    description: 'Simplify invoicing and payment collection with our integrated system.',
    type: 'website',
    url: 'https://paybin.io',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Paybin - Cryptocurrency Payment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paybin - Accept Crypto Payments',
    description: 'The most trusted cryptocurrency payment platform for businesses',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}