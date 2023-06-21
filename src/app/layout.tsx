import Layout from '@/layout'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sea Turtle Oversight Protection',
  description: 'Resist Extinction',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
