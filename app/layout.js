import { OffcanvasHeader } from "./_components/index";
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '600' })

export const metadata = {
  title: 'dr Claudia Iftode',
  description: 'Dr. Claudia Iftode medic specialis medicina muncii',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
      <OffcanvasHeader />
      {children}
      </body>
    </html>
  )
}
