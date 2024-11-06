import Script from 'next/script'
import './global.scss'
import { Sen, Work_Sans } from 'next/font/google'

const sen = Sen({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sen',
})

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

// TODO find Avenir Next

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${workSans.className} ${sen.variable}`}>
        {children}
        <Script src='https://kit.fontawesome.com/9dc7ac5049.js' />
      </body>
    </html>
  )
}
