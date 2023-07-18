import './globals.css'
import { Abel } from 'next/font/google'
import { Footer } from '@/layout/footer/Footer'
import { NavBar } from '@/layout/navigation/NavBar'

const abel = Abel({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Sea Turtle Oversight Protection',
  description: 'Resist Extinction',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={abel.className}>
        <NavBar />
        <div className='layout-page-container'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
