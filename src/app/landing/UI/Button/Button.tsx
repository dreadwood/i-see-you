import clsx from 'clsx'
import styles from './Button.module.scss'

interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onCLick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  text,
  type = 'button',
  className,
  onCLick
}: ButtonProps): JSX.Element {
  return (
    <button
      className={clsx(styles.btn, className)}
      type={type}
      onClick={onCLick}
    >
      {text}
    </button>
  )
}
