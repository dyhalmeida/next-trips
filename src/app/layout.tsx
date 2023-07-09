import { NextAuthProvider } from '@/providers/auth'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trips',
  description: 'Travel booking system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <NextAuthProvider>
        {children}  
      </NextAuthProvider>
      </body>
    </html>
  )
}
