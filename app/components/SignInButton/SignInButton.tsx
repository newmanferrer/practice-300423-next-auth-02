import { signIn } from 'next-auth/react'
import styles from './SignInButton.module.scss'

export function SignInButton() {
  const handlerClick = () => signIn()

  return (
    <button className={styles.button} onClick={handlerClick}>
      Sign in
    </button>
  )
}
