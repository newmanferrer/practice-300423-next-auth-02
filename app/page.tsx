import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import Image from 'next/image'
import styles from './page.module.scss'

export default async function HomePage() {
  const session = await getServerSession(authOptions)

  return (
    <main className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}> HOME PAGE </h1>
      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        Next Auth and Prisma 02
      </h2>
      <h3 className={`${styles.container__title} ${styles.container__title_h3}`}>
        ( Database: PostgreSQL )
      </h3>

      {session ? (
        <div className={styles.container__user_wrapper}>
          {session.user?.image && (
            <Image src={session.user?.image} alt='user image' width={150} height={150} priority />
          )}

          <div className={styles.container__user_info_wrapper}>
            <h4 className={`${styles.container__title} ${styles.container__title_h4}`}>
              {session.user?.name}
            </h4>
            <h4 className={`${styles.container__title} ${styles.container__title_h4}`}>
              {session.user?.email}
            </h4>
          </div>
        </div>
      ) : (
        <div className={styles.container__user_wrapper}>
          <h4
            className={`${styles.container__title} ${styles.container__title_h4} ${styles.container__title_error}`}
          >
            There is not logged user
          </h4>
        </div>
      )}
    </main>
  )
}
