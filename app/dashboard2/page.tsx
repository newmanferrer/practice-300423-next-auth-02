import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Dashboard Page 2',
  description: 'Dashboard Page 2'
}

export default function DashboardPage2() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>
        Dashboard Page 2
      </h1>
      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        (This is a protected page)
      </h2>
    </div>
  )
}
