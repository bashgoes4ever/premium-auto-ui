import type { Metadata } from 'next'
import '../styles/index.scss'
import "../styles/globals.scss";
import Header from "../components/Header/index";
import Footer from '../components/Footer/index';

export const metadata: Metadata = {
  title: 'Premium Auto - Подбор и импорт авто и мототехники'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
            <Header />
            {children}
            <Footer />
        </div>
      </body>
    </html>
  )
}
