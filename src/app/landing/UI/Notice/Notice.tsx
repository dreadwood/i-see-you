import Icon from '@/components/Icon/Icon'
import styles from './Notice.module.scss'
import clsx from 'clsx'

interface NoticeProps {
  text: string
  isError?: boolean
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Notice({
  text,
  isError,
  className,
  onClick
}: NoticeProps): JSX.Element {
  return (
    <div className={clsx(styles.notice, isError && styles.error, className)}>
      <Icon className={styles.icon} name="circle-check-2" />
      {text}
      <button
        className={styles.close}
        onClick={onClick}
        aria-label="закрыть уведомление"
      >
        <Icon name="cross" />
      </button>
    </div>
  )
}
