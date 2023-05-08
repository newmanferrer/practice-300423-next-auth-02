'use client'

import { useSession } from 'next-auth/react'
import { Logo, Navigation, UserProfile, SignInButton } from '../'
import styles from './Header.module.scss'

export function Header() {
  const { status } = useSession()

  return (
    <header className={styles.container}>
      <Logo />
      <Navigation />
      {status === 'authenticated' ? <UserProfile /> : <SignInButton />}
    </header>
  )
}
