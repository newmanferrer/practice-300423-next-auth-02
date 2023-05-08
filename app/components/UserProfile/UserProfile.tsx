'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { SignOutButton } from '../'
import styles from './UserProfile.module.scss'

export function UserProfile() {
  const { data: session } = useSession()

  return (
    <details className={styles.details}>
      <summary className={styles.details__summary}>
        {session?.user?.image && (
          <Image src={session.user?.image} alt='user avatar' width={25} height={25} priority />
        )}
      </summary>
      <nav className={styles.details__nav}>
        <ul className={styles.details__ul}>
          <li className={styles.details__li}>
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </details>
  )
}
