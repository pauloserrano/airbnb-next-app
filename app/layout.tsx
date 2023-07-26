import { Nunito } from 'next/font/google'
import Navbar from '@/components/Navbar'
import RegisterModal from '@/components/RegisterModal'
import LoginModal from '@/components/LoginModal'
import ToasterProvider from '@/providers/ToasterProvider'
import getCurrentUser from '@/actions/getCurrentUser'

import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
