import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/layout/footer/Footer'
import { NavBar } from '@/components/navigation/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sea Turtle Oversight Protection',
  description: 'Resist Extinction',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
      <NavBar />
      <div className='layout-page-container'>{children}</div>
      <Footer />
      </body>
    </html>
  )
}
