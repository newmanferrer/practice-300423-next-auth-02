import styles from './Message.module.scss'

type MessageProps = {
  children: React.ReactNode
}

export function Message({ children }: MessageProps) {
  return <div className={styles.container}>{children}</div>
}
