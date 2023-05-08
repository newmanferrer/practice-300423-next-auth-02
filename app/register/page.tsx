import type { Metadata } from 'next'
import { RegisterForm } from '../components'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Register Page',
  description: 'Register Page'
}

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>Register Page</h1>

      <RegisterForm />
    </div>
  )
}
