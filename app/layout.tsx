import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import RegisterModal from '@/components/RegisterModal'
import ToasterProvider from '@/providers/ToasterProvider'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
