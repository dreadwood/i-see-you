import Icon from '@/components/Icon/Icon'
import styles from './PlayButton.module.scss'
import clsx from 'clsx'

interface PlayButtonProps {
  className?: string
  label?: string
  onClick?: () => void
}

export default function PlayButton({
  className,
  label,
  onClick
}: PlayButtonProps): JSX.Element {
  return (
    <button
      className={clsx(styles.btn, className)}
      aria-label={label || 'проиграть видео'}
      onClick={onClick}
    >
      <Icon name="play" />
    </button>
  )
}
