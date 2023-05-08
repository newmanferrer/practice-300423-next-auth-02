'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { Message } from '../Message/Message'
import styles from './RegisterForm.module.scss'

export function RegisterForm() {
  const [name, setName] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.toLowerCase(),
          image,
          email,
          password
        })
      })

      if (response.ok) {
        signIn()
      } else {
        setError((await response.json()).error)
      }
    } catch (error: any) {
      setError(error?.message)
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        Create your account
      </h2>

      <input
        className={styles.container__input}
        type='text'
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
        required
        placeholder='your name'
      />

      <input
        className={styles.container__input}
        type='text'
        value={image}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setImage(event.target.value)}
        required
        placeholder='your image url'
      />

      <input
        className={styles.container__input}
        type='email'
        value={email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
        required
        placeholder='email@email.com'
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

      <button className={styles.container__button}>Register</button>

      <p className={styles.container__paragraph}>
        I have an account?{' '}
        <Link className={styles.container__link} href='/signin'>
          Sign in
        </Link>
      </p>
    </form>
  )
}
