import clsx from 'clsx'
import styles from './Overlay.module.scss'

interface OverlayProps {
  className?: string
  isShow: boolean
  onClick: () => void
}

export default function Overlay({
  isShow,
  className,
  onClick
}: OverlayProps): JSX.Element {
  return (
    <div
      className={clsx(styles.overlay, isShow && styles.show, className)}
      onClick={onClick}
    />
  )
}
