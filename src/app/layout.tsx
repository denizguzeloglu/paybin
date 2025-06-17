import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paybin',
  description: 'Accept payments in Bitcoin, Ethereum, USDT, and other digital currencies anonymously with Paybin',
  icons: {
    icon: 'https://framerusercontent.com/images/6FspHPLhbGLiuUBCj1IwTaxpc4.png',
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