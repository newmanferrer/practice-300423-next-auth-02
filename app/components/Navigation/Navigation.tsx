import Link from 'next/link'
import styles from './Navigation.module.scss'

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href='/'>
            Home
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href='/dashboard'>
            Dashboard
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href='/dashboard2'>
            Dashboard2
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href='/register'>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  )
}
