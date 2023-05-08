'use client'

import { signOut } from 'next-auth/react'
import styles from './SignOutButton.module.scss'

export function SignOutButton() {
  const handlerClick = () => signOut({ callbackUrl: '/' })

  return (
    <button className={styles.button} onClick={handlerClick}>
      Sign out
    </button>
  )
}
