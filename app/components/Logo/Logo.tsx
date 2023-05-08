import Link from 'next/link'
import styles from './Logo.module.scss'

export function Logo() {
  return (
    <Link className={styles.link} href='/'>
      Logo
    </Link>
  )
}
