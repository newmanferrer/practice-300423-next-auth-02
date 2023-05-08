'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Message } from '../Message/Message'
import styles from './SignInForm.module.scss'

export function SignInForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  let callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (callbackUrl.includes('register')) callbackUrl = '/dashboard'

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const response = await signIn('credentials', {
        redirect: true,
        email,
        password,
        callbackUrl
      })

      if (!response?.error) {
        router.push(callbackUrl)
      } else {
        setError('Invalid email or password')
      }
    } catch (error: any) {
      console.error(error)
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>Sign in</h2>

      <input
        className={styles.container__input}
        type='email'
        value={email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
        required
        placeholder='email@domain.com'
      />
      <input
        className={styles.container__input}
        type='password'
        value={password}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
        required
        placeholder='your secret password'
      />

      {error && <Message>{error}</Message>}

      <button className={styles.container__button}>Sign in</button>

      <p className={styles.container__paragraph}>
        you need an account?{' '}
        <Link className={styles.container__link} href='/register'>
          Create account
        </Link>
      </p>
    </form>
  )
}
