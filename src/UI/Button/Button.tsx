import clsx from 'clsx'
import styles from './Button.module.scss'
import Icon from '@/components/Icon/Icon'

interface ButtonProps {
  text: string
  iconLeft?: string
  iconRight?: string
  size?: 'size2'
  color?: 'orange' | 'ghost'
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onCLick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  text,
  iconLeft,
  iconRight,
  size,
  color = 'orange',
  type = 'button',
  className,
  onCLick
}: ButtonProps): JSX.Element {
  return (
    <button
      className={clsx(
        styles.btn,
        styles[color],
        size && styles[size],
        className
      )}
      type={type}
      onClick={onCLick}
    >
      {iconLeft && <Icon name={iconLeft} width={16} height={16} />}
      <span>{text}</span>
      {iconRight && <Icon name={iconRight} width={16} height={16} />}
    </button>
  )
}
