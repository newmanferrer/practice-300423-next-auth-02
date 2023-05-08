import { GlobalContextsProviders } from './contexts'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Header } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Next Auth and Prisma with Postgres 2 | Home Page',
    template: ' Next Auth and Prisma with Postgres 2 | %s'
  },
  description: 'Home Page',
  category: 'web development | Practice',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Prisma', 'Postgres', 'Next Auth'],
  creator: 'Newman Ferrer',
  authors: [{ name: 'Newman Ferrer', url: 'https://github.com/newmanferrer' }]
}

type TProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: TProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <GlobalContextsProviders>
          <Header />
          <main>{children}</main>
        </GlobalContextsProviders>
      </body>
    </html>
  )
}
